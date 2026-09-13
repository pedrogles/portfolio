import axe from 'axe-core'
import { fireEvent, render, screen, waitFor, within } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import { describe, expect, it } from 'vitest'
import { renderSeoHead } from '../components/seo/Seo'
import { ImageWithFallback } from '../components/ui/ImageWithFallback/ImageWithFallback'
import { personSchema, projectSchema, seoForPath } from '../content/seo'
import { projects } from '../content/projects'
import { skills } from '../content/skills'
import { services } from '../content/services'
import { profile } from '../content/profile'
import { resumeContent } from '../content/resume'
import { renderApp } from './render-app'

describe('portfólio', () => {
  it('renderiza a Home com um único H1 e os projetos em destaque', async () => {
    renderApp()

    expect(await screen.findByRole('heading', {
      level: 1,
      name: /desenvolvedor de software para aplicações web, dados e integrações/i,
    })).toBeInTheDocument()
    expect(document.querySelectorAll('h1')).toHaveLength(1)
    expect(screen.getAllByText('Ver estudo de caso')).toHaveLength(4)
  })

  it.each([
    ['/sobre', /desenvolvimento de software com base técnica/i],
    ['/projetos', /aplicações, interfaces e experiências digitais/i],
    ['/curriculo', /pedro gabriel lima e silva/i],
  ])('mantém um H1 na rota %s', async (path, headingName) => {
    renderApp(path)

    expect(await screen.findByRole('heading', { level: 1, name: headingName })).toBeInTheDocument()
    expect(document.querySelectorAll('h1')).toHaveLength(1)
  })

  it('identifica a rota ativa semanticamente', async () => {
    renderApp('/projetos')

    const projectsLink = await screen.findByRole('link', { name: 'Ir para a página de projetos' })
    expect(projectsLink).toHaveAttribute('aria-current', 'page')
  })

  it('abre e fecha o menu móvel pelo botão', async () => {
    const user = userEvent.setup()
    renderApp()
    const button = screen.getByRole('button', { name: 'Abrir menu de navegação' })

    await user.click(button)
    expect(button).toHaveAttribute('aria-expanded', 'true')
    expect(await screen.findByRole('link', { name: 'Ir para a página inicial' })).toHaveFocus()

    await user.click(screen.getByRole('button', { name: 'Fechar menu de navegação' }))
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('fecha o menu por Escape e devolve o foco ao botão', async () => {
    const user = userEvent.setup()
    renderApp()
    const button = screen.getByRole('button', { name: 'Abrir menu de navegação' })

    await user.click(button)
    await user.keyboard('{Escape}')

    await waitFor(() => expect(button).toHaveFocus())
    expect(button).toHaveAttribute('aria-expanded', 'false')
  })

  it('oferece skip link como primeiro destino de teclado', async () => {
    const user = userEvent.setup()
    renderApp()

    await screen.findByRole('heading', { level: 1 })
    if (document.activeElement instanceof HTMLElement) document.activeElement.blur()
    await user.tab()
    expect(screen.getByRole('link', { name: 'Ir para o conteúdo' })).toHaveFocus()
  })

  it('renderiza uma página 404 real', async () => {
    renderApp('/rota-inexistente')

    expect(await screen.findByRole('heading', { level: 1, name: 'Página não encontrada' })).toBeInTheDocument()
    expect(document.querySelector('meta[name="robots"]')).toHaveAttribute('content', 'noindex, nofollow')
  })

  it('mantém links externos protegidos e identificados', async () => {
    renderApp('/projetos')
    const [link] = await screen.findAllByRole('link', { name: /ver projeto.*abre em nova guia/i })

    expect(link).toHaveAttribute('target', '_blank')
    expect(link).toHaveAttribute('rel', 'noopener noreferrer')
  })

  it('troca uma imagem com erro por fallback acessível', () => {
    render(
      <ImageWithFallback
        alt="Imagem de teste"
        fallbackLabel="Imagem de teste indisponível"
        height={90}
        src="/nao-existe.webp"
        width={160}
      />,
    )

    fireEvent.error(screen.getByRole('img', { name: 'Imagem de teste' }))
    expect(screen.getByRole('img', { name: 'Imagem de teste indisponível' })).toBeInTheDocument()
  })

  it('trata o currículo existente sem chamá-lo de portfólio', async () => {
    renderApp('/curriculo')

    const main = await screen.findByRole('main')
    expect(within(main).getByRole('link', { name: 'Baixar currículo em PDF' })).toHaveAttribute('download', 'Curriculo_Pedro_Gabriel_ATS_2026.pdf')
    expect(within(main).queryByText(/portfolio em pdf/i)).not.toBeInTheDocument()
  })

  it('apresenta o currículo online atualizado e mantém o PDF separado', async () => {
    renderApp('/curriculo')

    const main = await screen.findByRole('main')
    expect(within(main).getByRole('link', { name: '+55 (83) 99608-2302' })).toHaveAttribute('href', 'tel:+5583996082302')
    expect(within(main).getByRole('heading', { name: 'Competências técnicas' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: /Medical Appointments System/i })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Idiomas' })).toBeInTheDocument()
    expect(within(main).getByText('Intermediário (B1)')).toBeInTheDocument()
    expect(within(main).getByText('Desenvolvedor de Software')).toBeInTheDocument()
    expect(within(main).getByText(/Currículo online atualizado.*PDF ATS 2026.*separadamente/)).toBeInTheDocument()
    expect(main).not.toHaveTextContent(/somente leitura/i)
    expect(within(main).getByText(/mural de inspiração/i)).toBeInTheDocument()
  })

  it('aplica os metadados principais da rota', async () => {
    renderApp('/sobre')

    await screen.findByRole('heading', { level: 1 })
    await waitFor(() => expect(document.title).toBe('Sobre Pedro Gabriel | Desenvolvedor de Software'))
    expect(document.querySelector('link[rel="canonical"]')).toHaveAttribute('href', 'https://pedrogles.vercel.app/sobre')
    expect(document.querySelector('meta[property="og:title"]')).toHaveAttribute('content', 'Sobre Pedro Gabriel | Desenvolvedor de Software')
  })

  it.each([
    ['/', '/'],
    ['/sobre', '/sobre'],
    ['/projetos', '/projetos'],
    ['/curriculo', '/curriculo'],
    ['/projetos/converx', '/projetos/converx'],
    ['/desconhecida', '/404'],
  ])('gera SEO pré-renderizado para %s', (path, canonicalPath) => {
    const result = seoForPath(path)
    expect(result.config.path).toBe(canonicalPath)
  })


  it('preserva Front-end como especialidade e IA apenas como direção profissional', async () => {
    renderApp('/sobre')
    const main = await screen.findByRole('main')
    expect(within(main).getByRole('heading', { name: 'Front-end' })).toBeInTheDocument()
    expect(within(main).getByRole('heading', { name: 'Dados e Integrações' })).toBeInTheDocument()
    expect(main).toHaveTextContent(/direção de desenvolvimento profissional.*arquitetura de soluções de IA/)
    expect(JSON.stringify([skills, resumeContent.competencyGroups, services])).not.toMatch(/\b(IA|LLM|RAG|Agentes)\b/i)
    expect(profile.role).toBe('Desenvolvedor de Software')
    expect(personSchema).toMatchObject({ '@type': 'Person', jobTitle: 'Desenvolvedor de Software' })
    expect(personSchema).toHaveProperty('knowsAbout', expect.arrayContaining(['Front-end', 'Angular', 'React']))
  })

  it('apresenta as três frentes de serviços aprovadas', async () => {
    renderApp()
    await screen.findByRole('heading', { level: 1 })
    for (const name of ['Aplicações Web', 'Dados e Integrações', 'Arquitetura e Evolução']) {
      expect(screen.getByRole('heading', { name })).toBeInTheDocument()
    }
    expect(services).toHaveLength(3)
  })

  it('apresenta REURB como principal case com responsabilidade técnica e conteúdo conceitual', () => {
    const reurb = projects[0]!
    expect(reurb.slug).toBe('consulta-validacao-cadastral')
    expect(reurb.category).toBe('featured')
    expect(reurb.responsibilities.join(' ')).toMatch(/Responsável técnico pela frente de TI/)
    expect(reurb.outcome).toMatch(/consulta, revisão e validação/)
    expect(reurb.solution).toMatch(/Pipelines de importação/)
    expect(JSON.stringify([reurb, resumeContent.experiences[0], resumeContent.projects[0]]))
      .not.toMatch(/somente leitura|\bRPC|\bCPF|migrations|grants|security advisor|https?:/i)
  })

  it.each([
    ['consulta-validacao-cadastral', 'WebApplication'],
    ['pro-reforma', 'WebApplication'],
    ['converx', 'WebApplication'],
    ['bendita-beleza', 'WebSite'],
    ['informativo-tre-pb', 'CreativeWork'],
    ['portfolio-renato-cesar', 'CreativeWork'],
  ])('gera schema e metadados semanticamente corretos para %s', (slug, type) => {
    const project = projects.find((item) => item.slug === slug)!
    const schema = projectSchema(project)
    expect(schema).toMatchObject({ '@type': type, url: 'https://pedrogles.vercel.app/projetos/' + slug })
    expect(schema).not.toHaveProperty('author')
    if (type !== 'WebApplication') expect(schema).not.toHaveProperty('applicationCategory')
    const result = seoForPath('/projetos/' + slug)
    expect(result.jsonLd).toEqual([schema])
    expect(result.config).toMatchObject({ path: '/projetos/' + slug, type: 'article' })
  })


  it.each([
    'consulta-validacao-cadastral',
    'pro-reforma',
    'converx',
    'bendita-beleza',
    'informativo-tre-pb',
    'portfolio-renato-cesar',
  ])('preserva a mídia canônica no card de %s', async (slug) => {
    const project = projects.find((item) => item.slug === slug)!
    expect(project.image).toEqual(expect.any(String))
    expect(project.imageAlt?.trim()).toBeTruthy()
    renderApp('/projetos')
    const heading = await screen.findByRole('heading', { name: project.title })
    const card = heading.closest('article')!
    const media = within(card).getByRole('img', { name: project.imageAlt })
    expect(media.tagName).toBe('IMG')
    expect(media).toHaveAttribute('src', project.image)
    fireEvent.load(media)
    expect(within(card).queryByText('Prévia visual em preparação')).not.toBeInTheDocument()
    expect(within(card).queryByRole('status')).not.toBeInTheDocument()
  })

  it('preserva tecnologias relevantes nas cinco experiências', async () => {
    renderApp('/sobre')
    await screen.findByRole('heading', { level: 1 })
    for (const [organization, technologies] of [
      ['Projeto de Regularização Fundiária Urbana (REURB)', ['Angular', 'TypeScript', 'Tailwind CSS', 'Supabase', 'PostgreSQL', 'Git', 'Vercel']],
      ['iUUL / Pró-Reforma', ['Angular', 'TypeScript', 'RxJS', 'PrimeNG', 'Angular Material', 'SCSS']],
      ['Go Beesiness', ['React', 'TypeScript', 'Figma', 'REST APIs']],
      ['Tribunal Regional Eleitoral da Paraíba', ['Figma', 'CSS', 'HTML']],
      ['UNIESP Centro Universitário', ['Hardware', 'Software', 'Suporte Técnico']],
    ] as const) {
      const entry = screen.getByText(organization, { selector: '.timeline__organization' }).closest('article')!
      for (const technology of technologies) {
        expect(within(within(entry).getByRole('list', { name: 'Tecnologias utilizadas' })).getByText(technology, { exact: true })).toBeInTheDocument()
      }
    }
  })

  it('escapa conteúdo dinâmico ao serializar o head', () => {
    const head = renderSeoHead(
      { title: '<img src=x>', description: 'A&B', path: '/seguranca' },
      [{ '@context': 'https://schema.org', name: '</script><script>alert(1)</script>' }],
    )

    expect(head).toContain('&lt;img src=x&gt;')
    expect(head).toContain('A&amp;B')
    expect(head).not.toContain('</script><script>alert(1)</script>')
    expect(head).toContain('\\u003c/script>')
  })

  it('não apresenta violações críticas conhecidas do axe na Home', async () => {
    const { container } = renderApp()
    await screen.findByRole('heading', { level: 1 })

    const result = await axe.run(container, { rules: { 'color-contrast': { enabled: false } } })
    const criticalViolations = result.violations.filter((violation) => violation.impact === 'critical')
    expect(criticalViolations).toEqual([])
  })
})
