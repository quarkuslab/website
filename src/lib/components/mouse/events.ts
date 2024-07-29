import { get } from "svelte/store"
import { pointer, position, shouldSyncScroll, shouldTrack } from "./store"

export function trackMouseMove() {
  return (e: MouseEvent) => {
    pointer.set({ x: e.clientX, y: e.clientY })
    if (get(shouldTrack)) {
      position.set({ x: e.clientX, y: e.clientY })
    }
  }
}

export function trackScroll() {
  let last = 0
  return () => {
    if (!get(shouldTrack) && get(shouldSyncScroll)) {
      const delta = last - window.scrollY
      position.update(prev => ({ x: prev.x, y: prev.y + delta }))
    }
    last = window.scrollY
  }
}