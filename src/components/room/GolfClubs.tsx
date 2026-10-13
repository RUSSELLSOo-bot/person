import { theme } from '../../config/theme'

/** Static golf bag + clubs (right side). Replaceable later with detailed models. */
export function GolfClubs() {
  return (
    <group position={[2.35, 0, 0.35]} rotation={[0, -0.35, 0]}>
      {/* Bag body */}
      <mesh position={[0, 0.55, 0]}>
        <cylinderGeometry args={[0.18, 0.22, 0.95, 12]} />
        <meshStandardMaterial color="#5C5248" roughness={0.85} metalness={0} />
      </mesh>
      {/* Bag top ring */}
      <mesh position={[0, 1.05, 0]}>
        <torusGeometry args={[0.17, 0.025, 8, 16]} />
        <meshStandardMaterial color="#3F3832" roughness={0.7} metalness={0.15} />
      </mesh>
      {/* Clubs */}
      {[
        { x: -0.06, z: 0.02, rot: 0.08, len: 1.15 },
        { x: 0.02, z: -0.04, rot: -0.05, len: 1.2 },
        { x: 0.08, z: 0.03, rot: 0.12, len: 1.1 },
        { x: -0.02, z: 0.08, rot: -0.1, len: 1.18 },
      ].map((club, index) => (
        <group
          key={index}
          position={[club.x, 1.05, club.z]}
          rotation={[0.15, 0, club.rot]}
        >
          <mesh position={[0, club.len / 2, 0]}>
            <cylinderGeometry args={[0.012, 0.014, club.len, 8]} />
            <meshStandardMaterial color="#C9C4BC" roughness={0.35} metalness={0.55} />
          </mesh>
          <mesh position={[0.02, club.len + 0.02, 0]} rotation={[0, 0, 0.4]}>
            <boxGeometry args={[0.08, 0.03, 0.04]} />
            <meshStandardMaterial color={theme.accent} roughness={0.55} metalness={0.2} />
          </mesh>
        </group>
      ))}
    </group>
  )
}
