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
  }), partytown(), astroI18next(), icon({
    iconDir: "public/icons",
    include: {
      "lucide": ["info", "film", "house", "mail-open", "newspaper", "book", "arrow-right", "circle-alert", "server", "package", "package-open", "users", "tag", "id-card", "stamp", "bookmark", "disc", "shield", "feather", "moon", "sun", "arrow-up-right", "menu", "earth", "shopping-basket", "smile", "zap", "chart-pie", "video", "mic", "tv", "circle", "truck", "camera", "bot", "leaf", "chevron-down", "presentation", "umbrella", "mail", "rss","chevron-left", "chevron-right", "brush"],
      "simple-icons": ["twitter", "bluesky", "instagram", "youtube"]
    }
  })],
  markdown: markdownConfig
});