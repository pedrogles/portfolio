import type { Project } from '../../../types/project'
import { AppLink } from '../../../routes/Router'
import { ExternalLink } from '../ExternalLink/ExternalLink'
import { ImageWithFallback } from '../ImageWithFallback/ImageWithFallback'
import { TechnologyList } from '../TechnologyList/TechnologyList'

interface ProjectCardProps {
  readonly project: Project
}

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <li className="project-card">
      <article>
        <ImageWithFallback
          alt={project.imageAlt ?? ''}
          className="project-card__visual"
          fallbackLabel={`Prévia visual do projeto ${project.title} indisponível`}
          height={675}
          src={project.image}
          width={1200}
        />
        <div className="project-card__content">
          <div>
            <p className="project-card__type">
              {project.category === 'featured' ? 'Projeto em destaque' : 'Design e trabalho anterior'}
            </p>
            <h3>{project.title}</h3>
          </div>
          <p>{project.summary}</p>
          <TechnologyList technologies={project.technologies} />
          <div className="project-card__actions">
            <AppLink className="text-link" to={`/projetos/${project.slug}`}>
              Ver estudo de caso
            </AppLink>
            {project.links.slice(0, 1).map((link) => (
              <ExternalLink href={link.href} key={link.href}>
                {link.label}
              </ExternalLink>
            ))}
          </div>
        </div>
      </article>
    </li>
  )
}
