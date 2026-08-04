import { Seo } from '../../components/seo/Seo'
import { LinkButton } from '../../components/ui/LinkButton/LinkButton'
import { seoByRoute } from '../../content/seo'

export default function NotFoundPage() {
  return (
    <main className="error-page" id="main-content" tabIndex={-1}>
      <Seo config={seoByRoute.notFound} />
      <div className="container error-page__content">
        <p className="eyebrow">Erro 404</p>
        <h1>Página não encontrada</h1>
        <p>O endereço pode ter mudado ou não existe neste portfólio.</p>
        <LinkButton to="/">Voltar para a página inicial</LinkButton>
      </div>
    </main>
  )
}
