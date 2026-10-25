import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const postSchema = z.object({
  title: z.string(),
  description: z.string(),
  // Transform string to Date object
  pubDate: z.coerce.date(),
  updatedDate: z.coerce.date().optional(),
});

const blog = defineCollection({
  // Load Markdown and MDX files in the `src/content/blog/` directory.
  loader: glob({ base: "./src/content/blog", pattern: "**/*.{md,mdx}" }),
  // Type-check frontmatter using a schema
  schema: ({ image }) =>
    postSchema.extend({
      heroImage: z.optional(image()),
    }),
});

const chips = defineCollection({
  loader: glob({ base: "./src/content/chips", pattern: "**/*.{md,mdx}" }),
  schema: () => postSchema,
});

export const collections = { blog, chips };
