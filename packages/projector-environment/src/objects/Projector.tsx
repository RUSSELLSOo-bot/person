import { materials } from '../config/materials'

type ProjectorProps = {
  projectorOn: boolean
  onToggle: () => void
}

export function Projector({ projectorOn, onToggle }: ProjectorProps) {
  return (
    <group
      name="projector"
      position={[0.05, 0.08, 0.02]}
      rotation={[0, 0.42, 0]}
      onClick={(event) => {
        event.stopPropagation()
        onToggle()
      }}
      onPointerOver={() => {
        document.body.style.cursor = 'pointer'
      }}
      onPointerOut={() => {
        document.body.style.cursor = 'auto'
      }}
    >
      {/* Main body */}
      <mesh castShadow name="projector-body">
        <boxGeometry args={[0.46, 0.15, 0.3]} />
        <meshStandardMaterial
          color={projectorOn ? materials.projectorBody : materials.projectorBodyOff}
          roughness={0.42}
          metalness={0.12}
        />
      </mesh>
      {/* Top bevel plate */}
      <mesh position={[0, 0.08, 0]}>
        <boxGeometry args={[0.42, 0.02, 0.26]} />
        <meshStandardMaterial
          color="#F5F2EC"
          roughness={0.5}
          metalness={0.08}
        />
      </mesh>
      {/* Front lens barrel */}
      <mesh position={[0.24, 0.01, 0]} rotation={[0, 0, Math.PI / 2]} name="projector-lens">
        <cylinderGeometry args={[0.055, 0.065, 0.09, 20]} />
        <meshStandardMaterial
          color={materials.projectorLens}
          roughness={0.2}
          metalness={0.55}
          emissive={projectorOn ? materials.accent : '#000000'}
          emissiveIntensity={projectorOn ? 0.45 : 0}
        />
      </mesh>
      {/* Lens glass */}
      <mesh position={[0.285, 0.01, 0]} rotation={[0, 0, Math.PI / 2]}>
        <cylinderGeometry args={[0.038, 0.038, 0.02, 16]} />
        <meshStandardMaterial
          color="#1A1917"
          roughness={0.15}
          metalness={0.7}
          emissive={projectorOn ? '#A8B5A4' : '#000000'}
          emissiveIntensity={projectorOn ? 0.25 : 0}
        />
      </mesh>
      {/* Vents */}
      {[-0.08, 0, 0.08].map((z, i) => (
        <mesh key={i} position={[-0.12, 0.09, z]}>
          <boxGeometry args={[0.14, 0.008, 0.018]} />
          <meshStandardMaterial
            color={materials.projectorMetal}
            roughness={0.55}
            metalness={0.4}
          />
        </mesh>
      ))}
      {/* Power button */}
      <mesh
        position={[0.08, 0.09, 0.1]}
        name="projector-button"
        onClick={(event) => {
          event.stopPropagation()
          onToggle()
        }}
      >
        <cylinderGeometry args={[0.012, 0.012, 0.01, 12]} />
        <meshStandardMaterial
          color={projectorOn ? materials.accent : '#888780'}
          roughness={0.4}
          metalness={0.2}
          emissive={projectorOn ? materials.accent : '#000000'}
          emissiveIntensity={projectorOn ? 0.55 : 0}
        />
      </mesh>
      {/* Soft projected light cone */}
      {projectorOn ? (
        <mesh
          position={[1.05, 0.4, -1.05]}
          rotation={[0.38, 0.5, 0]}
          name="projector-beam"
        >
          <coneGeometry args={[0.65, 2.4, 4, 1, true]} />
          <meshBasicMaterial
            color="#FFF8EE"
            transparent
            opacity={0.055}
            depthWrite={false}
          />
        </mesh>
      ) : null}
      {/* Contact shadow */}
      <mesh position={[0, -0.075, 0]} rotation={[-Math.PI / 2, 0, 0]}>
        <planeGeometry args={[0.55, 0.38]} />
        <meshBasicMaterial color="#000000" transparent opacity={0.14} />
      </mesh>
    </group>
  )
}
