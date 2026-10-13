import {
  lazy,
  Suspense,
  useCallback,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from 'react'
import {
  mergeEnvironmentConfig,
  type EnvironmentConfig,
} from './config/layout'
import { useMediaQuery } from './hooks/useMediaQuery'
import { ProjectionMount } from './projection/ProjectionMount'
import './styles/environment.css'

const SceneCanvas = lazy(() =>
  import('./SceneCanvas').then((mod) => ({ default: mod.SceneCanvas })),
)

export type RoomEnvironmentProps = {
  /** Arbitrary React/HTML content shown on the projected wall. */
  projectionContent: ReactNode
  /** Initial projector power state. Default: true. */
  initialProjectorOn?: boolean
  /** Fires whenever projector on/off state changes. */
  onProjectorStateChange?: (projectorOn: boolean) => void
  /** Optional class on the outer environment root. */
  className?: string
  /** Optional camera / projection / render overrides. */
  config?: Partial<EnvironmentConfig>
}

/**
 * Reusable projector-room shell.
 * Owns room rendering, camera, lighting, and projector state.
 * Parent owns all portfolio/website content and routing.
 */
export function RoomEnvironment({
  projectionContent,
  initialProjectorOn = true,
  onProjectorStateChange,
  className,
  config: configPartial,
}: RoomEnvironmentProps) {
  const config = useMemo(
    () => mergeEnvironmentConfig(configPartial),
    [configPartial],
  )
  const isDesktop = useMediaQuery(
    `(min-width: ${config.projection.desktopMinWidthPx}px)`,
  )
  const [projectorOn, setProjectorOn] = useState(initialProjectorOn)

  useEffect(() => {
    onProjectorStateChange?.(projectorOn)
  }, [projectorOn, onProjectorStateChange])

  const toggleProjector = useCallback(() => {
    setProjectorOn((prev) => !prev)
  }, [])

  const restoreProjector = useCallback(() => {
    setProjectorOn(true)
  }, [])

  const rootClass = ['pe-root', className].filter(Boolean).join(' ')

  if (!isDesktop) {
    return (
      <div className={`${rootClass} pe-mobile-root`}>
        <div
          className={[
            'pe-mobile-content',
            projectorOn ? '' : 'pe-mobile-content--dim',
          ]
            .filter(Boolean)
            .join(' ')}
        >
          {projectionContent}
        </div>
        <div className="pe-projector-controls">
          <button
            type="button"
            className="pe-control-btn"
            aria-pressed={projectorOn}
            onClick={toggleProjector}
          >
            Projector: {projectorOn ? 'On' : 'Off'}
          </button>
          {!projectorOn ? (
            <button
              type="button"
              className="pe-control-btn pe-control-btn--accent"
              onClick={restoreProjector}
            >
              Restore projection
            </button>
          ) : null}
        </div>
      </div>
    )
  }

  return (
    <div className={rootClass}>
      <Suspense
        fallback={
          <div className="pe-room-layer">
            <div className="pe-fallback-room" aria-hidden="true" />
          </div>
        }
      >
        <SceneCanvas
          config={config}
          projectorOn={projectorOn}
          onToggleProjector={toggleProjector}
        />
      </Suspense>

      <div className="pe-content-layer">
        <ProjectionMount
          projectorOn={projectorOn}
          layout={config.projection}
          onToggleProjector={toggleProjector}
          onRestore={restoreProjector}
        >
          {projectionContent}
        </ProjectionMount>
      </div>
    </div>
  )
}
