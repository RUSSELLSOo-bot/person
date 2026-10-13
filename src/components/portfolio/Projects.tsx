import { projects } from '../../data/projects'
import { ProjectCard } from '../projects/ProjectCard'

export function Projects() {
  return (
    <section id="projects" aria-labelledby="projects-heading" className="scroll-mt-8">
      <h2 id="projects-heading" className="font-display text-2xl text-ink">
        Projects
      </h2>
      <div className="mt-6 space-y-2">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </section>
  )
}
