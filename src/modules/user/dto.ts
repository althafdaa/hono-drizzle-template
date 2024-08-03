import { z } from 'zod';

export const idSchema = z.number();

export const userSchema = z.object({
  id: z.number(),
  name: z.string(),
  email: z.string(),
  profile_picture_url: z.string().nullable(),
  created_at: z.date(),
  updated_at: z.date(),
  deleted_at: z.date().nullable(),
});
