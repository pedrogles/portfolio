import profilePhoto from '../../assets/image/pedro.webp'
import curriculumPdf from '../../assets/documents/curriculo-pedro-gabriel.pdf'
import { Seo } from '../../components/seo/Seo'
import { Container } from '../../components/ui/Container/Container'
import { ImageWithFallback } from '../../components/ui/ImageWithFallback/ImageWithFallback'
import { LinkButton } from '../../components/ui/LinkButton/LinkButton'
import { Section } from '../../components/ui/Section/Section'
import { SectionHeading } from '../../components/ui/SectionHeading/SectionHeading'
import { TechnologyList } from '../../components/ui/TechnologyList/TechnologyList'
import { education } from '../../content/education'
import { experiences } from '../../content/experiences'
import { profile } from '../../content/profile'
import { personSchema, seoByRoute } from '../../content/seo'
import { skills } from '../../content/skills'
import type { Skill } from '../../types/content'

const skillCategories: readonly Skill['category'][] = [
  'Front-end',
  'Dados e Integrações',
  'Ferramentas e práticas',
]

export default function AboutPage() {
  return (
    <main id="main-content" tabIndex={-1}>
      <Seo config={seoByRoute.about} jsonLd={[personSchema]} />

      <header className="page-hero">
        <Container>
          <p className="eyebrow eyebrow--light">Sobre</p>
          <h1>Desenvolvimento de software com base técnica e visão de produto</h1>
          <p>
            Conheça minha trajetória, as tecnologias que uso e a forma como organizo cada entrega.
          </p>
        </Container>
      </header>

      <Section className="profile-section">
        <div className="profile-section__grid">
          <ImageWithFallback
            alt="Pedro Gabriel, desenvolvedor de software."
            className="profile-photo"
            fallbackLabel="Foto de Pedro Gabriel indisponível"
            height={496}
            priority
            src={profilePhoto}
            width={460}
          />
          <div className="profile-section__content">
            <p className="eyebrow">Apresentação</p>
            <h2>{profile.role}</h2>
            {profile.about.map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
            <div className="inline-actions">
              <LinkButton to="/curriculo">Ver currículo online atualizado</LinkButton>
              <a
                className="text-link"
                download="curriculo-pedro-gabriel.pdf"
                href={curriculumPdf}
              >
                Baixar currículo em PDF
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section tone="muted">
        <SectionHeading
          description="Atuações ordenadas da mais recente para a mais antiga."
          eyebrow="Trajetória"
          title="Experiência profissional"
        />
        <div className="timeline">
          {experiences.map((experience) => (
            <article className="timeline__item" key={`${experience.organization}-${experience.title}`}>
              <div className="timeline__meta">
                <p>{experience.period}</p>
                {experience.needsConfirmation ? (
                  <span className="status-badge">Período a confirmar</span>
                ) : null}
              </div>
              <div>
                <h3>{experience.title}</h3>
                <p className="timeline__organization">{experience.organization}</p>
                <p>{experience.description}</p>
                {experience.highlights ? (
                  <TechnologyList technologies={experience.highlights} />
                ) : null}
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Formação" title="Aprendizado acadêmico e prático" />
        <div className="education-grid">
          {education.map((item) => (
            <article className="education-card" key={`${item.title}-${item.institution ?? ''}`}>
              <p className="education-card__period">{item.period}</p>
              <h3>{item.title}</h3>
              {item.institution ? <p className="education-card__institution">{item.institution}</p> : null}
              {item.description ? <p>{item.description}</p> : null}
              {item.needsConfirmation ? <span className="status-badge">Confirmar período</span> : null}
            </article>
          ))}
        </div>
      </Section>

      <Section tone="dark">
        <SectionHeading
          description="Ferramentas e conhecimentos aplicados conforme o contexto de cada produto."
          eyebrow="Competências"
          title="Habilidades técnicas"
        />
        <div className="skill-groups">
          {skillCategories.map((category, index) => (
            <section aria-labelledby={`skill-group-${index}`} className="skill-group" key={category}>
              <h3 id={`skill-group-${index}`}>{category}</h3>
              <TechnologyList
                ariaLabel={`Habilidades em ${category}`}
                technologies={skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => skill.name)}
              />
            </section>
          ))}
        </div>
      </Section>

      <Section>
        <SectionHeading eyebrow="Forma de trabalho" title="Do contexto à validação" />
        <ol className="workflow-list">
          {profile.workflow.map((step, index) => (
            <li key={step}>
              <span aria-hidden="true">{String(index + 1).padStart(2, '0')}</span>
              <p>{step}</p>
            </li>
          ))}
        </ol>
      </Section>
    </main>
  )
}
