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
    include: {
      "lucide": ["info", "message-circle", "globe", "film", "utensils", "user", "download", "house", "mail-open", "wifi", "newspaper", "book", "arrow-right", "circle-alert", "circle-help", "server", "package", "package-open", "users", "chart-no-axes-column", "tag", "id-card", "stamp", "bookmark", "disc", "gamepad-2", "shield", "feather", "moon", "sun", "arrow-up-right", "menu", "earth", "shopping-basket", "smile", "zap", "monitor", "cat", "palette", "chart-pie", "film", "video", "mic", "tv", "circle", "truck", "camera", "bot", "leaf", "chevron-down", "presentation", "umbrella", "mail", "rss","chevron-left", "chevron-right", "brush", "clock"],
      "simple-icons": ["twitter", "bluesky", "github", "instagram", "youtube", "discord", "microsoft", "apple", "linux", "android"]
    }
  })],
  markdown: markdownConfig
});