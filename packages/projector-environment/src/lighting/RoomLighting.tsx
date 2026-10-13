import { materials } from '../config/materials'

type Props = {
  projectorOn: boolean
}

export function RoomLighting({ projectorOn }: Props) {
  return (
    <>
      <ambientLight intensity={0.68} color={materials.ambient} />
      <directionalLight
        position={[2.8, 4.8, 2.2]}
        intensity={0.9}
        color={materials.keyLight}
        castShadow={false}
      />
      <directionalLight
        position={[-2.4, 2.4, -0.6]}
        intensity={0.28}
        color={materials.fillLight}
      />
      <hemisphereLight args={['#FFF8EE', '#CDB89F', 0.22]} />
      {projectorOn ? (
        <pointLight
          position={[0.1, 1.5, -1.6]}
          intensity={0.35}
          color="#FFF6E8"
          distance={6}
          decay={2}
        />
      ) : null}
    </>
  )
}
