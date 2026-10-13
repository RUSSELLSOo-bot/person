import { Link } from 'react-router-dom'
import type { ProjectEntry } from '../../types/content'

type Props = {
  project: ProjectEntry
}

function DetailBlock({ title, body }: { title: string; body: string }) {
  return (
    <section className="mt-8">
      <h2 className="font-display text-xl text-ink">{title}</h2>
      <p className="mt-3 leading-relaxed text-ink/90">{body}</p>
    </section>
  )
}

export function ProjectDetail({ project }: Props) {
  return (
    <article>
      <p className="text-sm text-muted">
        <Link to="/" className="underline-offset-2 hover:underline">
          ← Back to portfolio
        </Link>
      </p>
      <h1 className="mt-4 font-display text-3xl text-ink md:text-4xl">
        {project.title}
      </h1>
      <p className="mt-3 text-lg text-muted">{project.summary}</p>

      <DetailBlock title="Overview" body={project.overview} />
      <DetailBlock title="Technical challenge" body={project.challenge} />
      <DetailBlock title="Methodology" body={project.methodology} />
      <DetailBlock title="System description" body={project.system} />
      <DetailBlock title="Results" body={project.results} />

      <section className="mt-8">
        <h2 className="font-display text-xl text-ink">Technologies</h2>
        <ul className="mt-3 flex flex-wrap gap-2">
          {project.technologies.map((tech) => (
            <li
              key={tech}
              className="border border-line px-2 py-0.5 text-xs text-muted"
            >
              {tech}
            </li>
          ))}
        </ul>
      </section>

      {project.media && project.media.length > 0 ? (
        <section className="mt-8">
          <h2 className="font-display text-xl text-ink">Media</h2>
          <ul className="mt-4 space-y-4">
            {project.media.map((item) => (
              <li key={item.src}>
                {item.type === 'image' ? (
                  <img src={item.src} alt={item.caption ?? ''} className="max-w-full" />
                ) : (
                  <video src={item.src} controls className="max-w-full" />
                )}
                {item.caption ? (
                  <p className="mt-2 text-sm text-muted">{item.caption}</p>
                ) : null}
              </li>
            ))}
          </ul>
        </section>
      ) : (
        <section className="mt-8">
          <h2 className="font-display text-xl text-ink">Media</h2>
          <p className="mt-3 text-sm text-muted">
            [Placeholder] Images and videos can be added under{' '}
            <code>public/assets/</code> and referenced in project data.
          </p>
        </section>
      )}

      {(project.github || project.demo || (project.resources && project.resources.length > 0)) && (
        <section className="mt-8">
          <h2 className="font-display text-xl text-ink">External resources</h2>
          <ul className="mt-3 space-y-2 text-sm">
            {project.github ? (
              <li>
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  GitHub repository
                </a>
              </li>
            ) : null}
            {project.demo ? (
              <li>
                <a
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  Demo
                </a>
              </li>
            ) : null}
            {project.resources?.map((resource) => (
              <li key={resource.href}>
                <a
                  href={resource.href}
                  target="_blank"
                  rel="noreferrer"
                  className="text-accent underline-offset-2 hover:underline"
                >
                  {resource.label}
                </a>
              </li>
            ))}
          </ul>
        </section>
      )}
    </article>
  )
}
