import rss from '@astrojs/rss';
import { contentfulClient } from "../lib/contentful";

export async function GET(context) {
  try {
    const entries = await contentfulClient.getEntries({
      content_type: "newsPost",
      order: '-sys.createdAt',
    });

    if (!entries?.items) {
      throw new Error('No entries found');
    }

    return rss({
      title: 'WiiLink News',
      description: 'All the latest news from the WiiLink project!',
      site: context.site,
      items: entries.items.map(entry => ({
        title: entry.fields.title,
        pubDate: new Date(entry.sys.createdAt),
        description: entry.fields.description,
        link: `/news/${entry.fields.slug}/`,
        content: entry.fields.content?.content?.[0]?.content?.[0]?.value || '',
        author: entry.fields.author?.fields?.name
      })),
      customData: `<language>es</language>`
    });
  } catch (error) {
    console.error('RSS generation error:', error);
    throw error;
  }
}