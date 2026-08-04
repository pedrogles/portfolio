export type ServiceIconName =
  | 'code'
  | 'layout'
  | 'api'
  | 'form'
  | 'database'
  | 'table'
  | 'deploy'
  | 'maintenance'

export interface NavigationItem {
  readonly label: string
  readonly path: string
  readonly ariaLabel: string
  readonly end?: boolean
}

export interface Service {
  readonly id: string
  readonly title: string
  readonly description: string
  readonly icon: ServiceIconName
}

export interface Skill {
  readonly name: string
  readonly category: 'Front-end' | 'Dados e APIs' | 'Ferramentas e práticas'
}

export interface Education {
  readonly title: string
  readonly institution?: string
  readonly period: string
  readonly description?: string
  readonly needsConfirmation?: boolean
}

export interface Experience {
  readonly title: string
  readonly organization: string
  readonly period: string
  readonly description: string
  readonly highlights?: readonly string[]
  readonly needsConfirmation?: boolean
}

export interface SocialLink {
  readonly label: string
  readonly href: string
  readonly ariaLabel: string
  readonly kind: 'linkedin' | 'github' | 'whatsapp' | 'email'
  readonly opensNewTab: boolean
}
