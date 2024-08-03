import { circle, rectangle } from "./utils"
import type { ActionReturn } from "svelte/action"
import { shouldTrack, shape, position, pointer, shouldSyncScroll, opacityValue } from "./store"
import { get } from "svelte/store"
import debounce from "lodash/debounce"

interface MouseGrowParameters {
  size: number
}

export function grow(node: HTMLElement, parameters: MouseGrowParameters): ActionReturn {
  const onMouseEnter = debounce(() => {
    shape.set(circle(parameters.size))
    shouldTrack.set(true)
    shouldSyncScroll.set(true)
  }, 50)
  const onMouseLeave = debounce(() => {
    shape.set(circle(10))
    shouldTrack.set(true)
    shouldSyncScroll.set(true)
  }, 50)

  node.addEventListener("mouseenter", onMouseEnter)
  node.addEventListener("mouseleave", onMouseLeave)
  return {
    destroy() {
      onMouseLeave()
      node.removeEventListener("mouseenter", onMouseEnter)
      node.removeEventListener("mouseleave", onMouseLeave)
    },
  }
}

interface MouseStickParameters {
  opacity: number
}

export function stick(node: HTMLElement, { opacity }: MouseStickParameters = { opacity: 100 }): ActionReturn {
  const onMouseEnter = debounce(() => {
    const fixedParent = node.closest(".fixed")
    const rect = node.getBoundingClientRect()
    const radius = parseInt(window.getComputedStyle(node).borderRadius.match(/\d+/)?.[0] || '0')

    if (fixedParent) {
      shouldSyncScroll.set(false)
    }

    opacityValue.set(opacity)
    position.set({ x: rect.left + rect.width / 2, y: rect.top + rect.height / 2 })
    shape.set(rectangle(rect.width, rect.height, radius))
    shouldTrack.set(false)
  }, 50)

  const onMouseLeave = debounce(() => {
    opacityValue.set(100)
    shouldSyncScroll.set(true)
    shouldTrack.set(true)
    shape.set(circle(10))
    position.set(get(pointer))
  }, 50)

  node.addEventListener("mouseenter", onMouseEnter)
  node.addEventListener("mouseleave", onMouseLeave)
  return {
    destroy() {
      onMouseLeave()
      node.removeEventListener("mouseenter", onMouseEnter)
      node.removeEventListener("mouseleave", onMouseLeave)
    },
  }
}