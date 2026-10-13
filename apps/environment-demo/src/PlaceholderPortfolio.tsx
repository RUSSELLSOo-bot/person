import { useState } from 'react'

/**
 * Temporary projected content for environment development.
 * Not the real portfolio — used to validate DOM projection behavior.
 */
export function PlaceholderPortfolio() {
  const [count, setCount] = useState(0)
  const [selected, setSelected] = useState('Overview')

  return (
    <main
      style={{
        maxWidth: '42rem',
        margin: '0 auto',
        padding: '2.5rem 1.75rem 4rem',
        fontFamily: 'system-ui, Segoe UI, sans-serif',
        color: '#292824',
        background: '#F7F3ED',
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: '0.75rem',
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: '#66786B',
        }}
      >
        Environment demo
      </p>
      <h1 style={{ margin: '0.75rem 0 0.5rem', fontFamily: 'Georgia, serif', fontSize: '2.4rem' }}>
        Portfolio Integration Test
      </h1>
      <p style={{ margin: 0, color: '#77716A', fontSize: '1.05rem' }}>
        Temporary HTML placeholder projected onto the wall. Replace this node with the
        real portfolio via <code>projectionContent</code>.
      </p>

      <nav aria-label="Demo" style={{ marginTop: '1.5rem' }}>
        <ul
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.85rem',
            listStyle: 'none',
            padding: 0,
            margin: 0,
          }}
        >
          {['Overview', 'Scroll test', 'Interaction', 'External'].map((item) => (
            <li key={item}>
              <button
                type="button"
                onClick={() => setSelected(item)}
                style={{
                  border: '1px solid #D8D0C4',
                  background: selected === item ? '#66786B' : 'transparent',
                  color: selected === item ? '#F7F3ED' : '#292824',
                  padding: '0.35rem 0.7rem',
                  cursor: 'pointer',
                  fontSize: '0.9rem',
                }}
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </nav>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.4rem' }}>Active panel</h2>
        <p>
          Selected: <strong>{selected}</strong>
        </p>
        <p>
          Counter state (must survive projector toggle): <strong>{count}</strong>
        </p>
        <button
          type="button"
          onClick={() => setCount((n) => n + 1)}
          style={{
            border: '1px solid #66786B',
            background: '#66786B',
            color: '#F7F3ED',
            padding: '0.55rem 1rem',
            cursor: 'pointer',
          }}
        >
          Increment counter
        </button>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.4rem' }}>Links & selection</h2>
        <p>
          Select this sentence to confirm text selection works inside the projection.
        </p>
        <p>
          External link:{' '}
          <a href="https://example.com" target="_blank" rel="noreferrer">
            example.com
          </a>
        </p>
        <p>
          In-page link:{' '}
          <a href="#scroll-anchor">Jump to long scroll section</a>
        </p>
      </section>

      <section style={{ marginTop: '2rem' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.4rem' }}>Placeholder image</h2>
        <div
          role="img"
          aria-label="Placeholder image block"
          style={{
            width: '100%',
            maxWidth: '28rem',
            height: '10rem',
            border: '1px dashed #D8D0C4',
            display: 'grid',
            placeItems: 'center',
            color: '#77716A',
            background:
              'linear-gradient(135deg, #E8DED0 0%, #F7F3ED 50%, #C6A780 100%)',
          }}
        >
          Placeholder visual
        </div>
      </section>

      <section id="scroll-anchor" style={{ marginTop: '2.5rem' }}>
        <h2 style={{ fontFamily: 'Georgia, serif', fontSize: '1.4rem' }}>
          Long scroll section
        </h2>
        {Array.from({ length: 12 }, (_, i) => (
          <p key={i} style={{ lineHeight: 1.65, color: '#292824' }}>
            Paragraph {i + 1}. This block validates document scrolling through a long
            projected page without nested scroll traps. The surrounding 3D room should
            remain visually anchored while this content scrolls.
          </p>
        ))}
      </section>
    </main>
  )
}
