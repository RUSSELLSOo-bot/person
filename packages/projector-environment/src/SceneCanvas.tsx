import { Canvas } from '@react-three/fiber'
import { Component, Suspense, type ErrorInfo, type ReactNode } from 'react'
import { CameraRig } from './camera/CameraRig'
import type { EnvironmentConfig } from './config/layout'
import { Room } from './geometry/Room'
import { RoomLighting } from './lighting/RoomLighting'
import { Desk } from './objects/Desk'
import { GolfClubs } from './objects/GolfClubs'
import { Projector } from './objects/Projector'

type SceneCanvasProps = {
  config: EnvironmentConfig
  projectorOn: boolean
  onToggleProjector: () => void
}

type BoundaryState = { hasError: boolean }

class SceneErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  BoundaryState
> {
  state: BoundaryState = { hasError: false }

  static getDerivedStateFromError(): BoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.warn('[projector-environment] WebGL scene failed.', error, info)
  }

  render() {
    if (this.state.hasError) return this.props.fallback
    return this.props.children
  }
}

function StaticFallback() {
  return (
    <div className="pe-fallback-room" aria-hidden="true">
      <div className="pe-fallback-desk" />
      <div className="pe-fallback-clubs" />
    </div>
  )
}

function canUseWebGL(): boolean {
  try {
    const canvas = document.createElement('canvas')
    return Boolean(
      canvas.getContext('webgl') || canvas.getContext('experimental-webgl'),
    )
  } catch {
    return false
  }
}

function SceneContents({
  config,
  projectorOn,
  onToggleProjector,
}: SceneCanvasProps) {
  return (
    <>
      <CameraRig config={config.camera} debugOrbit={config.debugOrbit} />
      <RoomLighting projectorOn={projectorOn} />
      <Room />
      <Desk>
        <Projector projectorOn={projectorOn} onToggle={onToggleProjector} />
      </Desk>
      <GolfClubs />
    </>
  )
}

export function SceneCanvas(props: SceneCanvasProps) {
  const { config } = props

  if (!canUseWebGL()) {
    return <StaticFallback />
  }

  return (
    <SceneErrorBoundary fallback={<StaticFallback />}>
      <div className="pe-room-layer">
        <Canvas
          camera={{
            position: config.camera.position,
            fov: config.camera.fov,
            near: config.camera.near,
            far: config.camera.far,
          }}
          dpr={[1, config.dprMax]}
          gl={{ antialias: true, alpha: false, powerPreference: 'low-power' }}
          frameloop="always"
          onCreated={({ camera, gl }) => {
            camera.lookAt(...config.camera.target)
            gl.setClearColor('#E8DED0', 1)
          }}
          style={{ pointerEvents: 'none' }}
        >
          <Suspense fallback={null}>
            <SceneContents {...props} />
          </Suspense>
        </Canvas>
      </div>
    </SceneErrorBoundary>
  )
}
