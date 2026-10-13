import { materials } from '../config/materials'

export function Walls() {
  return (
    <group>
      {/* Rear projection wall */}
      <mesh position={[0, 1.45, -2.55]} name="wall-rear">
        <boxGeometry args={[7.6, 3.35, 0.14]} />
        <meshStandardMaterial
          color={materials.wallMain}
          roughness={0.94}
          metalness={0}
        />
      </mesh>

      {/* Soft projection screen area cue (slightly brighter patch) */}
      <mesh position={[0.05, 1.35, -2.47]} name="wall-projection-patch">
        <planeGeometry args={[5.4, 2.55]} />
        <meshStandardMaterial
          color="#EDE4D6"
          roughness={0.98}
          metalness={0}
        />
      </mesh>

      {/* Left wall */}
      <mesh
        position={[-3.75, 1.45, -0.35]}
        rotation={[0, Math.PI / 2, 0]}
        name="wall-left"
      >
        <boxGeometry args={[4.5, 3.35, 0.14]} />
        <meshStandardMaterial
          color={materials.wallSecondary}
          roughness={0.95}
          metalness={0}
        />
      </mesh>

      {/* Right wall */}
      <mesh
        position={[3.75, 1.45, -0.35]}
        rotation={[0, -Math.PI / 2, 0]}
        name="wall-right"
      >
        <boxGeometry args={[4.5, 3.35, 0.14]} />
        <meshStandardMaterial
          color={materials.wallSecondary}
          roughness={0.96}
          metalness={0}
        />
      </mesh>

      {/* Minimal baseboards */}
      <mesh position={[0, 0.05, -2.47]}>
        <boxGeometry args={[7.4, 0.1, 0.04]} />
        <meshStandardMaterial color="#D6CBBA" roughness={0.85} metalness={0} />
      </mesh>
    </group>
  )
}
