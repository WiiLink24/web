import puppeteer from 'puppeteer';
import path from 'path';
import fs from 'fs';
import matter from 'gray-matter';

const generateImage = async (title, imageUrl, pfp, date, desc, outputPath) => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  await page.setViewport({ width: 1966, height: 1130 });

  const finalImageUrl = imageUrl.startsWith('http') ? imageUrl : (imageUrl ? `https://www.wiilink24.com${imageUrl}` : 'https://www.wiilink24.com/img/guidebg-install.webp');

  const pfpHtml = pfp ? `<img src="${pfp}" style="height: 200px; width: 200px;">` : '';

  const dateObj = new Date(date);
  const month = dateObj.toLocaleString('default', { month: 'long' });
  const day = dateObj.getDate();
  const year = dateObj.getFullYear();
  date = `${day} ${month} ${year}`;

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
            <p><b>${date}</b> ${desc}</p>
          </span>
        </div>
        <div class="bottom-gradient"></div>
        <div class="top-gradient"></div>
      </div>
    </body>
  </html>
  `;

  await page.setContent(htmlContent, { waitUntil: 'networkidle0' });

  await page.screenshot({ path: outputPath, type: 'png' });
  await browser.close();
};

const updateMarkdownFile = (filePath, heroImagePath) => {
  const fileContent = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(fileContent);

  data.ogImage = heroImagePath;

  const updatedContent = matter.stringify(content, data);
  fs.writeFileSync(filePath, updatedContent, 'utf8');
};

const processMarkdownFiles = async () => {
  const directoryPath = path.join('../../src/content/blog');
  const files = fs.readdirSync(directoryPath).filter(file => file.endsWith('.md'));

  for (const file of files) {
    const filePath = path.join(directoryPath, file);
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);

    const { title, heroImage = "", authImage = "", pubDate = "", description = "" } = data;
    const sanitizedTitle = title.replace(/[^a-z0-9]/gi, '_').toLowerCase();
    
    const outputPath = path.join('../img/news-og-img', `${sanitizedTitle}.png`);

    await generateImage(title, heroImage, authImage, pubDate, description, outputPath);

    const heroImagePath = `/img/news-og-img/${sanitizedTitle}.png`;
    updateMarkdownFile(filePath, heroImagePath);
  }

  console.log('Images generated and markdown files updated.');
};

processMarkdownFiles();