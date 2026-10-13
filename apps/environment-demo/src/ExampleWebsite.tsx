import { useState } from 'react'

/**
 * Independently authored content used for the integration readiness test.
 * Must not live inside the environment package.
 */
export function ExampleWebsite() {
  const [clicks, setClicks] = useState(0)

  return (
    <main
      style={{
        maxWidth: '40rem',
        margin: '0 auto',
        padding: '2rem 1.5rem 3rem',
        fontFamily: 'system-ui, sans-serif',
        background: '#F7F3ED',
        color: '#292824',
      }}
    >
      <h1 style={{ fontFamily: 'Georgia, serif' }}>External Website</h1>
      <p>This content comes from another component outside the environment package.</p>
      <button
        type="button"
        onClick={() => setClicks((n) => n + 1)}
        style={{
          border: '1px solid #66786B',
          background: '#66786B',
          color: '#fff',
          padding: '0.5rem 0.9rem',
          cursor: 'pointer',
        }}
      >
        Test Interaction ({clicks})
      </button>
    </main>
  )
}
