import { z } from 'zod';

// Authentication schema
export const authSchema = z.object({
   username: z.string().min(1, { message: 'Username is required' }),
   password: z.string().min(1, { message: 'Password is required' }),
});

export type AuthSchema = z.infer<typeof authSchema>;


