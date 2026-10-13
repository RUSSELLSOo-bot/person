import { experience } from '../../data/experience'

export function Experience() {
  return (
    <section
      id="experience"
      aria-labelledby="experience-heading"
      className="scroll-mt-8"
    >
      <h2 id="experience-heading" className="font-display text-2xl text-ink">
        Experience
      </h2>
      <ul className="mt-6 space-y-8">
        {experience.map((entry) => (
          <li key={entry.id} className="border-t border-line pt-6 first:border-t-0 first:pt-0">
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h3 className="text-lg text-ink">{entry.organization}</h3>
              <p className="text-sm text-muted">{entry.dates}</p>
            </div>
            <p className="mt-1 text-sm text-accent">{entry.position}</p>
            <p className="mt-3 leading-relaxed text-ink/90">{entry.description}</p>
            <ul className="mt-3 list-disc space-y-1 pl-5 text-sm text-ink/85">
              {entry.contributions.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </section>
  )
}
