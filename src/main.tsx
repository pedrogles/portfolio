import { StrictMode } from 'react'
import { createRoot, hydrateRoot } from 'react-dom/client'
import { AppContent } from './App'
import { ErrorBoundary } from './components/errors/ErrorBoundary'
import { RouterProvider } from './routes/Router'
import './styles/index.scss'

const rootElement = document.getElementById('root')

if (!rootElement) {
  throw new Error('Elemento raiz da aplicação não encontrado.')
}

const app = (
  <StrictMode>
    <RouterProvider>
      <ErrorBoundary>
        <AppContent />
      </ErrorBoundary>
    </RouterProvider>
  </StrictMode>
)

if (rootElement.hasChildNodes()) hydrateRoot(rootElement, app)
else createRoot(rootElement).render(app)
