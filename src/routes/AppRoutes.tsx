import { lazy, Suspense } from 'react'
import { RouteLoading } from '../components/ui/RouteLoading/RouteLoading'
import { useAppLocation } from './Router'

const HomePage = lazy(() => import('../pages/HomePage/HomePage'))
const AboutPage = lazy(() => import('../pages/AboutPage/AboutPage'))
const ProjectsPage = lazy(() => import('../pages/ProjectsPage/ProjectsPage'))
const ProjectDetailPage = lazy(() => import('../pages/ProjectDetailPage/ProjectDetailPage'))
const ResumePage = lazy(() => import('../pages/ResumePage/ResumePage'))
const NotFoundPage = lazy(() => import('../pages/NotFoundPage/NotFoundPage'))

export function AppRoutes() {
  const { pathname } = useAppLocation()
  const normalizedPath = pathname.length > 1 ? pathname.replace(/\/$/, '') : pathname
  const projectMatch = normalizedPath.match(/^\/projetos\/([^/]+)$/)
  const projectSlug = projectMatch?.[1]

  let page
  if (normalizedPath === '/') page = <HomePage />
  else if (normalizedPath === '/sobre') page = <AboutPage />
  else if (normalizedPath === '/projetos') page = <ProjectsPage />
  else if (projectSlug) page = <ProjectDetailPage slug={decodeURIComponent(projectSlug)} />
  else if (normalizedPath === '/curriculo') page = <ResumePage />
  else page = <NotFoundPage />

  return (
    <Suspense fallback={<RouteLoading />}>
      {page}
    </Suspense>
  )
}
