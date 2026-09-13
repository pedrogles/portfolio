import curriculumPdf from '../../assets/documents/curriculo-pedro-gabriel.pdf'
import { Seo } from '../../components/seo/Seo'
import { Container } from '../../components/ui/Container/Container'
import { profile } from '../../content/profile'
import { resumeContent } from '../../content/resume'
import { personSchema, seoByRoute } from '../../content/seo'
import { socialLinks } from '../../content/social-links'

export default function ResumePage() {
  const github = socialLinks.find((link) => link.kind === 'github')
  const linkedin = socialLinks.find((link) => link.kind === 'linkedin')

  return (
    <main className="resume-page" id="main-content" tabIndex={-1}>
      <Seo config={seoByRoute.resume} jsonLd={[personSchema]} />

      <Container className="resume-toolbar">
        <p>Currículo online atualizado. O PDF ATS 2026 permanece disponível separadamente.</p>
        <div className="inline-actions">
          <button className="button button--primary" onClick={() => window.print()} type="button">
            Imprimir ou salvar em PDF
          </button>
          <a
            className="text-link"
            download="Curriculo_Pedro_Gabriel_ATS_2026.pdf"
            href={curriculumPdf}
          >
            Baixar currículo em PDF
          </a>
        </div>
      </Container>

      <article className="resume-document">
        <header className="resume-header">
          <h1>{profile.fullName}</h1>
          <p className="resume-header__role">{resumeContent.headline}</p>
          <address>
            <p className="resume-header__contact-line">
              <span>{resumeContent.location}</span>
              <span aria-hidden="true">|</span>
              <a href={resumeContent.phoneHref}>{resumeContent.phone}</a>
              <span aria-hidden="true">|</span>
              <a href={profile.emailHref}>{profile.email}</a>
            </p>
            <p className="resume-header__contact-line">
              {linkedin ? <a href={linkedin.href} rel="noopener noreferrer" target="_blank">LinkedIn: linkedin.com/in/pedrogles</a> : null}
              <span aria-hidden="true">|</span>
              {github ? <a href={github.href} rel="noopener noreferrer" target="_blank">GitHub: github.com/pedrogles</a> : null}
              <span aria-hidden="true">|</span>
              <a href={resumeContent.portfolioUrl} rel="noopener noreferrer" target="_blank">
                Portfólio: {resumeContent.portfolioLabel}
              </a>
            </p>
          </address>
        </header>

        <section className="resume-section">
          <h2>Resumo profissional</h2>
          <p>{resumeContent.summary}</p>
        </section>

        <section className="resume-section">
          <h2>Competências técnicas</h2>
          <dl className="resume-competencies">
            {resumeContent.competencyGroups.map((group) => (
              <div key={group.label}>
                <dt>{group.label}:</dt>
                <dd>{group.items.join(', ')}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section className="resume-section">
          <h2>Experiência profissional</h2>
          <div className="resume-entries">
            {resumeContent.experiences.map((experience) => (
              <article className="resume-entry" key={`${experience.organization}-${experience.period}`}>
                <header>
                  <h3>{experience.title} - <span>{experience.organization}</span></h3>
                  <p>{experience.period} | {experience.location}</p>
                </header>
                <ul>
                  {experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section resume-section--projects">
          <h2>Projetos selecionados</h2>
          <div className="resume-entries">
            {resumeContent.projects.map((project) => (
              <article className="resume-entry" key={project.title}>
                <header>
                  <h3>{project.title} - <span>{project.qualifier}</span></h3>
                  <p>{project.period}</p>
                </header>
                <ul>
                  {project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
                {'link' in project ? (
                  <p className="resume-entry__link">
                    <strong>GitHub:</strong>{' '}
                    <a href={project.link.href} rel="noopener noreferrer" target="_blank">{project.link.label}</a>
                  </p>
                ) : null}
              </article>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <h2>Formação acadêmica</h2>
          <div className="resume-education">
            {resumeContent.academicEducation.map((item) => (
              <p key={item.course}>
                <strong>{item.course} - {item.institution}</strong> | {item.status}
              </p>
            ))}
          </div>
        </section>

        <section className="resume-section">
          <h2>Formação complementar</h2>
          <ul className="resume-simple-list">
            {resumeContent.complementaryEducation.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </section>

        <section className="resume-section">
          <h2>Idiomas</h2>
          <dl className="resume-languages">
            {resumeContent.languages.map((language) => (
              <div key={language.name}>
                <dt>{language.name}:</dt>
                <dd>{language.level}</dd>
              </div>
            ))}
          </dl>
        </section>

        <footer className="resume-document__footer">{profile.fullName} - Currículo 2026</footer>
      </article>
    </main>
  )
}
