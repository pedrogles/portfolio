interface TechnologyListProps {
  readonly technologies: readonly string[]
  readonly ariaLabel?: string
}

export function TechnologyList({
  technologies,
  ariaLabel = 'Tecnologias utilizadas',
}: TechnologyListProps) {
  return (
    <ul aria-label={ariaLabel} className="technology-list">
      {technologies.map((technology) => (
        <li key={technology}>{technology}</li>
      ))}
    </ul>
  )
}
