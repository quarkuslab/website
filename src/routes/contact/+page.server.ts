import { createTask } from "$lib/utils/clickup.js";
import { contactSchema } from "$lib/utils/contact.js";
import { fail } from "@sveltejs/kit";

/** @type {import('./$types').Actions} */
export const actions = {
  default: async ({ request }) => {
    const form = await request.formData()
    const result = await contactSchema.safeParseAsync({
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

    try {
      await createTask(result.data)
      return { success: true }
    } catch {
      return fail(500)
    }
  }
};