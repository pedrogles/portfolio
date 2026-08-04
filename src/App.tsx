import { PageLayout } from './components/layout/PageLayout/PageLayout'
import { ScrollManager } from './components/layout/ScrollManager/ScrollManager'
import { AppRoutes } from './routes/AppRoutes'

export function AppContent() {
  return (
    <PageLayout>
      <ScrollManager />
      <AppRoutes />
    </PageLayout>
  )
}
