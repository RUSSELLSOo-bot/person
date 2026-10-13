export function Lighting() {
  return (
    <>
      <ambientLight intensity={0.72} color="#fff6ea" />
      <directionalLight
        position={[2.5, 4.5, 2]}
        intensity={0.85}
        color="#fff2e0"
        castShadow={false}
      />
      <directionalLight
        position={[-2, 2, -1]}
        intensity={0.25}
        color="#e8ded0"
      />
    </>
  )
}
