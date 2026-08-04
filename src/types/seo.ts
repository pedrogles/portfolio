export type JsonLdValue = Record<string, unknown>

export interface SeoConfig {
  readonly title: string
  readonly description: string
  readonly path: string
  readonly image?: string
  readonly type?: 'website' | 'profile' | 'article'
  readonly noIndex?: boolean
}
