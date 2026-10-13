import type { CSSProperties, ReactNode } from 'react'
import type { ProjectionLayout } from '../config/layout'

type Props = {
  children: ReactNode
  projectorOn: boolean
  layout: ProjectionLayout
}

export function ProjectionSurface({ children, projectorOn, layout }: Props) {
  const frameStyle: CSSProperties = {
    width: layout.width,
    transform: `perspective(${layout.perspectivePx}px) rotateY(${layout.rotateYDeg}deg) rotateX(${layout.rotateXDeg}deg)`,
    transformOrigin: 'center center',
    opacity: projectorOn ? 1 : 0.12,
    transition: 'opacity 280ms ease',
  }

  return (
    <div
      className="pe-projection-frame"
      style={frameStyle}
      data-projector={projectorOn ? 'on' : 'off'}
      aria-hidden={!projectorOn}
    >
      <div className="pe-projection-panel">
        <div
          className="pe-projection-glow"
          style={{
            background: projectorOn
              ? 'linear-gradient(180deg, rgba(255,250,240,0.38), transparent 30%)'
              : 'rgba(41, 40, 36, 0.4)',
          }}
          aria-hidden="true"
        />
        <div
          className={
            projectorOn
              ? 'pe-projection-content'
              : 'pe-projection-content pe-projection-content--inactive'
          }
        >
          {children}
        </div>
      </div>
      {!projectorOn ? (
        <p className="pe-sr-only">
          Projection is off. Use the restore control to show the content again.
        </p>
      ) : null}
    </div>
  )
}
