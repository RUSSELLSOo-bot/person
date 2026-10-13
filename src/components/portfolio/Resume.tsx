import { profile } from '../../data/profile'

export function Resume() {
  return (
    <section id="resume" aria-labelledby="resume-heading" className="scroll-mt-8">
      <h2 id="resume-heading" className="font-display text-2xl text-ink">
        Résumé
      </h2>
      <p className="mt-4 leading-relaxed text-ink/90">
        {profile.resumeAvailable ? (
          <>
            Download a PDF résumé:{' '}
            <a
              href={profile.resumePath}
              className="text-accent underline-offset-2 hover:underline"
            >
              Russell Soo — Résumé (PDF)
            </a>
          </>
        ) : (
          <>
            Résumé forthcoming. Place a PDF at{' '}
            <code className="text-sm">public/assets/resume/</code> and set{' '}
            <code className="text-sm">resumeAvailable: true</code> in{' '}
            <code className="text-sm">src/data/profile.ts</code>.
          </>
        )}
      </p>
    </section>
  )
}
