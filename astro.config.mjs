import { defineConfig } from 'astro/config';
import mdx from "@astrojs/mdx";
import astroI18next from "astro-i18next";
import partytown from "@astrojs/partytown";
import sitemap from '@astrojs/sitemap';
import icon from "astro-icon";
import compress from "@playform/compress";

export default defineConfig({
  site: "https://wiilink.ca",
  build: {
    inlineStylesheets: 'auto',
    assets: 'assets-[hash]',
  },
  vite: {
    build: {
      cssCodeSplit: true,
      rollupOptions: {
        output: {
          assetFileNames: 'assets/[name]-[hash][extname]',
          chunkFileNames: 'assets/[name]-[hash].js',
          entryFileNames: 'assets/[name]-[hash].js'
        }
      }
    },
    css: {
      devSourcemap: true
    }
  },
  compressHTML: true,
  integrations: [
    mdx({
      extendPlugins: false
    }),
    partytown({
      config: {
        forward: ["dataLayer.push"],
        debug: false
      }
    }),
    astroI18next(),
    sitemap({
      changefreq: 'weekly',
      priority: 0.7,
      lastmod: new Date(),
      i18n: {
        defaultLocale: 'en',
        locales: {
          en: 'en',
          es: 'es',
          fr: 'fr',
          ja: 'ja',
          tr: 'tr'
        }
      }
    }),
    icon({
      iconDir: "public/icons",
      include: {
        "lucide": ["info", "film", "house", "mail-open", "newspaper", "book", "arrow-right", "circle-alert", "server", "package", "package-open", "users", "tag", "id-card", "stamp", "bookmark", "disc", "shield", "feather", "moon", "sun", "arrow-up-right", "menu", "earth", "shopping-basket", "smile", "zap", "chart-pie", "video", "mic", "tv", "circle", "truck", "camera", "bot", "leaf", "chevron-down", "presentation", "umbrella", "mail", "rss", "chevron-left", "chevron-right", "brush", "refresh-cw", "database", "circle-question", "terminal", "app-window"],
        "simple-icons": ["twitter", "bluesky", "instagram", "youtube"]
      }
    }),
    compress({
      CSS: true,
      HTML: true,
      Image: true,
      JavaScript: true,
      SVG: true
    })
  ],
});
