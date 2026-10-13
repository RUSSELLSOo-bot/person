import { RoomEnvironment } from '@portfolio/projector-environment'
import { useMemo, useState } from 'react'
import { ExampleWebsite } from './ExampleWebsite'
import { PlaceholderPortfolio } from './PlaceholderPortfolio'

type DemoMode = 'placeholder' | 'external'

export default function App() {
  const [mode, setMode] = useState<DemoMode>('placeholder')
  const [projectorLog, setProjectorLog] = useState('on')

  const projectionContent = useMemo(() => {
    return mode === 'placeholder' ? <PlaceholderPortfolio /> : <ExampleWebsite />
  }, [mode])

  return (
    <>
      <div
        style={{
          position: 'fixed',
          top: '0.75rem',
          right: '0.75rem',
          zIndex: 50,
          display: 'flex',
          gap: '0.4rem',
          fontFamily: 'system-ui, sans-serif',
          fontSize: '0.8rem',
        }}
      >
        <button type="button" onClick={() => setMode('placeholder')}>
          Placeholder
        </button>
        <button type="button" onClick={() => setMode('external')}>
          External API test
        </button>
        <span
          style={{
            alignSelf: 'center',
            padding: '0.2rem 0.5rem',
            background: 'rgb(247 243 237 / 90%)',
            border: '1px solid #D8D0C4',
          }}
        >
          projector: {projectorLog}
        </span>
      </div>

      <RoomEnvironment
        projectionContent={projectionContent}
        initialProjectorOn
        onProjectorStateChange={(on) => setProjectorLog(on ? 'on' : 'off')}
      />
    </>
  )
}
