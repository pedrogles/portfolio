import { renderToReadableStream } from 'react-dom/server'
import { AppContent } from './App'
import { ErrorBoundary } from './components/errors/ErrorBoundary'
import { renderSeoHead } from './components/seo/Seo'
import { seoForPath } from './content/seo'
import { RouterProvider } from './routes/Router'
import './styles/index.scss'

interface RenderedPage {
  readonly body: string
  readonly head: string
}

export async function render(url: string): Promise<RenderedPage> {
  const stream = await renderToReadableStream(
    <RouterProvider initialUrl={url}>
      <ErrorBoundary>
        <AppContent />
      </ErrorBoundary>
    </RouterProvider>,
  )

  await stream.allReady
  const body = await new Response(stream).text()
  const seo = seoForPath(url)
  return { body, head: renderSeoHead(seo.config, seo.jsonLd) }
}
