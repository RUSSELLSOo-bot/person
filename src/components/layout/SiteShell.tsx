import { lazy, Suspense, type ReactNode } from 'react'
import { useMediaQuery } from '../../hooks/useMediaQuery'
import { useProjectorState } from '../../hooks/useProjectorState'
import { ProjectionControls } from '../projection/ProjectionControls'
import { ProjectionFrame } from '../projection/ProjectionFrame'
import { ProjectorHotspot } from '../projection/ProjectorHotspot'

const RoomScene = lazy(() =>
  import('../room/RoomScene').then((mod) => ({ default: mod.RoomScene })),
)

type Props = {
  children: ReactNode
}

function RoomFallback() {
  return (
    <div
      className="absolute inset-0 bg-[linear-gradient(165deg,#E8DED0_0%,#D9CFC0_55%,#C6A780_100%)]"
      aria-hidden="true"
    />
  )
}

export function SiteShell({ children }: Props) {
  const isDesktop = useMediaQuery('(min-width: 768px)')
  const { projectorOn } = useProjectorState()

  if (!isDesktop) {
    return (
      <div className="relative min-h-screen bg-portfolio">
        <div
          className={[
            'relative z-10 transition-opacity duration-300',
            projectorOn ? 'opacity-100' : 'opacity-40',
          ].join(' ')}
        >
          {children}
        </div>
        <ProjectionControls />
      </div>
    )
  }

  return (
    <div className="relative min-h-screen bg-wall">
      <div className="pointer-events-none fixed inset-0 z-0" aria-hidden="true">
        <Suspense fallback={<RoomFallback />}>
          <RoomScene />
        </Suspense>
      </div>

      <div className="relative z-10">
        <div className="relative">
          <ProjectorHotspot />
          <ProjectionFrame>{children}</ProjectionFrame>
        </div>
      </div>

      <ProjectionControls />
    </div>
  )
}
