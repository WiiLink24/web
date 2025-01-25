import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';

export async function GET(context) {
  const posts = await getCollection('blog');
  return rss({
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    site: context.site,
    items: posts.map((post) => ({
      title: post.data.title,
      description: post.data.description,
      pubDate: post.data.pubDate,
      link: `/blog/${post.id}/`,
      content: post.body,
      heroImage: post.data.heroImage,
      old_news: post.data.old_news,
      author: post.data.author,
      authImage: post.data.authImage,
      authDesc: post.data.authDesc,
      authTitle: post.data.authTitle,
      ogImage: post.data.ogImage,
    })),
    customData: `<language>en-us</language>`,
  });
}