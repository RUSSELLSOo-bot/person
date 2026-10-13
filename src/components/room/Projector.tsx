import { theme } from '../../config/theme'

type Props = {
  projectorOn: boolean
  onToggle: () => void
}

export function Projector({ projectorOn, onToggle }: Props) {
  return (
    <group
      position={[-2.0, 0.55, 0.05]}
      rotation={[0, 0.35, 0]}
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
      <mesh>
        <boxGeometry args={[0.42, 0.14, 0.28]} />
        <meshStandardMaterial
          color={projectorOn ? theme.projectorBody : '#D9D3CA'}
          roughness={0.45}
          metalness={0.1}
        />
      </mesh>
      <mesh position={[0.22, 0.01, 0]}>
        <cylinderGeometry args={[0.05, 0.06, 0.08, 16]} />
        <meshStandardMaterial
          color={theme.projectorLens}
          roughness={0.25}
          metalness={0.4}
          emissive={projectorOn ? '#66786B' : '#000000'}
          emissiveIntensity={projectorOn ? 0.35 : 0}
        />
      </mesh>
      {projectorOn ? (
        <mesh position={[0.9, 0.35, -0.9]} rotation={[0.35, 0.45, 0]}>
          <coneGeometry args={[0.55, 2.2, 4, 1, true]} />
          <meshBasicMaterial
            color="#FFF8EE"
            transparent
            opacity={0.07}
            depthWrite={false}
          />
        </mesh>
      ) : null}
    </group>
  )
}
