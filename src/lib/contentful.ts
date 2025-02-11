import * as contentful from "contentful";
import { type Entry, type EntryFieldTypes } from "contentful";

export interface news {
  contentTypeId: "newsPost";
  fields: {
    title: EntryFieldTypes.Text;
    slug: EntryFieldTypes.Text;
    date: EntryFieldTypes.Date;
    image: EntryFieldTypes.AssetLink;
    description: EntryFieldTypes.Text;
    content: EntryFieldTypes.RichText;
    author: contentful.Entry<author>;
  };
}

export interface author {
  contentTypeId: "author";
  fields: {
    name: EntryFieldTypes.Text;
    role: EntryFieldTypes.Text;
    description: EntryFieldTypes.Text;
    pfp: EntryFieldTypes.AssetLink;
  };
}

export const contentfulClient = contentful.createClient({
  space: import.meta.env.CONTENTFUL_SPACE_ID,
  accessToken: import.meta.env.DEV
    ? import.meta.env.CONTENTFUL_PREVIEW_TOKEN
    : import.meta.env.CONTENTFUL_DELIVERY_TOKEN,
  host: import.meta.env.DEV ? "preview.contentful.com" : "cdn.contentful.com",
});

export async function getBlogPosts() {
  const entries = await contentfulClient.getEntries({ content_type: 'newsPost' });
  return entries.items.map((entry) => ({
    title: entry.fields.title,
    slug: entry.fields.slug,
    date: entry.fields.date,
    description: entry.fields.description,
    content: entry.fields.content,
  }));
}