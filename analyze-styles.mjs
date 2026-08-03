import fs from "node:fs";
import path from "node:path";
import postcss from "postcss";
import selectorParser from "postcss-selector-parser";

const ROOT = "/Users/alex/Documents/GitHub/web";
const args = process.argv.slice(2);
const APPLY = args.includes("--apply");
const files = args.filter((a) => !a.startsWith("--"));

function selectorInfo(sel) {
  const info = { classes: [], ids: [], tags: [], attrs: [], universal: false, rootish: false };
  try {
    const ast = selectorParser().astSync(sel);
    ast.walk((n) => {
      if (n.type === "class") info.classes.push(n.value);
      else if (n.type === "id") info.ids.push(n.value);
      else if (n.type === "tag") info.tags.push(n.value.toLowerCase());
      else if (n.type === "attribute") info.attrs.push(n.attribute);
      else if (n.type === "universal") info.universal = true;
    });
  } catch (e) {
    info.rootish = true; // unparseable: keep
  }
  const first = sel.replace(/\s+/g, " ").trim().split(/[\s>+~:,.[#]/)[0] || "";
  if (first === ":root" || first === "html" || first === "body" || first === "*") info.rootish = true;
  return info;
}

function escapeRe(s) {
  return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}

function tokenUsed(token, kind, corpus) {
  if (kind === "tag") {
    return new RegExp(`</?${escapeRe(token)}\\b`, "i").test(corpus);
  }
  return new RegExp(`(^|[^\\w-])${escapeRe(token)}([^\\w-]|$)`).test(corpus);
}

// classes built dynamically like `chat-action--${x}` / `float-${side}`
function dynamicPrefixUsed(token, corpus) {
  for (let i = token.length - 1; i >= 0; i--) {
    if (token[i] === "-") {
      const prefix = token.slice(0, i + 1);
      if (new RegExp(`${escapeRe(prefix)}\\$\\{`).test(corpus)) return true;
    }
  }
  return false;
}

function selectorUsed(sel, corpus, allowDynamic) {
  const info = selectorInfo(sel);
  if (info.rootish || info.universal) return true;
  if (info.classes.length === 0 && info.ids.length === 0 && info.tags.length === 0 && info.attrs.length === 0) {
    return true; // weird selector, keep
  }
  for (const c of info.classes) {
    if (tokenUsed(c, "class", corpus)) return true;
    if (allowDynamic && dynamicPrefixUsed(c, corpus)) return true;
  }
  for (const i of info.ids) if (tokenUsed(i, "id", corpus)) return true;
  for (const t of info.tags) if (tokenUsed(t, "tag", corpus)) return true;
  for (const a of info.attrs) if (tokenUsed(a, "attr", corpus)) return true;
  return false;
}

function ruleUsed(rule, corpus, allowDynamic) {
  return rule.selectors.some((s) => selectorUsed(s, corpus, allowDynamic));
}

function collectKeyframeRefs(root, corpus) {
  const refs = new Set();
  root.walkDecls((decl) => {
    if (/^animation/.test(decl.prop)) {
      for (const part of decl.value.split(/[\s,]+/)) refs.add(part.trim());
    }
  });
  for (const m of corpus.matchAll(/\banimation(?:-name)?\s*:\s*[^;"`]+/g)) {
    for (const part of m[0].replace(/^[^:]*:/, "").split(/[\s,]+/)) refs.add(part.trim());
  }
  for (const m of corpus.matchAll(/\banimation(?:-name)?\s*=\s*([^;]+)/g)) {
    for (const part of m[1].matchAll(/"([^"]+)"|'([^']+)'|([a-zA-Z][\w-]+)/g)) {
      const v = part[1] || part[2] || part[3];
      for (const tok of v.split(/[\s,]+/)) refs.add(tok.trim());
    }
  }
  return refs;
}

function prune(root, corpus, stats, allowDynamic) {
  root.walkRules((rule) => {
    const inKeyframes = rule.parent && rule.parent.type === "atrule" && /keyframes$/.test(rule.parent.name);
    if (inKeyframes) return; // handled separately
    if (!ruleUsed(rule, corpus, allowDynamic)) {
      const sel = rule.selectors.join(",");
      stats.unused.push({ rule, sel });
    }
  });
  for (const u of stats.unused) u.rule.remove();

  const refs = collectKeyframeRefs(root, corpus);
  root.walkAtRules(/keyframes$/i, (at) => {
    const name = at.params.trim();
    const referenced = [...refs].some((r) => new RegExp(`(^|\\s)${escapeRe(name)}(\\s|$)`).test(r));
    if (!referenced) {
      stats.unused.push({ rule: at, sel: `@keyframes ${name}` });
      at.remove();
    }
  });

  root.walkAtRules((at) => {
    if (["media", "supports", "container", "layer"].includes(at.name)) {
      if (at.nodes && at.nodes.length === 0) {
        stats.unused.push({ rule: at, sel: `@${at.name} ${at.params}` });
        at.remove();
      }
    }
  });
}

function extractStyleBlocks(text) {
  const blocks = [];
  const re = /<style([^>]*)>([\s\S]*?)<\/style>/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    blocks.push({ attrs: m[1], content: m[2], start: m.index, end: m.index + m[0].length });
  }
  return blocks;
}

// corpus = full file text (frontmatter + template + scripts) minus style blocks
function pageCorpus(text) {
  return text.replace(/<style[^>]*>[\s\S]*?<\/style>/g, "");
}

function componentCorpus(file, cache = new Map()) {
  if (cache.has(file)) return cache.get(file);
  cache.set(file, "");
  let text = fs.readFileSync(file, "utf8");
  let corpus = pageCorpus(text);
  const importRe = /import\s+(?:[\w{},*\s]+?\s+from\s+)?["']([^"']+\.astro)["']/g;
  let im;
  const dir = path.dirname(file);
  while ((im = importRe.exec(text)) !== null) {
    try {
      const target = path.resolve(dir, im[1]);
      corpus += "\n" + componentCorpus(target, cache);
    } catch (e) {
      /* ignore */
    }
  }
  cache.set(file, corpus);
  return corpus;
}

let totalUnused = 0;
let totalFiles = 0;

for (const rel of files) {
  const file = path.join(ROOT, rel);
  let text;
  try {
    text = fs.readFileSync(file, "utf8");
  } catch (e) {
    console.log(`SKIP ${rel}: ${e.message}`);
    continue;
  }
  const blocks = extractStyleBlocks(text);
  if (blocks.length === 0) {
    console.log(`SKIP ${rel}: no <style>`);
    continue;
  }
  totalFiles++;
  const ownCorpus = pageCorpus(text);
  let changed = false;
  let fileUnused = 0;

  for (const block of blocks) {
    const isGlobal = /\bis:global\b/.test(block.attrs);
    const corpus = isGlobal ? ownCorpus + "\n" + componentCorpus(file) : ownCorpus;
    let root;
    try {
      root = postcss.parse(block.content, { from: undefined });
    } catch (e) {
      console.log(`PARSE-ERR ${rel}: ${e.message}`);
      continue;
    }
    const stats = { unused: [] };
    prune(root, corpus, stats, isGlobal);

    if (stats.unused.length === 0) {
      continue;
    }
    fileUnused += stats.unused.length;
    totalUnused += stats.unused.length;
    console.log(`\n== ${rel} [${isGlobal ? "is:global" : "scoped"}] ${stats.unused.length} unused ==`);
    for (const u of stats.unused) {
      const pos = u.rule.source && u.rule.source.start ? `:${u.rule.source.start.line}` : "";
      console.log(`  - ${u.sel}${pos}`);
    }

    if (APPLY) {
      block.content = root.toString();
      changed = true;
    }
  }

  if (APPLY && changed) {
    for (let i = blocks.length - 1; i >= 0; i--) {
      const b = blocks[i];
      const orig = extractStyleBlocks(text)[i];
      const origLen = orig.end - orig.start;
      text = text.slice(0, b.start) + `<style${b.attrs}>${b.content}</style>` + text.slice(b.start + origLen);
    }
    fs.writeFileSync(file, text);
  }
  console.log(fileUnused ? `  => ${rel}: ${fileUnused} unused rule(s)` : "");
}

console.log(`\nTOTAL: ${totalFiles} files, ${totalUnused} unused rule(s)${APPLY ? " REMOVED" : " (report only)"}`);
