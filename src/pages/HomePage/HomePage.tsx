import { Container } from '../../components/ui/Container/Container'
import { ExternalLink } from '../../components/ui/ExternalLink/ExternalLink'
import { LinkButton } from '../../components/ui/LinkButton/LinkButton'
import { ProjectCard } from '../../components/ui/ProjectCard/ProjectCard'
import { Section } from '../../components/ui/Section/Section'
import { SectionHeading } from '../../components/ui/SectionHeading/SectionHeading'
import { ServiceCard } from '../../components/ui/ServiceCard/ServiceCard'
import { TechnologyList } from '../../components/ui/TechnologyList/TechnologyList'
import { Seo } from '../../components/seo/Seo'
import { featuredProjects } from '../../content/projects'
import { profile } from '../../content/profile'
import { personSchema, seoByRoute, websiteSchema } from '../../content/seo'
import { services } from '../../content/services'
import { skills } from '../../content/skills'

const primaryTechnologies = skills
  .filter((skill) => skill.category === 'Front-end')
  .slice(0, 9)
  .map((skill) => skill.name)

export default function HomePage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Seo config={seoByRoute.home} jsonLd={[personSchema, websiteSchema]} />

      <section className="hero">
        <Container className="hero__content">
          <div className="hero__copy">
            <p className="eyebrow eyebrow--light">Front-end · João Pessoa, Brasil</p>
            <h1>{profile.heroTitle}</h1>
            <p className="hero__description">{profile.heroSupportingText}</p>
            <div className="hero__actions">
              <LinkButton to="/projetos">Ver projetos</LinkButton>
              <LinkButton to="/#servicos" variant="secondary">
                Conhecer meus serviços
              </LinkButton>
              <a className="button button--ghost" href={profile.emailHref}>
                Entrar em contato
              </a>
            </div>
          </div>

          <aside aria-label="Resumo profissional" className="hero__panel">
            <span aria-hidden="true" className="hero__availability-dot" />
            <p>Aberto a oportunidades e projetos freelance</p>
            <dl>
              <div>
                <dt>Foco</dt>
                <dd>Interfaces, dados e integrações</dd>
              </div>
              <div>
                <dt>Stack principal</dt>
                <dd>Angular, React e TypeScript</dd>
              </div>
              <div>
                <dt>Entrega</dt>
                <dd>Do layout ao deploy</dd>
              </div>
            </dl>
          </aside>
        </Container>
      </section>

      <section aria-label="Tecnologias principais" className="technology-strip">
        <Container>
          <p>Tecnologias principais</p>
          <TechnologyList technologies={primaryTechnologies} />
        </Container>
      </section>

      <Section id="servicos">
        <SectionHeading
          description="Atuação prática para criar, corrigir e evoluir experiências web com clareza técnica."
          eyebrow="Como posso ajudar"
          title="Serviços Front-end para produtos que precisam avançar"
        />
        <div className="service-grid">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          description="Estudos de caso reais, apresentados sem dados confidenciais ou resultados inventados."
          eyebrow="Trabalhos selecionados"
          title="Projetos em destaque"
        />
        <ul className="project-grid">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </ul>
        <LinkButton className="section-cta" to="/projetos" variant="ghost">
          Explorar todos os projetos
        </LinkButton>
      </Section>

      <Section className="about-summary" tone="dark">
        <div className="about-summary__grid">
          <div>
            <p className="eyebrow eyebrow--light">Sobre Pedro</p>
            <h2>Experiência técnica com atenção ao que as pessoas realmente usam</h2>
          </div>
          <div className="about-summary__copy">
            <p>{profile.about[0]}</p>
            <p>{profile.about[2]}</p>
            <LinkButton to="/sobre" variant="secondary">
              Conhecer minha trajetória
            </LinkButton>
          </div>
        </div>
      </Section>

      <Section className="contact-cta">
        <div className="contact-cta__content">
          <div>
            <p className="eyebrow">Próximo passo</p>
            <h2>Tem uma interface para criar ou uma aplicação para evoluir?</h2>
            <p>Conte o contexto do projeto e o que precisa funcionar melhor.</p>
          </div>
          <ExternalLink href={profile.emailHref} opensNewTab={false}>
            Entrar em contato
          </ExternalLink>
        </div>
      </Section>
    </main>
  )
}
