import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';
import * as contentful from 'contentful';
import dotenv from 'dotenv';
import { fileURLToPath } from 'url';
import { dirname } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

dotenv.config({ path: path.join(__dirname, '../../.env') });

const generateImage = async (title, imageUrl, pfp, date, desc, outputPath) => {
  const formatUrl = (url) => {
    if (!url) return '';
    return url.startsWith('//') ? `https:${url}` : url;
  };

  const finalImageUrl = formatUrl(imageUrl) || 'https://www.wiilink24.com/img/guidebg-install.webp';
  const pfpFinalUrl = formatUrl(pfp);

  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({ width: 1966, height: 1130 });

  const pfpHtml = pfpFinalUrl ? `<img src="${pfpFinalUrl}" style="height: 200px; width: 200px;">` : '';

  const dateObj = new Date(date);
  const month = dateObj.toLocaleString('default', { month: 'long' });
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();
  const formattedDate = `${day} ${month} ${year}`;

  const htmlContent = `
  <html>
    <head>
      <style>
        body {
          margin: 0;
          padding: 0;
        }
        .container {
          width: 1966px;
          height: 1130px;
          background: url(${finalImageUrl}) center/cover;
          display: flex;
          align-items: start;
          justify-content: center;
          font-size: 48px;
          color: white;
        }
        .logo {
          display: flex;
          align-items: center;
          gap: 30px;
          left: 40px;
          top: 30px;
          position: absolute;
          z-index: 1;
        }
        .logo-shadow {
          display: flex;
          align-items: center;
          gap: 30px;
          left: 40px;
          top: 30px;
          position: absolute;
          z-index: 0;
          filter: invert(1) blur(18px);
          opacity: 0.7;
        }
        .content {
          position: absolute;
          bottom: 30px;
          left: 40px;
          width: calc(100% - 80px);
          display: flex;
          align-items: center;
          gap: 30px;
          z-index: 1;
        }
        .content img {
          border-radius: 18px;
        }
        .content h2 {
          padding: 0;
          margin: 0;
          font-family: 'Gilroy', sans-serif;
          width: 1600px;
          text-align: left;
          line-clamp: 1;
          -webkit-line-clamp: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          position: relative;
        }
        .content p {
          padding: 0;
          margin: 0;
          width: 1600px;
          font-family: 'FOT-RodinNTLG Pro';
          line-clamp: 1;
          -webkit-line-clamp: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          position: relative;
        }
        .content b {
          padding: 8px 18px;
          background-color: #ffffff30;
          backdrop-filter: blur(8px);
          border-radius: 8px;
        }
        .bottom-gradient {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 200px;
          background: linear-gradient(to top, #121212, transparent);
          z-index: 0;
        }
        .top-gradient {
          position: absolute;
          top: 0;
          width: 100%;
          height: 300px;
          background: linear-gradient(to bottom, #121212, transparent);
          z-index: 0;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <span class="logo">
          <img src="https://www.wiilink24.com/img/logo.webp" style="height: 130px;">
          <h3 style="font-family: FOT-RodinNTLG Pro;"> News </h3>
        </span>
        <span class="logo-shadow">
          <img src="https://www.wiilink24.com/img/logo.webp" style="height: 130px;">
          <h3 style="font-family: FOT-RodinNTLG Pro;"> News </h3>
        </span>
        <div class="content">
          ${pfpHtml}
          <span style="display:flex; flex-direction:column;">
            <h2>${title}</h2>
            <p><b>${formattedDate}</b> ${desc}</p>
          </span>
        </div>
        <div class="bottom-gradient"></div>
        <div class="top-gradient"></div>
      </div>
    </body>
  </html>
  `;

  await page.setContent(htmlContent, { 
    waitUntil: 'networkidle0',
    timeout: 30000 
  });

  await page.screenshot({ path: outputPath, type: 'png' });
  await browser.close();
};

const contentfulClient = contentful.createClient({
  space: process.env.CONTENTFUL_SPACE_ID,
  accessToken: process.env.CONTENTFUL_DELIVERY_TOKEN,
  host: "cdn.contentful.com",
});

const processContentfulEntries = async () => {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: "newsPost",
      order: '-sys.createdAt',
    });

    const totalEntries = entries.items.length;
    const outputDir = path.join('../img/news-og-img');

    // Ensure output directory exists
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    for (let i = 0; i < entries.items.length; i++) {
      const entry = entries.items[i];
      const { title, image, author, description } = entry.fields;
      const sanitizedTitle = entry.fields.slug || title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
      const outputPath = path.join(outputDir, `${sanitizedTitle}.png`);
      
      if (fs.existsSync(outputPath)) {
        console.log(`[${i + 1}/${totalEntries}] ${title}: Already exists, skipping`);
        continue;
      }
      
      console.log(`[${i + 1}/${totalEntries}] Processing: ${title}`);

      await generateImage(
        title,
        image?.fields?.file?.url || '',
        author?.fields?.pfp?.fields?.file?.url || '',
        new Date(entry.sys.createdAt),
        description,
        outputPath
      );
    }

    console.log('Images generated successfully');
  } catch (error) {
    console.error('Error processing Contentful entries:', error);
  }
};

processContentfulEntries();