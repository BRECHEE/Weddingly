import { z } from 'zod';

export const envSchema = z.object({
  DATABASE_URL: z.string().min(1),
  NEXTAUTH_SECRET: z.string().optional(),
  NEXTAUTH_URL: z.string().optional(),
  R2_ENDPOINT: z.string().optional(),
  R2_BUCKET: z.string().optional(),
  R2_ACCESS_KEY_ID: z.string().optional(),
  R2_SECRET_ACCESS_KEY: z.string().optional(),
});

export const guestSchema = z.object({
  firstName: z.string().min(2),
  lastName: z.string().min(2),
  phone: z.string().optional(),
  email: z.string().email().optional().or(z.literal('')),
  invitationCode: z.string().optional(),
  photoPass: z.string().optional(),
});

export const rsvpSchema = z.object({
  status: z.enum(['ATTENDING', 'DECLINED', 'UNKNOWN']),
  note: z.string().optional(),
});

export const weddingSchema = z.object({
  name: z.string().min(2),
  slug: z.string().min(2),
  description: z.string().optional(),
  date: z.string().optional(),
});
