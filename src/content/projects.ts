import type { Project } from '../types/project'
import reurbValidacaoImage from '../assets/projects/reurb-validacao.webp'
import proReformaImage from '../assets/projects/pro-reforma.webp'
import informativoTreImage from '../assets/projects/informativo-tre.webp'
import renatoCesarImage from '../assets/logo/rcc.svg'
import converxImage from '../assets/logo/converx.svg'
import benditaBelezaImage from '../assets/logo/rv.svg'

export const projects: readonly Project[] = [
  {
    slug: 'consulta-validacao-cadastral',
    image: reurbValidacaoImage,
    imageAlt: 'Tela da aplicação de consulta e validação cadastral REURB',
    schemaType: 'WebApplication',
    title: 'Aplicação de consulta e validação cadastral',
    summary:
      'Solução REURB de consulta, revisão e validação cadastral, com responsabilidade técnica pela aplicação web, dados e integrações.',
    category: 'featured',
    technologies: ['Angular', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Git', 'Vercel'],
    responsibilities: [
      'Responsável técnico pela frente de TI, com autonomia nas decisões técnicas e arquiteturais necessárias à solução.',
      'Construção e evolução da aplicação web, conectando interfaces e fluxos de consulta, revisão e validação.',
      'Modelagem, manutenção e organização da camada de dados e de suas integrações com a aplicação.',
      'Importação e processamento de dados, com atenção à qualidade e à consistência das informações.',
      'Organização de autenticação, autorização e controle de acesso, considerando privacidade e diferentes perfis de uso.',
      'Manutenção, evolução técnica e resolução de novas necessidades em diferentes contextos de projeto.',
    ],
    context:
      'A Regularização Fundiária Urbana reúne áreas com necessidades distintas de consulta e validação cadastral. Nesse ambiente multidisciplinar, a solução web apoia a leitura, a revisão e a validação das informações, conectando o trabalho dos usuários à camada de dados.',
    problem:
      'Organizar dados, regras de acesso e processos de validação em uma solução composta por diferentes componentes. O desafio envolve preservar a privacidade, acomodar regras por perfil e manter a consistência das informações ao longo de sua importação, revisão e utilização em múltiplos contextos de projeto.',
    solution:
      'Uma arquitetura que separa a aplicação web em Angular, a camada de dados em Supabase/PostgreSQL, a autenticação e autorização e as integrações. Pipelines de importação e processamento alimentam os fluxos cadastrais. A organização das responsabilidades entre esses componentes orienta decisões de manutenção, segurança e evolução, permitindo adaptar a solução a diferentes contextos de projeto.',
    challenges: [
      'Conciliar privacidade e controle de acesso com as necessidades de consulta, revisão e validação dos usuários.',
      'Acomodar regras distintas por perfil e manter comportamentos consistentes entre interface, dados e serviços.',
      'Considerar concorrência nas alterações e preservação de histórico nos processos de revisão e validação.',
      'Integrar fontes de dados com atenção à qualidade e ao processamento das informações importadas.',
      'Evoluir uma solução para múltiplos projetos, equilibrando necessidades específicas, manutenção e consistência arquitetural.',
    ],
    outcome:
      'Solução funcional para consulta, revisão e validação cadastral, com responsabilidades técnicas separadas entre aplicação, dados, acesso e integrações. A estrutura dá suporte a diferentes contextos de projeto e à evolução controlada das necessidades técnicas.',
    links: [],
  },
  {
    slug: 'pro-reforma',
    image: proReformaImage,
    imageAlt: 'Tela da aplicação Pró-Reforma para planejamento de reformas residenciais',
    schemaType: 'WebApplication',
    title: 'Pró-Reforma',
    summary:
      'Aplicação web Angular para seleção de materiais, consulta de preços e planejamento de orçamento de reformas.',
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
      'Aplicação web voltada à reforma residencial, com seleção de materiais, consulta de preços e fluxos de planejamento, orçamento e compra.',
    problem:
      'Evoluir uma aplicação Angular mantendo consistência entre telas, integrações, estados e regras de validação.',
    solution:
      'Manutenção incremental dos fluxos de seleção de materiais e planejamento de reforma, com componentes reutilizáveis, formulários reativos, tabelas, filtros e integração com APIs para consulta de preços.',
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
    image: converxImage,
    imageAlt: 'Logotipo do Converx, conversor de moedas',
    schemaType: 'WebApplication',
    title: 'Converx — Conversor de moedas',
    summary:
      'Aplicação web autoral e funcional de conversão de moedas via API externa em tempo real, com interface responsiva.',
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
    image: benditaBelezaImage,
    imageAlt: 'Identidade visual Bendita Beleza, com as iniciais RV e o perfil de um rosto feminino',
    schemaType: 'WebSite',
    title: 'Bendita Beleza',
    summary:
      'Site institucional responsivo para apresentação de serviços de beleza e direcionamento para contato pelo WhatsApp.',
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
      'Landing page institucional com hierarquia visual, seções de serviços, conteúdo responsivo e direcionamento para contato pelo WhatsApp.',
    challenges: ['Equilibrar identidade visual e legibilidade.', 'Manter os elementos confortáveis em telas pequenas.'],
    outcome:
      'Uma apresentação digital coesa, responsiva e alinhada ao caráter visual do serviço.',
    links: [{ label: 'Ver projeto', href: 'https://benditabeleza.vercel.app/' }],
  },
  {
    slug: 'informativo-tre-pb',
    image: informativoTreImage,
    imageAlt: 'Capa do Informativo TRE-PB, publicação digital do Tribunal Regional Eleitoral da Paraíba',
    schemaType: 'CreativeWork',
    title: 'Informativo TRE-PB',
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
    image: renatoCesarImage,
    imageAlt: 'Identidade visual do Portfólio Renato César, com as iniciais RCC em fundo verde escuro',
    schemaType: 'CreativeWork',
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
