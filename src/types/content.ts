export type LinkItem = {
  label: string
  href: string
  external?: boolean
}

export type ResearchEntry = {
  id: string
  title: string
  organization: string
  description: string
  topic: string
  technologies: string[]
  publication?: string
  links?: LinkItem[]
}

export type ProjectEntry = {
  slug: string
  title: string
  summary: string
  description: string
  thumbnail?: string
  technologies: string[]
  github?: string
  demo?: string
  overview: string
  challenge: string
  methodology: string
  system: string
  results: string
  media?: { type: 'image' | 'video'; src: string; caption?: string }[]
  resources?: LinkItem[]
}

export type ExperienceEntry = {
  id: string
  organization: string
  position: string
  dates: string
  description: string
  contributions: string[]
}

export type PublicationEntry = {
  id: string
  title: string
  venue: string
  year: string
  type: 'poster' | 'paper' | 'presentation' | 'other'
  description: string
  link?: string
}
