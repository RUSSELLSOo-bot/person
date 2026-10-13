import { profile } from '../../data/profile'

export function Contact() {
  return (
    <section id="contact" aria-labelledby="contact-heading" className="scroll-mt-8">
      <h2 id="contact-heading" className="font-display text-2xl text-ink">
        Contact
      </h2>
      <ul className="mt-4 space-y-2 text-base text-ink/90">
        <li>
          Email:{' '}
          <a
            href={`mailto:${profile.email}`}
            className="text-accent underline-offset-2 hover:underline"
          >
            {profile.email}
          </a>
        </li>
        <li>
          GitHub:{' '}
          <a
            href={profile.links.github}
            target="_blank"
            rel="noreferrer"
            className="text-accent underline-offset-2 hover:underline"
          >
            {profile.links.github.replace('https://', '')}
          </a>
        </li>
        <li>
          LinkedIn:{' '}
          <a
            href={profile.links.linkedin}
            target="_blank"
            rel="noreferrer"
            className="text-accent underline-offset-2 hover:underline"
          >
            Profile (placeholder URL — update in profile.ts)
          </a>
        </li>
      </ul>
    </section>
  )
}
