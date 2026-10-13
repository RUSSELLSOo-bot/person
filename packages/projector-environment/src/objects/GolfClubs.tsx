import { materials } from '../config/materials'

type ClubSpec = {
  id: string
  x: number
  z: number
  lean: number
  twist: number
  length: number
  headWidth: number
  headDepth: number
}

const CLUBS: ClubSpec[] = [
  { id: 'driver', x: -0.05, z: 0.04, lean: 0.1, twist: 0.08, length: 1.22, headWidth: 0.1, headDepth: 0.05 },
  { id: 'wood', x: 0.02, z: -0.03, lean: -0.06, twist: -0.04, length: 1.16, headWidth: 0.09, headDepth: 0.045 },
  { id: 'iron-7', x: 0.07, z: 0.05, lean: 0.14, twist: 0.12, length: 1.08, headWidth: 0.075, headDepth: 0.03 },
  { id: 'iron-9', x: -0.01, z: 0.09, lean: -0.11, twist: -0.08, length: 1.05, headWidth: 0.07, headDepth: 0.028 },
  { id: 'wedge', x: 0.05, z: -0.06, lean: 0.05, twist: 0.02, length: 1.0, headWidth: 0.068, headDepth: 0.032 },
]

/**
 * Golf bag + clubs on the right. Named sub-groups ready for future selection/animation.
 * No interactions in this iteration.
 */
export function GolfClubs() {
  return (
    <group position={[2.45, 0, 0.45]} rotation={[0, -0.4, 0]} name="golf-set">
      <group name="golf-bag">
        <mesh position={[0, 0.58, 0]} castShadow>
          <cylinderGeometry args={[0.19, 0.23, 1.0, 14]} />
          <meshStandardMaterial
            color={materials.golfBag}
            roughness={0.88}
            metalness={0.02}
          />
        </mesh>
        <mesh position={[0, 1.1, 0]}>
          <torusGeometry args={[0.175, 0.028, 10, 18]} />
          <meshStandardMaterial
            color={materials.golfBagDark}
            roughness={0.7}
            metalness={0.1}
          />
        </mesh>
        {/* Strap */}
        <mesh position={[-0.2, 0.7, 0]} rotation={[0, 0, 0.35]}>
          <boxGeometry args={[0.04, 0.55, 0.02]} />
          <meshStandardMaterial
            color={materials.golfBagDark}
            roughness={0.85}
            metalness={0}
          />
        </mesh>
        {/* Contact shadow */}
        <mesh position={[0, 0.01, 0]} rotation={[-Math.PI / 2, 0, 0]}>
          <circleGeometry args={[0.28, 20]} />
          <meshBasicMaterial color="#000000" transparent opacity={0.16} />
        </mesh>
      </group>

      <group name="club-shafts" position={[0, 1.12, 0]}>
        {CLUBS.map((club) => (
          <group
            key={club.id}
            name={`club-${club.id}`}
            position={[club.x, 0, club.z]}
            rotation={[0.18 + club.lean * 0.2, 0, club.lean]}
          >
            <mesh
              name={`shaft-${club.id}`}
              position={[0, club.length / 2, 0]}
            >
              <cylinderGeometry args={[0.011, 0.013, club.length, 8]} />
              <meshStandardMaterial
                color={materials.clubShaft}
                roughness={0.32}
                metalness={0.6}
              />
            </mesh>
            {/* Grip */}
            <mesh position={[0, 0.08, 0]}>
              <cylinderGeometry args={[0.015, 0.014, 0.16, 8]} />
              <meshStandardMaterial
                color="#3F3B36"
                roughness={0.9}
                metalness={0}
              />
            </mesh>
            <group
              name={`head-${club.id}`}
              position={[0.015, club.length + 0.01, 0]}
              rotation={[0, club.twist, 0.45]}
            >
              <mesh>
                <boxGeometry args={[club.headWidth, 0.028, club.headDepth]} />
                <meshStandardMaterial
                  color={materials.clubHead}
                  roughness={0.4}
                  metalness={0.55}
                />
              </mesh>
            </group>
          </group>
        ))}
      </group>
    </group>
  )
}
