import { Canvas } from '@react-three/fiber'
import { Component, Suspense, type ErrorInfo, type ReactNode } from 'react'
import { cameraConfig } from '../../config/camera'
import { useProjectorState } from '../../hooks/useProjectorState'
import { Desk } from './Desk'
import { GolfClubs } from './GolfClubs'
import { Lighting } from './Lighting'
import { Projector } from './Projector'
import { Room } from './Room'

type BoundaryState = { hasError: boolean }

class RoomErrorBoundary extends Component<
  { children: ReactNode; fallback: ReactNode },
  BoundaryState
> {
  state: BoundaryState = { hasError: false }

  static getDerivedStateFromError(): BoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.warn('RoomScene failed; using CSS fallback.', error, info)
  }

  render() {
    if (this.state.hasError) return this.props.fallback
    return this.props.children
  }
}

function SceneContents({
  projectorOn,
  onToggle,
}: {
  projectorOn: boolean
  onToggle: () => void
}) {
  return (
    <>
      <Lighting />
      <Room />
      <Desk />
      <Projector projectorOn={projectorOn} onToggle={onToggle} />
      <GolfClubs />
    </>
  )
}

function StaticRoomFallback() {
  return (
    <div
      className="absolute inset-0 bg-[linear-gradient(165deg,#E8DED0_0%,#D9CFC0_55%,#C6A780_100%)]"
      aria-hidden="true"
    >
      <div className="absolute bottom-[8%] left-[3%] h-16 w-28 bg-[#C6A780]/70" />
      <div className="absolute bottom-[10%] right-[4%] h-28 w-10 rounded-t-full bg-[#5C5248]/80" />
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

export function RoomScene() {
  const { projectorOn, toggleProjector } = useProjectorState()

  if (!canUseWebGL()) {
    return <StaticRoomFallback />
  }

  return (
    <RoomErrorBoundary fallback={<StaticRoomFallback />}>
      <div className="absolute inset-0">
        <Canvas
          camera={{
            position: cameraConfig.position,
            fov: cameraConfig.fov,
            near: cameraConfig.near,
            far: cameraConfig.far,
          }}
          dpr={[1, 1.5]}
          gl={{ antialias: true, alpha: false, powerPreference: 'low-power' }}
          frameloop="always"
          onCreated={({ camera, gl }) => {
            camera.lookAt(...cameraConfig.target)
            gl.setClearColor('#E8DED0', 1)
          }}
          className="h-full w-full"
          style={{ pointerEvents: 'none' }}
        >
          <Suspense fallback={null}>
            <SceneContents
              projectorOn={projectorOn}
              onToggle={toggleProjector}
            />
          </Suspense>
        </Canvas>
      </div>
    </RoomErrorBoundary>
  )
}
