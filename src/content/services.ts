import type { Service } from '../types/content'

export const services: readonly Service[] = [
  {
    id: 'interfaces',
    title: 'Interfaces web',
    description: 'Desenvolvimento de interfaces em Angular e React, do layout aos componentes reutilizáveis.',
    icon: 'code',
  },
  {
    id: 'bugs',
    title: 'Bugs e manutenção',
    description: 'Correção de bugs Front-end e evolução segura de aplicações web existentes.',
    icon: 'maintenance',
  },
  {
    id: 'responsive',
    title: 'Responsividade',
    description: 'Ajustes de interface para uma experiência consistente em celular, tablet e desktop.',
    icon: 'layout',
  },
  {
    id: 'landing-pages',
    title: 'Landing pages',
    description: 'Páginas objetivas, acessíveis e preparadas para apresentar serviços e gerar contatos.',
    icon: 'layout',
  },
  {
    id: 'layout-to-code',
    title: 'Layout para código',
    description: 'Conversão de layouts em código responsivo, semântico e fácil de manter.',
    icon: 'code',
  },
  {
    id: 'rest-api',
    title: 'Integração com APIs',
    description: 'Consumo e integração de APIs REST com estados de carregamento, erro e dados tipados.',
    icon: 'api',
  },
  {
    id: 'forms',
    title: 'Formulários',
    description: 'Formulários e validações com mensagens claras e navegação por teclado.',
    icon: 'form',
  },
  {
    id: 'supabase-auth',
    title: 'Autenticação',
    description: 'Fluxos de autenticação e controle de acesso integrados ao Supabase.',
    icon: 'database',
  },
  {
    id: 'data-tables',
    title: 'Tabelas e filtros',
    description: 'Tabelas, filtros, pesquisa e paginação para aplicações orientadas a dados.',
    icon: 'table',
  },
  {
    id: 'vercel',
    title: 'Publicação na Vercel',
    description: 'Configuração de build, rotas, variáveis públicas e publicação na Vercel.',
    icon: 'deploy',
  },
  {
    id: 'evolution',
    title: 'Evolução contínua',
    description: 'Refatoração e melhoria de desempenho, acessibilidade e experiência de uso.',
    icon: 'maintenance',
  },
]
