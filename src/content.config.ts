import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const docsSchema = z.object({
  title: z.string(),
  description: z.string().optional(),
  order: z.number(),
});

const guide = defineCollection({
  loader: glob({ pattern: '[0-9][0-9]-*.md', base: '../warpkit/guide' }),
  schema: docsSchema,
});

const docs = defineCollection({
  loader: glob({ pattern: '[!_]*.md', base: '../warpkit/docs' }),
  schema: docsSchema,
});

export const collections = { guide, docs };
