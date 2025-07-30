import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import astroI18next from "astro-i18next";
import partytown from "@astrojs/partytown";
import sitemap from '@astrojs/sitemap';
import icon from "astro-icon";

export default defineConfig({
  site: "https://wiilink.ca",
  integrations: [mdx({
    extendPlugins: false
  }), partytown(), astroI18next(), sitemap(), icon({
    iconDir: "public/icons",
    include: {
      "lucide": ["info", "film", "house", "mail-open", "newspaper", "book", "arrow-right", "circle-alert", "server", "package", "package-open", "users", "tag", "id-card", "stamp", "bookmark", "disc", "shield", "feather", "moon", "sun", "arrow-up-right", "menu", "earth", "shopping-basket", "smile", "zap", "chart-pie", "video", "mic", "tv", "circle", "truck", "camera", "bot", "leaf", "chevron-down", "presentation", "umbrella", "mail", "rss","chevron-left", "chevron-right", "brush", "refresh-cw", "database", "circle-question", "terminal", "app-window"],
      "simple-icons": ["twitter", "bluesky", "instagram", "youtube"]
    }
  })],
});
