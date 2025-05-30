<p align="center">
<a href="https://wiilink24.com"><img height="100px" src="https://wiilink.ca/img/logo.webp" alt="Logo"/></a>
  <h2 align="center"><b><i>The front-facing website of the WiiLink project.</i></b></h2>
</p>


<img alt="GitHub Language Count" src="https://img.shields.io/badge/languages-10-blue" /> <img alt="Github Repo Size" src="https://img.shields.io/badge/repo_size-240_MB-blue" /> <img alt="GitHub Contributors" src="https://img.shields.io/github/contributors/WiiLink24/web" /> <img alt="GitHub Last Commit" src="https://img.shields.io/github/last-commit/WiiLink24/web" /> <img alt="Github License" src="https://img.shields.io/github/license/WiiLink24/web" />

A website where you can download our products, as well as getting up to date with our advancements, getting assistance with our products, and informing yourself in the status of them.
#### All the fun people who've contributed:
<a href = "https://github.com/WiiLink24/web/graphs/contributors">
  <img src = "https://contrib.rocks/image?repo=WiiLink24/web"/>
</a>

## Want to self-host?
Simply clone this repository and open a terminal in the folder:

```sh
npm i
npm run dev
```

Additionally, you will need to populate the .env with your own Contentful CMS keys. To do so, generate the content models in the application to match those supplied in the contentful.ts file inside this project, and then grab the API keys.
This is necessary to be able to preview news articles.

### You will see a live preview of your changes inside your default web browser!

## Structure
Inside the "public" folder you will see all static assets that astro will place at the root of the published site.
Inside it, we store all the assets like images, locales, fonts, and discord integration.
In the src folder you will find the components (used to be able to reuse code in different sites); the content, which includes all the markdown files used in the site; layouts, the design for our guide and news sections; and all of the pages in the site in all supported locales.

In the styles folder you will find global css rules.

## I want to modify the languages or add more of them!
That's amazing! 
Just head on over to [our crowdin page](https://crowdin.com/project/wiilink-site) and begin translating!
Alternatively you can learn how to use and generate pages with astro-i18next and pull request your added language!

# That's about it, thanks for reading!!!

# Also check out:
[![ReadMe Card](https://github-readme-stats.vercel.app/api/pin/?username=WiiLink24&repo=food-server)](https://github.com/WiiLink24/food-server)
[![ReadMe Card](https://github-readme-stats.vercel.app/api/pin/?username=WiiLink24&repo=room-server)](https://github.com/WiiLink24/room-server)
[![ReadMe Card](https://github-readme-stats.vercel.app/api/pin/?username=WiiLink24&repo=WiiLink-Patcher-GUI)](https://github.com/WiiLink24/WiiLink-Patcher-GUI)
