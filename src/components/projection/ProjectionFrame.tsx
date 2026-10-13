import type { ReactNode } from 'react'
import { useProjectorState } from '../../hooks/useProjectorState'

type Props = {
  children: ReactNode
}

export function ProjectionFrame({ children }: Props) {
  const { projectorOn } = useProjectorState()

  return (
    <div
      className={[
        'projection-frame relative z-10 mx-auto my-6 w-[var(--projection-width)]',
        'transition-opacity duration-300',
        projectorOn ? 'opacity-100' : 'opacity-[0.12]',
      ].join(' ')}
      style={{
        transform: 'perspective(1400px) rotateY(-1.6deg) rotateX(0.4deg)',
        transformOrigin: 'center center',
      }}
    >
      <div
        className={[
          'overflow-hidden border border-line/70 bg-portfolio shadow-[var(--shadow-soft)]',
          projectorOn ? 'ring-1 ring-white/40' : '',
        ].join(' ')}
      >
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background: projectorOn
              ? 'linear-gradient(180deg, var(--color-projection-glow), transparent 28%)'
              : 'rgba(41, 40, 36, 0.35)',
          }}
          aria-hidden="true"
        />
        <div
          className={
            projectorOn
              ? 'relative z-0'
              : 'relative z-0 pointer-events-none select-none'
          }
        >
          {children}
        </div>
      </div>
      {!projectorOn ? (
        <p className="sr-only">
          Projection is off. Use the Restore projection control to show the website
          again.
        </p>
      ) : null}
    </div>
  )
}
