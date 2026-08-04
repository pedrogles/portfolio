import type { NavigationItem } from '../types/content'

export const navigation: readonly NavigationItem[] = [
  { label: 'Início', path: '/', ariaLabel: 'Ir para a página inicial', end: true },
  { label: 'Sobre', path: '/sobre', ariaLabel: 'Ir para a página sobre Pedro' },
  { label: 'Projetos', path: '/projetos', ariaLabel: 'Ir para a página de projetos' },
  { label: 'Currículo', path: '/curriculo', ariaLabel: 'Ir para o currículo em HTML' },
]
