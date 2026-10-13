import { Floor } from './Floor'
import { Walls } from './Walls'

export function Room() {
  return (
    <group name="room">
      <Walls />
      <Floor />
    </group>
  )
}
