import { profile } from '../../data/profile'

export function Hero() {
  return (
    <section id="hero" aria-labelledby="hero-name" className="pt-2">
      <p className="text-sm uppercase tracking-[0.18em] text-accent">Portfolio</p>
      <h1
        id="hero-name"
        className="mt-3 font-display text-4xl leading-tight text-ink md:text-5xl"
      >
        {profile.name}
      </h1>
      <p className="mt-3 text-lg text-muted md:text-xl">{profile.role}</p>
      <p className="mt-2 text-base text-ink/80">{profile.focus}</p>
    </section>
  )
}
