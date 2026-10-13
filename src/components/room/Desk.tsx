import { theme } from '../../config/theme'

export function Desk() {
  return (
    <group position={[-2.05, 0, 0.15]}>
      <mesh position={[0, 0.42, 0]}>
        <boxGeometry args={[1.35, 0.07, 0.72]} />
        <meshStandardMaterial color={theme.wood} roughness={0.75} metalness={0.05} />
      </mesh>
      {/* Legs */}
      {[
        [-0.55, 0.18, -0.28],
        [0.55, 0.18, -0.28],
        [-0.55, 0.18, 0.28],
        [0.55, 0.18, 0.28],
      ].map((pos, index) => (
        <mesh key={index} position={pos as [number, number, number]}>
          <boxGeometry args={[0.06, 0.36, 0.06]} />
          <meshStandardMaterial color="#B3916E" roughness={0.8} metalness={0} />
        </mesh>
      ))}
    </group>
  )
}
