import { profile } from '../../data/profile'

export function About() {
  return (
    <section id="about" aria-labelledby="about-heading" className="scroll-mt-8">
      <h2 id="about-heading" className="font-display text-2xl text-ink">
        About
      </h2>
      <div className="mt-5 flex flex-col gap-6 md:flex-row md:items-start">
        {profile.profileImage ? (
          <img
            src={profile.profileImage}
            alt={`Portrait of ${profile.name}`}
            className="h-36 w-36 shrink-0 object-cover"
          />
        ) : (
          <div
            className="flex h-36 w-36 shrink-0 items-center justify-center border border-dashed border-line bg-wall/40 text-center text-xs text-muted"
            aria-hidden="true"
          >
            Optional
            <br />
            profile image
          </div>
        )}
        <div className="space-y-4 text-base leading-relaxed text-ink/90">
          {profile.about.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  )
}
