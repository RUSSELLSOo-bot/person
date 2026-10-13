import { Link } from 'react-router-dom'
import type { ProjectEntry } from '../../types/content'

type Props = {
  project: ProjectEntry
}

export function ProjectCard({ project }: Props) {
  return (
    <article className="border-t border-line pt-6 first:border-t-0 first:pt-0">
      <div className="flex flex-col gap-4 md:flex-row">
        <div
          className="flex h-28 w-full shrink-0 items-center justify-center border border-dashed border-line bg-wall/30 text-xs text-muted md:h-28 md:w-40"
          aria-hidden={!project.thumbnail}
        >
          {project.thumbnail ? (
            <img
              src={project.thumbnail}
              alt=""
              className="h-full w-full object-cover"
            />
          ) : (
            'Thumbnail placeholder'
          )}
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-lg text-ink">
            <Link
              to={`/project/${project.slug}`}
              className="no-underline underline-offset-4 hover:underline"
            >
              {project.title}
            </Link>
          </h3>
          <p className="mt-2 leading-relaxed text-ink/90">{project.description}</p>
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
          <div className="mt-3 flex flex-wrap gap-4 text-sm">
            <Link
              to={`/project/${project.slug}`}
              className="text-accent underline-offset-2 hover:underline"
            >
              View details
            </Link>
            {project.github ? (
              <a
                href={project.github}
                target="_blank"
                rel="noreferrer"
                className="text-muted underline-offset-2 hover:underline"
              >
                GitHub
              </a>
            ) : null}
            {project.demo ? (
              <a
                href={project.demo}
                target="_blank"
                rel="noreferrer"
                className="text-muted underline-offset-2 hover:underline"
              >
                Demo
              </a>
            ) : null}
          </div>
        </div>
      </div>
    </article>
  )
}
