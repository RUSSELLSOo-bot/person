import { useProjectorState } from '../../hooks/useProjectorState'

/** Desktop HTML hotspot aligned with the lower-left 3D projector. */
export function ProjectorHotspot() {
  const { projectorOn, toggleProjector } = useProjectorState()

  return (
    <button
      type="button"
      onClick={toggleProjector}
      aria-label={projectorOn ? 'Turn projector off' : 'Turn projector on'}
      aria-pressed={projectorOn}
      className="pointer-events-auto absolute bottom-[7%] left-[2%] z-30 hidden h-[12%] w-[14%] min-h-16 min-w-24 cursor-pointer border-0 bg-transparent md:block"
      title="Toggle projector"
    />
  )
}
