import { OrbitControls } from '@react-three/drei'
import { useThree } from '@react-three/fiber'
import { useLayoutEffect } from 'react'
import type { CameraConfig } from '../config/camera'

type Props = {
  config: CameraConfig
  debugOrbit?: boolean
}

export function CameraRig({ config, debugOrbit = false }: Props) {
  const { camera } = useThree()

  useLayoutEffect(() => {
    camera.position.set(...config.position)
    camera.lookAt(...config.target)
    if ('fov' in camera) {
      ;(camera as typeof camera & { fov: number }).fov = config.fov
      camera.updateProjectionMatrix()
    }
  }, [camera, config])

  if (!debugOrbit) return null

  return (
    <OrbitControls
      target={config.target}
      enablePan={false}
      maxPolarAngle={Math.PI / 1.8}
      minDistance={2.5}
      maxDistance={8}
    />
  )
}
