export interface ProjectLink {
  readonly label: 'Ver projeto' | 'Ver código' | 'Abrir publicação'
  readonly href: string
}

export interface Project {
  readonly slug: string
  readonly title: string
  readonly cardTitle?: string
  readonly summary: string
  readonly category: 'featured' | 'previous'
  readonly technologies: readonly string[]
  readonly responsibilities: readonly string[]
  readonly context: string
  readonly problem: string
  readonly solution: string
  readonly challenges: readonly string[]
  readonly outcome: string
  readonly image?: string
  readonly imageAlt?: string
  readonly links: readonly ProjectLink[]
}
