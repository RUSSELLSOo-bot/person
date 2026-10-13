export type ProjectionLayout = {
  /** CSS width of the projection frame (desktop). */
  width: string
  /** Slight CSS 3D transform for wall alignment. */
  perspectivePx: number
  rotateYDeg: number
  rotateXDeg: number
  /** Minimum viewport width to show the 3D room. */
  desktopMinWidthPx: number
}

export type EnvironmentConfig = {
  camera: {
    position: [number, number, number]
    target: [number, number, number]
    fov: number
    near: number
    far: number
  }
  projection: ProjectionLayout
  /** Cap device pixel ratio for performance. */
  dprMax: number
  /** Enable OrbitControls — development only. */
  debugOrbit: boolean
}

export const defaultProjectionLayout: ProjectionLayout = {
  width: 'min(88vw, 1120px)',
  perspectivePx: 1600,
  rotateYDeg: -1.4,
  rotateXDeg: 0.35,
  desktopMinWidthPx: 768,
}

export const defaultEnvironmentConfig: EnvironmentConfig = {
  camera: {
    position: [0.55, 1.15, 4.55],
    target: [0.05, 1.22, -2.35],
    fov: 36,
    near: 0.1,
    far: 60,
  },
  projection: defaultProjectionLayout,
  dprMax: 1.5,
  debugOrbit: false,
}

export function mergeEnvironmentConfig(
  partial?: Partial<EnvironmentConfig>,
): EnvironmentConfig {
  if (!partial) return defaultEnvironmentConfig
  return {
    ...defaultEnvironmentConfig,
    ...partial,
    camera: {
      ...defaultEnvironmentConfig.camera,
      ...partial.camera,
    },
    projection: {
      ...defaultEnvironmentConfig.projection,
      ...partial.projection,
    },
  }
}

/** World-space anchors for future desk objects (local to desk group origin). */
export const deskAnchors = {
  projector: [0, 0.13, 0] as [number, number, number],
  leftTray: [-0.42, 0.13, 0.12] as [number, number, number],
  rightTray: [0.42, 0.13, -0.1] as [number, number, number],
  center: [0, 0.13, -0.12] as [number, number, number],
} as const
