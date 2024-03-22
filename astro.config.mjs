import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import astroI18next from "astro-i18next";
import markdownConfig from './markdown.config.ts';
import astroRemark from "@astrojs/markdown-remark";

import partytown from "@astrojs/partytown";

// https://astro.build/config
export default defineConfig({
  site: "https://wiilink24.com",
  integrations: [mdx(), partytown()],
  markdown: markdownConfig,
  integrations: [mdx({
    ...markdownConfig,
    extendPlugins: false
  })],
  integrations: [astroI18next()]
});