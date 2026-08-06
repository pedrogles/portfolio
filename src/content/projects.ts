import type { Project } from '../types/project'

import reurbValidacaoImage from '../assets/projects/reurb-validacao.webp'
import proReforma from '../assets/projects/pro-reforma.webp'
import informativoTRE from '../assets/projects/informativo-tre.webp'

export const projects: readonly Project[] = [
  {
    slug: 'consulta-validacao-cadastral',
    title: 'Aplicação de consulta e validação cadastral',
    image: reurbValidacaoImage,
    imageAlt: 'Tela da aplicação de consulta e validação cadastral REURB',
    summary:
      'Aplicação Angular integrada ao Supabase para consulta segura de imóveis e responsáveis familiares.',
    category: 'featured',
    technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Git', 'Vercel'],
    responsibilities: [
      'Modelagem e manutenção de PostgreSQL',
      'Views e funções RPC',
      'Autenticação e controle de acesso',
      'Filtros e pesquisa por CPF',
      'Paginação server-side',
      'Visualização segura de dados',
      'Deploy na Vercel',
    ],
    context:
      'Solução web para apoiar consultas e validações cadastrais no contexto de Regularização Fundiária Urbana.',
    problem:
      'Organizar o acesso a dados relacionados a imóveis e responsáveis familiares sem expor informações pessoais ou estruturas internas.',
    solution:
      'Aplicação Angular com autenticação, controle de acesso, consultas paginadas e integração com views e funções do Supabase/PostgreSQL.',
    challenges: [
      'Proteger dados pessoais e restringir o acesso por perfil.',
      'Manter filtros e paginação eficientes no servidor.',
      'Apresentar dados complexos com clareza e segurança.',
    ],
    outcome:
      'Uma base de consulta orientada à validação cadastral, com responsabilidades separadas entre interface, autenticação e camada de dados.',
    links: [],
  },
  {
    slug: 'pro-reforma',
    title: 'Pró-Reforma',
    image: proReforma,
    imageAlt: 'Tela da aplicação Pró-Reforma para planejamento de reformas residenciais',
    summary:
      'Manutenção e evolução de aplicação Angular voltada ao planejamento de reformas residenciais.',
    category: 'featured',
    technologies: ['Angular', 'TypeScript', 'RxJS', 'PrimeNG', 'Angular Material', 'SCSS'],
    responsibilities: [
      'Componentes reutilizáveis',
      'Formulários reativos',
      'Tabelas e filtros',
      'Integração com APIs',
      'Responsividade',
      'Gerenciamento de estado',
      'Melhorias de UX',
    ],
    context:
      'Aplicação direcionada ao planejamento de reformas residenciais, com fluxos orientados a formulários e dados.',
    problem:
      'Evoluir uma aplicação Angular mantendo consistência entre telas, integrações, estados e regras de validação.',
    solution:
      'Manutenção incremental com componentes reutilizáveis, formulários reativos, tabelas, filtros e melhorias de responsividade.',
    challenges: [
      'Trabalhar sobre uma base existente sem interromper os fluxos necessários.',
      'Padronizar componentes e comportamentos de interface.',
      'Integrar estados assíncronos e APIs de forma previsível.',
    ],
    outcome:
      'Uma evolução contínua da experiência de uso e da organização dos componentes da aplicação.',
    links: [{ label: 'Ver projeto', href: 'https://www.pro-reforma.com/' }],
  },
  {
    slug: 'converx',
    title: 'Converx — Conversor de moedas',
    summary:
      'Projeto autoral de conversão de moedas com interface responsiva, consumo de API e publicação na Vercel.',
    category: 'featured',
    technologies: ['React', 'JavaScript', 'API REST', 'CSS', 'Vercel'],
    responsibilities: [
      'Definição da interface',
      'Consumo de API de moedas',
      'Tratamento da experiência responsiva',
      'Publicação na Vercel',
    ],
    context:
      'Projeto autoral criado para oferecer uma conversão direta entre moedas em diferentes tamanhos de tela.',
    problem:
      'Transformar dados de uma API externa em uma interação simples, rápida e compreensível.',
    solution:
      'Interface responsiva com seleção de moedas, entrada de valores e apresentação clara do resultado da conversão.',
    challenges: [
      'Tratar estados de carregamento e resposta da API.',
      'Manter a experiência consistente em telas pequenas.',
    ],
    outcome:
      'Uma demonstração funcional de integração com API e cuidado com a experiência do usuário.',
    links: [{ label: 'Ver projeto', href: 'https://converxx.vercel.app/' }],
  },
  {
    slug: 'bendita-beleza',
    title: 'Bendita Beleza',
    summary:
      'Website responsivo para apresentação de serviços de beleza com foco em interface e experiência visual.',
    category: 'featured',
    technologies: ['React', 'JavaScript', 'CSS', 'Design responsivo', 'Vercel'],
    responsibilities: [
      'Construção da interface',
      'Responsividade',
      'Apresentação dos serviços',
      'Experiência visual',
    ],
    context:
      'Presença digital voltada à apresentação clara dos serviços de um salão de beleza.',
    problem:
      'Organizar conteúdo visual e informações de serviço sem prejudicar a navegação em dispositivos móveis.',
    solution:
      'Website com hierarquia visual, seções objetivas e adaptação responsiva do conteúdo.',
    challenges: ['Equilibrar identidade visual e legibilidade.', 'Manter os elementos confortáveis em telas pequenas.'],
    outcome:
      'Uma apresentação digital coesa, responsiva e alinhada ao caráter visual do serviço.',
    links: [{ label: 'Ver projeto', href: 'https://benditabeleza.vercel.app/' }],
  },
  {
    slug: 'informativo-tre-pb',
    title: 'Informativo TRE-PB',
    image: informativoTRE,
    imageAlt: 'Capa do Informativo TRE-PB, publicação digital do Tribunal Regional Eleitoral da Paraíba',
    summary:
      'Projeto editorial com foco em facilitar a leitura e o acesso à informação por meio de textos, imagens e links.',
    category: 'previous',
    technologies: ['Design editorial', 'Figma', 'Produção gráfica digital'],
    responsibilities: ['Criação do layout', 'Organização visual do conteúdo', 'Preparação para publicação digital'],
    context: 'Novo modelo visual para uma publicação informativa periódica.',
    problem: 'Facilitar a leitura de conteúdo institucional extenso em formato digital.',
    solution: 'Estrutura editorial com textos mais curtos, imagens, links e hierarquia visual consistente.',
    challenges: ['Organizar diferentes tipos de conteúdo.', 'Preservar legibilidade no formato de publicação.'],
    outcome: 'Um modelo editorial direcionado a uma leitura mais clara e navegável.',
    links: [
      {
        label: 'Abrir publicação',
        href: 'https://www.tre-pb.jus.br/++theme++justica_eleitoral/pdfjs/web/viewer.html?file=https://www.tre-pb.jus.br/jurisprudencia/informativo-tre-pb/arquivos/2022/tre-pb-informativo-numero-5-do-ano-8/@@download/file/TRE-PB-informativo-numero-5-do-ano-8.pdf',
      },
    ],
  },
  {
    slug: 'portfolio-renato-cesar',
    title: 'Portfólio Renato César',
    summary:
      'Projeto de portfólio criado para organizar e facilitar o compartilhamento de publicações.',
    category: 'previous',
    technologies: ['Design de interface', 'Design editorial', 'Publicação digital'],
    responsibilities: ['Definição da estrutura', 'Organização das publicações', 'Criação da identidade visual'],
    context: 'Portfólio digital para reunir e compartilhar publicações profissionais.',
    problem: 'Apresentar uma coleção de trabalhos com acesso simples e organização visual.',
    solution: 'Estrutura direta, identidade sóbria e navegação orientada às publicações.',
    challenges: ['Organizar conteúdos distintos em uma apresentação coesa.'],
    outcome: 'Uma publicação digital compacta e fácil de compartilhar.',
    links: [
      {
        label: 'Abrir publicação',
        href: 'https://linktree-pedrogles.vercel.app/assets/portfolio-renato-cesar-4b812987.pdf',
      },
    ],
  },
]

export const featuredProjects = projects.filter((project) => project.category === 'featured')
export const previousProjects = projects.filter((project) => project.category === 'previous')

export function findProject(slug: string | undefined): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
