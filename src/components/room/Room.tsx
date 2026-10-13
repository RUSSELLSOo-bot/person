import { theme } from '../../config/theme'

export function Room() {
  return (
    <group>
      {/* Back wall */}
      <mesh position={[0, 1.4, -2.4]} receiveShadow={false}>
        <boxGeometry args={[7.2, 3.2, 0.12]} />
        <meshStandardMaterial color={theme.wall} roughness={0.92} metalness={0} />
      </mesh>
      {/* Left wall */}
      <mesh position={[-3.55, 1.4, -0.4]} rotation={[0, Math.PI / 2, 0]}>
        <boxGeometry args={[4.2, 3.2, 0.12]} />
        <meshStandardMaterial color={theme.wall} roughness={0.92} metalness={0} />
      </mesh>
      {/* Right wall */}
      <mesh position={[3.55, 1.4, -0.4]} rotation={[0, -Math.PI / 2, 0]}>
        <boxGeometry args={[4.2, 3.2, 0.12]} />
        <meshStandardMaterial color={theme.wall} roughness={0.94} metalness={0} />
      </mesh>
      {/* Floor */}
      <mesh position={[0, -0.2, -0.3]} rotation={[-Math.PI / 2, 0, 0]}>
        <boxGeometry args={[7.2, 4.4, 0.12]} />
        <meshStandardMaterial color={theme.floor} roughness={0.88} metalness={0} />
      </mesh>
      {/* Ceiling strip for depth */}
      <mesh position={[0, 2.95, -0.4]}>
        <boxGeometry args={[7.2, 0.08, 4.2]} />
        <meshStandardMaterial color="#EDE4D6" roughness={1} metalness={0} />
      </mesh>
    </group>
  )
}
