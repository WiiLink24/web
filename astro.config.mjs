import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import astroI18next from "astro-i18next";
import markdownConfig from './markdown.config.ts';
import partytown from "@astrojs/partytown";
import purgecss from "astro-purgecss";
import playformCompress from "@playform/compress";

import icon from "astro-icon";

export default defineConfig({
  site: "https://wiilink24.com",
  integrations: [mdx({
    ...markdownConfig,
    extendPlugins: false
  }), partytown(), purgecss(), playformCompress(), astroI18next(), (await import("@playform/compress")).default({
    CSS: true,
    HTML: {
      "html-minifier-terser": {
        removeAttributeQuotes: true
      }
    },
    Image: true,
    JavaScript: true,
    SVG: true
  }), icon()],
  markdown: markdownConfig
});