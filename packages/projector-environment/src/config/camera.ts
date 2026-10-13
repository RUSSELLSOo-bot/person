export type CameraConfig = {
  position: [number, number, number]
  target: [number, number, number]
  fov: number
  near: number
  far: number
}

/** Fixed framing: nearly front-facing wall, desk lower-left, clubs right. */
export const defaultCamera: CameraConfig = {
  position: [0.55, 1.15, 4.55],
  target: [0.05, 1.22, -2.35],
  fov: 36,
  near: 0.1,
  far: 60,
}
