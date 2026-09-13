import { expect, test } from '@playwright/test'

test('navega pelas páginas principais e abre um estudo de caso sem erros de console', async ({ page }) => {
  const consoleErrors: string[] = []
  page.on('pageerror', (error) => consoleErrors.push(error.message))
  page.on('console', (message) => {
    if (message.type() === 'error') consoleErrors.push(message.text())
  })

  await page.goto('/')
  await expect(page.getByRole('heading', { level: 1 })).toContainText('Desenvolvedor de Software')
  await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1)
  await expect(page).toHaveTitle('Pedro Gabriel | Desenvolvedor de Software')

  await page.getByRole('link', { name: 'Ir para a página sobre Pedro' }).click()
  await expect(page).toHaveURL(/\/sobre$/)
  await expect(page.getByRole('heading', { level: 1 })).toBeVisible()

  await page.getByRole('link', { name: 'Ir para a página de projetos' }).click()
  await expect(page).toHaveURL(/\/projetos$/)
  await page.locator('a[href="/projetos/consulta-validacao-cadastral"]').click()
  await expect(page).toHaveURL(/\/projetos\/consulta-validacao-cadastral$/)
  await expect(page.getByRole('heading', { level: 1 })).toContainText('consulta e validação cadastral')

  await expect(page.getByRole('main')).not.toContainText('somente leitura')
  await page.goto('/curriculo')
  await expect(page.locator('.resume-header__role')).toHaveText('Desenvolvedor de Software')
  await expect(page.locator('.resume-toolbar')).toContainText('Currículo online atualizado')
  await expect(page.getByRole('main')).not.toContainText('somente leitura')
  expect(consoleErrors).toEqual([])
})

test('abre e fecha o menu móvel com botão e Escape', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 })
  await page.goto('/')
  const openButton = page.getByRole('button', { name: 'Abrir menu de navegação' })

  await openButton.click()
  await expect(page.getByRole('button', { name: 'Fechar menu de navegação' })).toHaveAttribute('aria-expanded', 'true')
  await page.keyboard.press('Escape')
  await expect(openButton).toBeFocused()
  await expect(openButton).toHaveAttribute('aria-expanded', 'false')
})

test('exibe 404 real para uma rota inválida', async ({ page }) => {
  await page.goto('/nao-existe')
  await expect(page.getByRole('heading', { level: 1, name: 'Página não encontrada' })).toBeVisible()
  await expect(page.locator('meta[name="robots"]')).toHaveAttribute('content', 'noindex, nofollow')
})

for (const [slug, type] of [
  ['consulta-validacao-cadastral', 'WebApplication'],
  ['pro-reforma', 'WebApplication'],
  ['converx', 'WebApplication'],
  ['bendita-beleza', 'WebSite'],
  ['informativo-tre-pb', 'CreativeWork'],
  ['portfolio-renato-cesar', 'CreativeWork'],
]) {
  test('valida JSON-LD e canonical do case ' + slug, async ({ page }) => {
    const errors: string[] = []
    page.on('pageerror', (error) => errors.push(error.message))
    page.on('console', (message) => { if (message.type() === 'error') errors.push(message.text()) })
    await page.goto('/projetos/' + slug)
    await expect(page.getByRole('heading', { level: 1 })).toHaveCount(1)
    const schema = JSON.parse(await page.locator('script[type="application/ld+json"]').innerText())
    expect(schema['@type']).toBe(type)
    expect(schema).not.toHaveProperty('author')
    if (type !== 'WebApplication') expect(schema).not.toHaveProperty('applicationCategory')
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute('href', 'https://pedrogles.vercel.app/projetos/' + slug)
    await expect(page.locator('meta[property="og:type"]')).toHaveAttribute('content', 'article')
    expect(errors).toEqual([])
  })
}
