import { materials } from '../config/materials'

export function Floor() {
  return (
    <group>
      <mesh
        position={[0, -0.18, -0.2]}
        rotation={[-Math.PI / 2, 0, 0]}
        name="floor"
        receiveShadow
      >
        <boxGeometry args={[7.6, 4.8, 0.14]} />
        <meshStandardMaterial
          color={materials.floor}
          roughness={0.82}
          metalness={0.02}
        />
      </mesh>
      <mesh position={[0, 3.08, -0.25]} name="ceiling">
        <boxGeometry args={[7.6, 0.1, 4.8]} />
        <meshStandardMaterial
          color={materials.ceiling}
          roughness={1}
          metalness={0}
        />
      </mesh>
    </group>
  )
}
