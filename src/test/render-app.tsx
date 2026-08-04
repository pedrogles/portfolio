import { render } from '@testing-library/react'
import { AppContent } from '../App'
import { RouterProvider } from '../routes/Router'

export function renderApp(path = '/') {
  return render(
    <RouterProvider initialUrl={path}>
      <AppContent />
    </RouterProvider>,
  )
}
