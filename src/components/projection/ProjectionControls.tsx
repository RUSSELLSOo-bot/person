import { useProjectorState } from '../../hooks/useProjectorState'

export function ProjectionControls() {
  const { projectorOn, setProjectorOn, toggleProjector } = useProjectorState()

  return (
    <div className="pointer-events-auto fixed bottom-4 left-4 z-40 flex flex-col gap-2 md:bottom-6 md:left-6">
      <button
        type="button"
        onClick={toggleProjector}
        aria-pressed={projectorOn}
        className="border border-line bg-portfolio/95 px-3 py-2 text-left text-sm text-ink shadow-sm backdrop-blur-sm transition hover:border-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
      >
        Projector: {projectorOn ? 'On' : 'Off'}
      </button>
      {!projectorOn ? (
        <button
          type="button"
          onClick={() => setProjectorOn(true)}
          className="border border-accent bg-portfolio px-3 py-2 text-left text-sm text-ink shadow-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          Restore projection
        </button>
      ) : null}
    </div>
  )
}
