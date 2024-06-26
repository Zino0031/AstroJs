import { defineCollection, z } from "astro:content";

const project = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      title: z.string().min(1),
      image: image(),
      featured: z.number().min(1).optional(),
    }),
});

export const collections = {
  project,
};
