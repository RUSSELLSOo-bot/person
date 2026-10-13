export const profile = {
  name: 'Russell Soo',
  role: 'Aerospace Engineering @ UC Berkeley',
  focus: 'Robotics · Reinforcement Learning · Autonomous Systems',
  about: [
    '[Placeholder] Brief introduction for Russell Soo — aerospace engineering student at UC Berkeley working across robotics, reinforcement learning, autonomous systems, and aerospace research.',
    '[Placeholder] Add a short paragraph on current interests, labs, or what you are building next. Replace this copy in src/data/profile.ts.',
  ],
  profileImage: undefined as string | undefined,
  resumePath: '/assets/resume/russell-soo-resume.pdf',
  resumeAvailable: false,
  email: 'russell.soo@berkeley.edu',
  links: {
    github: 'https://github.com/RUSSELLSOo-bot',
    linkedin: 'https://www.linkedin.com/in/placeholder-russell-soo',
  },
  nav: [
    { id: 'about', label: 'About' },
    { id: 'research', label: 'Research' },
    { id: 'projects', label: 'Projects' },
    { id: 'experience', label: 'Experience' },
    { id: 'resume', label: 'Résumé' },
    { id: 'contact', label: 'Contact' },
  ],
} as const
