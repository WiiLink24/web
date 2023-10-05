import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import astroI18next from "astro-i18next";

// https://astro.build/config
export default defineConfig({
  integrations: [mdx()],
  integrations: [astroI18next()]
});