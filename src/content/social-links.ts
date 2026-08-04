import type { SocialLink } from '../types/content'
import { profile } from './profile'

export const socialLinks: readonly SocialLink[] = [
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/pedrogles/',
    ariaLabel: 'LinkedIn de Pedro Gabriel, abre em nova guia',
    kind: 'linkedin',
    opensNewTab: true,
  },
  {
    label: 'GitHub',
    href: 'https://github.com/pedrogles',
    ariaLabel: 'GitHub de Pedro Gabriel, abre em nova guia',
    kind: 'github',
    opensNewTab: true,
  },
  {
    label: 'WhatsApp',
    href: 'https://api.whatsapp.com/send?phone=5583996082302',
    ariaLabel: 'Conversar com Pedro Gabriel pelo WhatsApp, abre em nova guia',
    kind: 'whatsapp',
    opensNewTab: true,
  },
  {
    label: 'E-mail',
    href: profile.emailHref,
    ariaLabel: 'Enviar e-mail para Pedro Gabriel',
    kind: 'email',
    opensNewTab: false,
  },
]
