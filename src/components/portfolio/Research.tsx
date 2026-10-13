import { research } from '../../data/research'

export function Research() {
  return (
    <section id="research" aria-labelledby="research-heading" className="scroll-mt-8">
      <h2 id="research-heading" className="font-display text-2xl text-ink">
        Research
      </h2>
      <ul className="mt-6 space-y-8">
        {research.map((entry) => (
          <li key={entry.id} className="border-t border-line pt-6 first:border-t-0 first:pt-0">
            <h3 className="text-lg text-ink">{entry.title}</h3>
            <p className="mt-1 text-sm text-muted">
              {entry.organization} · {entry.topic}
            </p>
            <p className="mt-3 leading-relaxed text-ink/90">{entry.description}</p>
            {entry.publication ? (
              <p className="mt-2 text-sm text-muted">{entry.publication}</p>
            ) : null}
            <ul className="mt-3 flex flex-wrap gap-2">
              {entry.technologies.map((tech) => (
                <li
                  key={tech}
                  className="border border-line px-2 py-0.5 text-xs text-muted"
                >
                  {tech}
                </li>
              ))}
            </ul>
            {entry.links && entry.links.length > 0 ? (
              <ul className="mt-3 flex flex-wrap gap-3 text-sm">
                {entry.links.map((link) => (
                  <li key={link.href}>
                    <a
                      href={link.href}
                      className="text-accent underline-offset-2 hover:underline"
                      {...(link.external
                        ? { target: '_blank', rel: 'noreferrer' }
                        : {})}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  )
}
