import { glob } from 'astro/loaders';
import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
    loader: glob({ base: './src/content/blog', pattern: '**/*.{md,mdx}' }),
    schema: z.object({
        title: z.string(),
        description: z.string(),
        pubDate: z.coerce.date(),
        updatedDate: z.coerce.date().optional(),
        heroImage: z.string().optional(),
        old_news: z.boolean().optional(),
        author: z.string(),
        authImage: z.string().optional(),
        authDesc: z.string(),
        authTitle: z.string(),
        ogImage: z.string().optional(),
    }),
});

export const collections = { blog };