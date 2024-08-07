import { fail } from "@sveltejs/kit";
import { z } from "zod"

const schema = z.object({
  name: z.string(),
  email: z.string().email(),
  phone: z.string().min(10),
  business: z.string(),
  location: z.string(),
  plan: z.enum(["basic", "standard", "premium"]),
  message: z.string().optional(),
  source: z.string().optional()
})

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const form = await request.formData()
    const result = await schema.safeParseAsync({
      name: form.get('name'),
      email: form.get('email'),
      phone: form.get('phone-number'),
      business: form.get('business-name'),
      location: form.get('location'),
      plan: form.get('select-a-plan'),
      message: form.get("anything-you'd-like-us-to-know?"),
      source: form.get('ps-—-how-did-you-hear-about-us?')
    })

    if (result.error) {
      return fail(400, { ...result.error.format(), incorrect: true })
    }

    console.log(result.data)

    return {
      success: true
    }
  }
};