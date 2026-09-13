import type { Service } from '../types/content'

export const services: readonly Service[] = [
  {
    id: 'web-applications',
    title: 'Aplicações Web',
    description: 'Aplicações orientadas a produto com Angular, React e TypeScript: interfaces responsivas, componentes reutilizáveis e formulários que apoiam os fluxos de uso.',
    icon: 'code',
  },
  {
    id: 'data-integrations',
    title: 'Dados e Integrações',
    description: 'Aplicações orientadas a dados com Supabase e PostgreSQL, integração de APIs, autenticação e conexão entre sistemas e serviços.',
    icon: 'database',
  },
  {
    id: 'architecture-evolution',
    title: 'Arquitetura e Evolução',
    description: 'Manutenção e evolução de sistemas, organizando interface, dados e serviços com decisões técnicas voltadas à segurança, consistência e evolução arquitetural.',
    icon: 'maintenance',
  },
]
