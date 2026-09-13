import { Seo } from '../../components/seo/Seo'
import { Container } from '../../components/ui/Container/Container'
import { ExternalLink } from '../../components/ui/ExternalLink/ExternalLink'
import { ProjectCard } from '../../components/ui/ProjectCard/ProjectCard'
import { Section } from '../../components/ui/Section/Section'
import { SectionHeading } from '../../components/ui/SectionHeading/SectionHeading'
import { featuredProjects, previousProjects } from '../../content/projects'
import { profile } from '../../content/profile'
import { projectsSchema, seoByRoute } from '../../content/seo'

export default function ProjectsPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Seo config={seoByRoute.projects} jsonLd={[projectsSchema]} />

      <header className="page-hero">
        <Container>
          <p className="eyebrow eyebrow--light">Projetos</p>
          <h1>Aplicações, interfaces e experiências digitais</h1>
          <p>
            Uma seleção de trabalhos em Angular, React, Supabase e design, com o contexto e a atuação em cada projeto.
          </p>
        </Container>
      </header>

      <Section>
        <SectionHeading
          description="Projetos que representam minha atuação em software, aplicações web, dados e integrações."
          eyebrow="Desenvolvimento"
          title="Projetos principais"
        />
        <ul className="project-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </ul>
      </Section>

      <Section tone="muted">
        <SectionHeading
          description="Trabalhos de design e publicação digital que também fazem parte da trajetória."
          eyebrow="Arquivo selecionado"
          title="Design e trabalhos anteriores"
        />
        <ul className="project-grid project-grid--compact">
          {previousProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </ul>
      </Section>

      <Section className="contact-cta">
        <div className="contact-cta__content">
          <div>
            <p className="eyebrow">Vamos conversar</p>
            <h2>Precisa de uma interface responsiva ou apoio para evoluir uma aplicação?</h2>
            <p>Explique o cenário, a tecnologia atual e o resultado esperado.</p>
          </div>
          <ExternalLink href={profile.emailHref} opensNewTab={false}>
            Entrar em contato
          </ExternalLink>
        </div>
      </Section>
    </main>
  )
}
