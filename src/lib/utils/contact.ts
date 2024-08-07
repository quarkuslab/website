import { z } from "zod";

export const contactSchema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().min(10),
  business: z.string(),
  location: z.string(),
  plan: z.enum(["basic", "standard", "premium"]),
  message: z.string().optional(),
  source: z.string().optional()
})

export type ContactSchema = z.infer<typeof contactSchema>