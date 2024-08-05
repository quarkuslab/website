import { derived, get, writable } from "svelte/store"

const active = writable<string | undefined>(undefined)

// function isActive(key: string) {
//   const current = get(active)
//   return typeof current != 'undefined' && current == key;
// }

const isActive = derived(active, $active => {
  return (key: string) => typeof $active != "undefined" && $active == key
})

function toggle(key: string) {
  if (get(active) == key) {
    active.set(undefined)
  } else {
    active.set(key)
  }
}

export const context = {
  isActive,
  toggle
}

export type FaqContext = typeof context
