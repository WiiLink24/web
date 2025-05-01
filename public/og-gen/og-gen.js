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
          background: #000;
        }
        
        .container {
          width: 1966px;
          height: 1130px;
          background: url(${finalImageUrl}) center/cover no-repeat;
          display: flex;
          align-items: start;
          justify-content: center;
          font-size: 48px;
          color: white;
          position: relative;
          overflow: hidden;
        }
        
        .container::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: linear-gradient(135deg, rgba(13, 110, 253, 0.2), rgba(255, 0, 59, 0.2));
          z-index: 0;
        }
        
        .logo-container {
          position: absolute;
          left: 60px;
          top: 60px;
          z-index: 2;
          display: flex;
          align-items: center;
          gap: 30px;
        }
        
        .logo {
          display: flex;
          align-items: center;
          gap: 30px;
          position: relative;
          z-index: 1;
        }
        
        .logo-shadow {
          display: flex;
          align-items: center;
          gap: 30px;
          position: absolute;
          top: 8px;
          left: 8px;
          z-index: 0;
          filter: blur(24px) brightness(0.8);
          opacity: 0.5;
        }
        
        .content {
          position: absolute;
          bottom: 0px;
          width: 100%;
          display: flex;
          align-items: center;
          gap: 40px;
          z-index: 1;
          padding: 40px;
          border-radius: 24px;
        }
        
        .content img {
          margin-left: 60px;
          border-radius: 20px;
          box-shadow: 0 10px 30px rgba(0, 0, 0, 0.5);
          border: 4px solid rgba(255, 255, 255, 0.2);
          transition: all 0.3s ease;
        }
        
        .text-content {
          display: flex;
          flex-direction: column;
          gap: 20px;
        }
        
        .content h2 {
          padding: 0;
          margin: 0;
          font-family: 'Gilroy', sans-serif;
          width: 1400px;
          text-align: left;
          line-clamp: 1;
          -webkit-line-clamp: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          position: relative;
          font-size: 72px;
          font-weight: 800;
        }
        
        .content p {
          padding: 0;
          margin: 0;
          width: 1400px;
          font-family: 'FOT-RodinNTLG Pro', sans-serif;
          line-clamp: 1;
          -webkit-line-clamp: 1;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          position: relative;
          font-size: 40px;
          opacity: 0.9;
          letter-spacing: 0.5px;
        }
        
        .date-badge {
          display: inline-block;
          padding: 6px 30px;
          background: #ffffff30;
          color: white;
          border-radius: 50px;
          font-weight: bold;
          margin-right: 15px;
          box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
        }
        
        .bottom-gradient {
          position: absolute;
          bottom: 0;
          width: 100%;
          height: 400px;
          background: linear-gradient(to top, rgba(0, 0, 0, 0.6) 30%, transparent);
          z-index: 0;
        }
        
        .top-gradient {
          position: absolute;
          top: 0;
          width: 100%;
          height: 400px;
          background: linear-gradient(to bottom, rgba(0, 0, 0, 0.8), transparent);
          z-index: 0;
        }
        
        .accent-circle {
          position: absolute;
          width: 600px;
          height: 600px;
          border-radius: 50%;
          background: linear-gradient(135deg, #0d6efd, #ff003b);
          filter: blur(150px);
          opacity: 0.15;
          z-index: 0;
        }
        
        .accent-circle-1 {
          top: -200px;
          right: -100px;
        }
        
        .accent-circle-2 {
          bottom: -200px;
          left: -100px;
        }

        @font-face {
          font-family: 'Gilroy';
          src: url('https://www.wiilink24.com/fonts/Gilroy.otf') format('opentype');
          font-display: swap;
        }

        @font-face {
          font-family: 'FOT-RodinNTLG Pro';
          src: url('https://www.wiilink24.com/fonts/inter.ttf') format('truetype');
          font-display: swap;
        }
      </style>
    </head>
    <body>
      <div class="container">
        <div class="accent-circle accent-circle-1"></div>
        <div class="accent-circle accent-circle-2"></div>
        
        <div class="logo-container">
          <span class="logo">
            <img src="https://www.wiilink24.com/img/logo.webp" style="height: 130px;">
            <h3 style="font-family: FOT-RodinNTLG Pro, sans-serif; font-weight: 700; background: linear-gradient(to right, #fff, #ccc); -webkit-background-clip: text; background-clip: text; -webkit-text-fill-color: transparent;"> News </h3>
          </span>
          <span class="logo-shadow">
            <img src="https://www.wiilink24.com/img/logo.webp" style="height: 130px;">
            <h3 style="font-family: FOT-RodinNTLG Pro, sans-serif;"> News </h3>
          </span>
        </div>
        
        <div class="content">
          ${pfpHtml}
          <span class="text-content">
            <h2>${title}</h2>
            <p><span class="date-badge">${formattedDate}</span>${desc}</p>
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