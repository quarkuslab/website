import { circle, drawPath } from "./utils"
import { spring, tweened } from "svelte/motion"
import { derived, writable } from "svelte/store"

export const pointer = writable({ x: 0, y: 0 })
export const position = spring({ x: 0, y: 0 }, { damping: 0.5, stiffness: 0.05 })
export const shape = spring(circle(10), { damping: 0.3, stiffness: 0.05 })
export const opacityValue = tweened(100)
export const shouldTrack = writable(true)
export const shouldSyncScroll = writable(true)

export const path = derived([shape, position], ([s, p]) => drawPath(s, p))
export const opacity = derived([opacityValue], ([o]) => String(o / 100))