import type { ProjectEntry } from '../types/content'

export const projects: ProjectEntry[] = [
  {
    slug: 'tensegrity-rl-locomotion',
    title: 'Reinforcement Learning for Tensegrity Locomotion',
    summary:
      '[Placeholder] Exploring RL policies for locomotion on tensegrity structures.',
    description:
      '[Placeholder] Short card description for tensegrity locomotion research. Replace with accurate scope, role, and outcomes.',
    technologies: ['Python', 'Reinforcement Learning', 'Simulation', 'Robotics'],
    github: undefined,
    overview:
      '[Placeholder] Project overview — goals, collaborators, and context. Do not invent results.',
    challenge:
      '[Placeholder] Technical challenge — underactuation, contact dynamics, sim-to-real, or related constraints.',
    methodology:
      '[Placeholder] Methodology — environment design, reward shaping, training pipeline, evaluation protocol.',
    system:
      '[Placeholder] System description — hardware/software stack, sensing, and control interfaces.',
    results:
      '[Placeholder] Results forthcoming. Document measured outcomes here when available; do not fabricate metrics.',
    resources: [],
  },
  {
    slug: 'autonomous-vehicle',
    title: 'Autonomous Vehicle Development',
    summary:
      '[Placeholder] Perception, planning, and control work for autonomous vehicle platforms.',
    description:
      '[Placeholder] Card summary for autonomous vehicle development. Replace with accurate details.',
    technologies: ['C++', 'Python', 'Perception', 'Planning'],
    overview:
      '[Placeholder] Overview of the autonomous vehicle effort and your contributions.',
    challenge:
      '[Placeholder] Challenges around sensing, latency, safety constraints, or validation.',
    methodology:
      '[Placeholder] Approach to perception, planning, controls, and testing.',
    system:
      '[Placeholder] Vehicle stack, sensors, compute, and software modules.',
    results:
      '[Placeholder] Results forthcoming. Add demos, benchmarks, or milestones when ready.',
    resources: [],
  },
  {
    slug: 'autonomous-golf-pushcart',
    title: 'Autonomous Golf Pushcart',
    summary:
      '[Placeholder] Autonomous navigation for a golf pushcart platform.',
    description:
      '[Placeholder] Card summary for the autonomous golf pushcart project.',
    technologies: ['ROS', 'Embedded', 'Computer Vision', 'Navigation'],
    overview:
      '[Placeholder] Overview of the golf pushcart autonomy project.',
    challenge:
      '[Placeholder] Outdoor navigation, localization, and user interaction challenges.',
    methodology:
      '[Placeholder] Sensing, mapping, path planning, and control approach.',
    system:
      '[Placeholder] Mechanical platform, compute, sensors, and software architecture.',
    results:
      '[Placeholder] Results forthcoming. Add field tests and demos when available.',
    resources: [],
  },
  {
    slug: 'tethered-wing-research',
    title: 'Tethered-Wing Research',
    summary:
      '[Placeholder] Aerospace research on tethered-wing systems and dynamics.',
    description:
      '[Placeholder] Card summary for tethered-wing research. Replace with accurate scope.',
    technologies: ['Aerospace', 'Dynamics', 'MATLAB', 'Experimentation'],
    overview:
      '[Placeholder] Research context, advisors/labs, and objectives.',
    challenge:
      '[Placeholder] Modeling, stability, or experimental challenges.',
    methodology:
      '[Placeholder] Analysis, simulation, and experimental methods used.',
    system:
      '[Placeholder] Apparatus, instrumentation, and analysis toolchain.',
    results:
      '[Placeholder] Results forthcoming. Cite posters, papers, or data when ready.',
    resources: [],
  },
]

export function getProjectBySlug(slug: string): ProjectEntry | undefined {
  return projects.find((project) => project.slug === slug)
}
