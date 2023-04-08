import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import astroI18next from "astro-i18next";

import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
	site: 'https://www.wiilink24.com',
	integrations: [mdx(), sitemap()],
	integrations: [astroI18next()],
});