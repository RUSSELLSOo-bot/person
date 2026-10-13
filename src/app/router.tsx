import {
  HashRouter,
  Navigate,
  Route,
  Routes,
  useParams,
} from 'react-router-dom'
import { SiteShell } from '../components/layout/SiteShell'
import { PortfolioHome } from '../components/portfolio/PortfolioHome'
import { ProjectDetail } from '../components/projects/ProjectDetail'
import { getProjectBySlug } from '../data/projects'
import { ProjectorProvider } from '../hooks/useProjectorState'

function ProjectPage() {
  const { slug } = useParams()
  const project = slug ? getProjectBySlug(slug) : undefined

  if (!project) {
    return <Navigate to="/" replace />
  }

  return (
    <SiteShell>
      <div className="mx-auto w-full max-w-3xl px-6 py-10 md:px-10 md:py-12">
        <ProjectDetail project={project} />
      </div>
    </SiteShell>
  )
}

function HomePage() {
  return (
    <SiteShell>
      <PortfolioHome />
    </SiteShell>
  )
}

export function AppRouter() {
  return (
    <ProjectorProvider>
      <HashRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/project/:slug" element={<ProjectPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </HashRouter>
    </ProjectorProvider>
  )
}
