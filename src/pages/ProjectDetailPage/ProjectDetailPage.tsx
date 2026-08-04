import { Seo } from '../../components/seo/Seo'
import { Container } from '../../components/ui/Container/Container'
import { ExternalLink } from '../../components/ui/ExternalLink/ExternalLink'
import { ImageWithFallback } from '../../components/ui/ImageWithFallback/ImageWithFallback'
import { LinkButton } from '../../components/ui/LinkButton/LinkButton'
import { Section } from '../../components/ui/Section/Section'
import { TechnologyList } from '../../components/ui/TechnologyList/TechnologyList'
import { findProject } from '../../content/projects'
import { projectSchema, projectSeo } from '../../content/seo'
import { AppLink } from '../../routes/Router'
import NotFoundPage from '../NotFoundPage/NotFoundPage'

interface ProjectDetailPageProps {
  readonly slug: string
}

export default function ProjectDetailPage({ slug }: ProjectDetailPageProps) {
  const project = findProject(slug)

  if (!project) return <NotFoundPage />

  return (
    <main id="main-content" tabIndex={-1}>
      <Seo config={projectSeo(project)} jsonLd={[projectSchema(project)]} />

      <header className="case-hero">
        <Container>
          <nav aria-label="Navegação estrutural">
            <ol className="breadcrumbs">
              <li><AppLink to="/">Início</AppLink></li>
              <li><AppLink to="/projetos">Projetos</AppLink></li>
              <li aria-current="page">{project.title}</li>
            </ol>
          </nav>
          <p className="eyebrow eyebrow--light">Estudo de caso</p>
          <h1>{project.title}</h1>
          <p className="case-hero__summary">{project.summary}</p>
          <TechnologyList technologies={project.technologies} />
        </Container>
      </header>

      <Section className="case-visual-section">
        <ImageWithFallback
          alt={project.imageAlt ?? ''}
          className="case-visual"
          fallbackLabel={`Captura do projeto ${project.title} ainda não adicionada`}
          height={675}
          priority
          src={project.image}
          width={1200}
        />
      </Section>

      <Section>
        <div className="case-intro-grid">
          <article>
            <p className="eyebrow">Contexto</p>
            <h2>O cenário</h2>
            <p>{project.context}</p>
          </article>
          <article>
            <p className="eyebrow">Problema</p>
            <h2>O que precisava ser resolvido</h2>
            <p>{project.problem}</p>
          </article>
        </div>
      </Section>

      <Section tone="muted">
        <div className="case-content-grid">
          <article>
            <p className="eyebrow">Responsabilidade</p>
            <h2>Minha atuação</h2>
            <ul className="check-list">
              {project.responsibilities.map((responsibility) => (
                <li key={responsibility}>{responsibility}</li>
              ))}
            </ul>
          </article>
          <article>
            <p className="eyebrow">Solução</p>
            <h2>Como o trabalho foi conduzido</h2>
            <p>{project.solution}</p>
          </article>
          <article>
            <p className="eyebrow">Desafios</p>
            <h2>Pontos de atenção</h2>
            <ul className="check-list">
              {project.challenges.map((challenge) => (
                <li key={challenge}>{challenge}</li>
              ))}
            </ul>
          </article>
          <article>
            <p className="eyebrow">Resultado qualitativo</p>
            <h2>O que a solução entrega</h2>
            <p>{project.outcome}</p>
          </article>
        </div>
      </Section>

      <Section className="case-actions" tone="dark">
        <div>
          <p className="eyebrow eyebrow--light">Próximo projeto</p>
          <h2>Veja outros trabalhos e contextos de desenvolvimento</h2>
          <div className="inline-actions">
            <LinkButton to="/projetos" variant="secondary">Voltar aos projetos</LinkButton>
            {project.links.map((link) => (
              <ExternalLink href={link.href} key={link.href}>{link.label}</ExternalLink>
            ))}
          </div>
        </div>
      </Section>
    </main>
  )
}
