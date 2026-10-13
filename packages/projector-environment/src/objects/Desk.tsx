import type { ReactNode } from 'react'
import { deskAnchors } from '../config/layout'
import { materials } from '../config/materials'

type DeskProps = {
  children?: ReactNode
}

/**
 * Minimalist wooden desk (left). Anchor slots via deskAnchors for future objects.
 * Currently hosts the projector only.
 */
export function Desk({ children }: DeskProps) {
  const legPositions: [number, number, number][] = [
    [-0.58, 0.2, -0.3],
    [0.58, 0.2, -0.3],
    [-0.58, 0.2, 0.3],
    [0.58, 0.2, 0.3],
  ]

  return (
    <group position={[-2.15, 0, 0.35]} name="desk">
      {/* Tabletop */}
      <mesh position={[0, 0.48, 0]} castShadow receiveShadow>
        <boxGeometry args={[1.45, 0.06, 0.78]} />
        <meshStandardMaterial
          color={materials.desk}
          roughness={0.72}
          metalness={0.04}
        />
      </mesh>
      {/* Soft bevel lip */}
      <mesh position={[0, 0.445, 0]}>
        <boxGeometry args={[1.42, 0.02, 0.75]} />
        <meshStandardMaterial
          color={materials.deskLegs}
          roughness={0.78}
          metalness={0.02}
        />
      </mesh>
      {legPositions.map((pos, i) => (
        <mesh key={i} position={pos} castShadow>
          <boxGeometry args={[0.055, 0.4, 0.055]} />
          <meshStandardMaterial
            color={materials.deskLegs}
            roughness={0.8}
            metalness={0}
          />
        </mesh>
      ))}
      {/* Contact shadow cue */}
      <mesh
        position={[0, 0.01, 0]}
        rotation={[-Math.PI / 2, 0, 0]}
        name="desk-contact-shadow"
      >
        <planeGeometry args={[1.55, 0.9]} />
        <meshBasicMaterial color="#000000" transparent opacity={0.12} />
      </mesh>

      {/* Object mount plane at tabletop height */}
      <group position={[0, 0.51, 0]} name="desk-surface">
        {children}
        {/* Invisible markers for future anchors (debug-friendly names) */}
        <group position={deskAnchors.leftTray} name="anchor-leftTray" />
        <group position={deskAnchors.rightTray} name="anchor-rightTray" />
        <group position={deskAnchors.center} name="anchor-center" />
      </group>
    </group>
  )
}
