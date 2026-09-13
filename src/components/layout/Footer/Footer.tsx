import type { IconType } from 'react-icons'
import { FiGithub, FiLinkedin, FiMail, FiMessageCircle } from 'react-icons/fi'
import { profile } from '../../../content/profile'
import { socialLinks } from '../../../content/social-links'
import type { SocialLink } from '../../../types/content'
import { ExternalLink } from '../../ui/ExternalLink/ExternalLink'
import { Container } from '../../ui/Container/Container'

const iconByKind: Record<SocialLink['kind'], IconType> = {
  email: FiMail,
  github: FiGithub,
  linkedin: FiLinkedin,
  whatsapp: FiMessageCircle,
}

export function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="site-footer">
      <Container className="site-footer__content">
        <div>
          <p className="site-footer__title">Vamos construir algo útil?</p>
          <p>Disponível para oportunidades em desenvolvimento de software e projetos freelance.</p>
        </div>
        <nav aria-label="Contato e redes sociais">
          <ul className="social-links">
            {socialLinks.map((link) => {
              const Icon = iconByKind[link.kind]
              return (
                <li key={link.href}>
                  <ExternalLink
                    ariaLabel={link.ariaLabel}
                    href={link.href}
                    opensNewTab={link.opensNewTab}
                  >
                    <Icon aria-hidden="true" focusable="false" />
                    {link.label}
                  </ExternalLink>
                </li>
              )
            })}
          </ul>
        </nav>
        <div className="site-footer__meta">
          <p>© {currentYear} {profile.displayName}. Desenvolvimento e design por Pedro Gabriel.</p>
          <p>{profile.location}. Este site não utiliza cookies analíticos.</p>
        </div>
      </Container>
    </footer>
  )
}
