import type { ReactNode } from 'react'
import type { ProjectionLayout } from '../config/layout'
import { ProjectionSurface } from './ProjectionSurface'

type Props = {
  children: ReactNode
  projectorOn: boolean
  layout: ProjectionLayout
  onToggleProjector: () => void
  onRestore: () => void
}

export function ProjectionMount({
  children,
  projectorOn,
  layout,
  onToggleProjector,
  onRestore,
}: Props) {
  return (
    <div className="pe-projection-mount">
      <button
        type="button"
        className="pe-projector-hotspot"
        aria-label={projectorOn ? 'Turn projector off' : 'Turn projector on'}
        aria-pressed={projectorOn}
        onClick={onToggleProjector}
        title="Toggle projector"
      />
      <ProjectionSurface projectorOn={projectorOn} layout={layout}>
        {children}
      </ProjectionSurface>
      <div className="pe-projector-controls">
        <button
          type="button"
          className="pe-control-btn"
          aria-pressed={projectorOn}
          onClick={onToggleProjector}
        >
          Projector: {projectorOn ? 'On' : 'Off'}
        </button>
        {!projectorOn ? (
          <button type="button" className="pe-control-btn pe-control-btn--accent" onClick={onRestore}>
            Restore projection
          </button>
        ) : null}
      </div>
    </div>
  )
}
