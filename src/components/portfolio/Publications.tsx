import { publications } from '../../data/publications'

export function Publications() {
  return (
    <section
      id="publications"
      aria-labelledby="publications-heading"
      className="scroll-mt-8"
    >
      <h2 id="publications-heading" className="font-display text-2xl text-ink">
        Publications
      </h2>
      <ul className="mt-6 space-y-6">
        {publications.map((entry) => (
          <li key={entry.id} className="border-t border-line pt-6 first:border-t-0 first:pt-0">
            <h3 className="text-lg text-ink">{entry.title}</h3>
            <p className="mt-1 text-sm text-muted">
              {entry.venue} · {entry.year} · {entry.type}
            </p>
            <p className="mt-3 leading-relaxed text-ink/90">{entry.description}</p>
            {entry.link ? (
              <a
                href={entry.link}
                target="_blank"
                rel="noreferrer"
                className="mt-2 inline-block text-sm text-accent underline-offset-2 hover:underline"
              >
                View resource
              </a>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  )
}
