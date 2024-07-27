import { circle, rectangle } from "./utils"
import type { ActionReturn } from "svelte/action"
import { shouldTrack, shape, position, pointer } from "./store"
import { get } from "svelte/store"
import debounce from "lodash/debounce"

interface MouseGrowParameters {
  size: number
}

export function grow(node: HTMLElement, parameters: MouseGrowParameters): ActionReturn {
  node.addEventListener("mouseenter", () => {
    shape.set(circle(parameters.size))
  })
  node.addEventListener("mouseleave", () => {
    shape.set(circle(10))
  })

  return {}
}

export function stick(node: HTMLElement): ActionReturn {
  node.addEventListener("mouseenter", debounce(() => {
    const rect = node.getBoundingClientRect()
    const radius = parseInt(window.getComputedStyle(node).borderRadius.match(/\d+/)?.[0] || '0')

    position.set({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 })
    shape.set(rectangle(rect.width, rect.height, radius))
    shouldTrack.set(false)
  }, 50))
  node.addEventListener("mouseleave", () => {
    shouldTrack.set(true)
    shape.set(circle(10))
    position.set(get(pointer))
  })
  return {}
}