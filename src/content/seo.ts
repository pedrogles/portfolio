import type { Project } from '../types/project'
import type { JsonLdValue, SeoConfig } from '../types/seo'
import { profile } from './profile'
import { findProject, projects } from './projects'

export interface RouteSeoData {
  readonly config: SeoConfig
  readonly jsonLd: readonly JsonLdValue[]
}

export const DEFAULT_SITE_URL = 'https://pedrogles.vercel.app'
export const DEFAULT_OG_IMAGE = '/android-chrome-512x512.png'

function normalizeSiteUrl(value: string | undefined): string {
  if (!value) return DEFAULT_SITE_URL

  try {
    return new URL(value).origin
  } catch {
    return DEFAULT_SITE_URL
  }
}

export const SITE_URL = normalizeSiteUrl(import.meta.env.VITE_SITE_URL)

export function absoluteUrl(path: string): string {
  return new URL(path, `${SITE_URL}/`).toString()
}

export const seoByRoute = {
  home: {
    title: 'Pedro Gabriel | Desenvolvedor de Software',
    description:
      'Portfólio de Pedro Gabriel: desenvolvimento de software e aplicações web com Angular, React e TypeScript, conectando dados, serviços e integrações.',
    path: '/',
  },
  about: {
    title: 'Sobre Pedro Gabriel | Desenvolvedor de Software',
    description:
      'Conheça a trajetória de Pedro Gabriel em desenvolvimento de software, com especialidade em Front-end, aplicações web, Supabase, PostgreSQL e integrações.',
    path: '/sobre',
    type: 'profile',
  },
  projects: {
    title: 'Projetos de Software e Web | Pedro Gabriel',
    description:
      'Projetos de software e aplicações web com Angular, React, Supabase e PostgreSQL. Estudos de caso de interfaces, dados e integrações.',
    path: '/projetos',
  },
  resume: {
    title: 'Currículo | Pedro Gabriel — Desenvolvedor de Software',
    description:
      'Currículo online atualizado de Pedro Gabriel, Desenvolvedor de Software com experiência em Angular, React, TypeScript, dados e integrações com Supabase.',
    path: '/curriculo',
    type: 'profile',
  },
  notFound: {
    title: 'Página não encontrada | Pedro Gabriel',
    description: 'A página solicitada não foi encontrada no portfólio de Pedro Gabriel.',
    path: '/404',
    noIndex: true,
  },
} as const satisfies Record<string, SeoConfig>

export function projectSeo(project: Project): SeoConfig {
  return {
    title: `${project.title} | Estudo de caso de Pedro Gabriel`,
    description: project.summary,
    path: `/projetos/${project.slug}`,
    type: 'article',
  }
}

export const personSchema: JsonLdValue = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.fullName,
  url: SITE_URL,
  jobTitle: profile.role,
  sameAs: ['https://github.com/pedrogles', 'https://www.linkedin.com/in/pedrogles/'],
  knowsAbout: ['Front-end', 'Angular', 'React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Acessibilidade web'],
}

export const websiteSchema: JsonLdValue = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: `Portfólio de ${profile.displayName}`,
  url: SITE_URL,
  inLanguage: 'pt-BR',
}

export const projectsSchema: JsonLdValue = {
  '@context': 'https://schema.org',
  '@type': 'CollectionPage',
  name: 'Projetos de Pedro Gabriel',
  url: absoluteUrl('/projetos'),
  mainEntity: {
    '@type': 'ItemList',
    itemListElement: projects.map((project, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: project.title,
      url: absoluteUrl(`/projetos/${project.slug}`),
    })),
  },
}

export function projectSchema(project: Project): JsonLdValue {
  return {
    '@context': 'https://schema.org',
    '@type': project.schemaType,
    name: project.title,
    description: project.summary,
    ...(project.schemaType === 'WebApplication' ? { applicationCategory: 'WebApplication' } : {}),
    url: absoluteUrl(`/projetos/${project.slug}`),
    keywords: project.technologies.join(', '),
  }
}

export function seoForPath(url: string): RouteSeoData {
  const pathname = new URL(url, `${SITE_URL}/`).pathname.replace(/\/$/, '') || '/'

  if (pathname === '/') return { config: seoByRoute.home, jsonLd: [personSchema, websiteSchema] }
  if (pathname === '/sobre') return { config: seoByRoute.about, jsonLd: [personSchema] }
  if (pathname === '/projetos') return { config: seoByRoute.projects, jsonLd: [projectsSchema] }
  if (pathname === '/curriculo') return { config: seoByRoute.resume, jsonLd: [personSchema] }

  const projectSlug = pathname.match(/^\/projetos\/([^/]+)$/)?.[1]
  const project = findProject(projectSlug)
  if (project) return { config: projectSeo(project), jsonLd: [projectSchema(project)] }

  return { config: seoByRoute.notFound, jsonLd: [] }
}
