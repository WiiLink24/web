import fs from "node:fs";
import path from "node:path";
import postcss from "postcss";

const ROOT = "/Users/alex/Documents/GitHub/web";
const args = process.argv.slice(2);
const files = args.filter((a) => !a.startsWith("--"));

function extractStyleBlocks(text) {
  const blocks = [];
  const re = /<style([^>]*)>([\s\S]*?)<\/style>/g;
  let m;
  while ((m = re.exec(text)) !== null) {
    blocks.push({ attrs: m[1], content: m[2] });
  }
  return blocks;
}

function normalize(s) {
  return s.replace(/\s+/g, " ").trim();
}

const perRule = new Map(); // key -> { sels, decls, files: Set }

for (const rel of files) {
  const file = path.join(ROOT, rel);
  const text = fs.readFileSync(file, "utf8");
  for (const block of extractStyleBlocks(text)) {
    let root;
    try {
      root = postcss.parse(block.content, { from: undefined });
    } catch (e) {
      continue;
    }
    root.walkRules((rule) => {
      const inKeyframes = rule.parent && rule.parent.type === "atrule" && /keyframes$/.test(rule.parent.name);
      if (inKeyframes) return;
      const decls = rule.nodes.filter((n) => n.type === "decl").map((d) => `${d.prop}: ${normalize(d.value)}${d.important ? " !important" : ""}`).join(";");
      if (!decls) return;
      let media = "";
      let p = rule.parent;
      while (p && p.type === "atrule") {
        media = `@${p.name} ${p.params}` + media;
        p = p.parent;
      }
      const key = media + "{" + normalize(rule.selectors.join(",")) + "{" + decls + "}}";
      if (!perRule.has(key)) {
        perRule.set(key, { key, files: new Set() });
      }
      perRule.get(key).files.add(rel);
    });
  }
}

const shared = [...perRule.values()].filter((r) => r.files.size >= 2);
shared.sort((a, b) => b.files.size - a.files.size);
for (const r of shared) {
  console.log(`\n[${r.files.size} files] ${r.key}`);
  console.log("  in: " + [...r.files].join(", "));
}
console.log(`\nTOTAL shared rules (>=2 files): ${shared.length}`);
