import { CLICKUP_LIST_ID, CLICKUP_TOKEN } from "$env/static/private";
import type { ContactSchema } from "./contact";

export async function createTask(data: ContactSchema) {
  const headers = new Headers()
  headers.append("Authorization", CLICKUP_TOKEN)
  headers.append("Content-Type", "application/json")
  // const res = await fetch(`https://api.clickup.com/api/v2/list/${CLICKUP_LIST_ID}/field`, { headers })
  const res = await fetch(`https://api.clickup.com/api/v2/list/${CLICKUP_LIST_ID}/task`, {
    headers,
    method: "POST",
    body: JSON.stringify({
      name: data.business,
      markdown_description: `# Plan\n${data.plan}\n\n## Message\n${data.message}\n\n## Source\n${data.source}`,
      priority: 1,
      notify_all: true,
      custom_fields: [
        {
          id: "86fdade0-23e0-4091-9597-c4147e887a23", // Lead Source
          value: "2a64ad57-800b-4434-861a-d7e13f6112a4" // Website Form
        },
        {
          id: "d93f46f9-f7dc-419e-bdaf-e31e84721c7b", // Email
          value: data.email
        },
        {
          id: "df734666-43d9-4e87-99f2-9b7f33a26ec8", // Contact Name
          value: data.name
        },
        {
          id: "91b4bf22-8736-4731-b394-87de7c2615fa", // Phone
          value: data.phone
        },
        {
          id: "dd0cb46c-9146-4b8e-aa4d-d1b4ce5fa18a", // Location
          value: data.location
        }
      ]
    }),
  })

  const out = await res.json()
  console.log(JSON.stringify(out, null, 4))

  if (res.status != 200) {
    throw new Error(out)
  }
}