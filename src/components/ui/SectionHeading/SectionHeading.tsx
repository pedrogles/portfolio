interface SectionHeadingProps {
  readonly eyebrow?: string
  readonly title: string
  readonly description?: string
  readonly align?: 'start' | 'center'
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'start',
}: SectionHeadingProps) {
  return (
    <header className={`section-heading section-heading--${align}`}>
      {eyebrow ? <p className="eyebrow">{eyebrow}</p> : null}
      <h2>{title}</h2>
      {description ? <p className="section-heading__description">{description}</p> : null}
    </header>
  )
}
