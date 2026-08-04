# Portfólio de Pedro Gabriel

Portfólio profissional construído com React, TypeScript e Vite. O projeto apresenta perfil, serviços, trajetória, currículo e estudos de caso em rotas próprias, com conteúdo tipado e centralizado.

## Principais recursos

- Design responsivo, mobile first e preparado para telas amplas.
- Rotas para início, sobre, projetos, cada estudo de caso, currículo e erro 404.
- Pré-renderização das páginas públicas no build para melhorar indexação e carregamento inicial.
- Metadados por rota, canonical, Open Graph, Twitter Cards, JSON-LD, sitemap e robots.
- Navegação por teclado, skip link, foco visível, redução de movimento e menu móvel acessível.
- Currículo HTML imprimível e download do PDF preservado.
- Testes unitários, de componentes, acessibilidade e fluxos E2E.
- Cabeçalhos de segurança e fallback de rotas configurados para a Vercel.

## Requisitos

- Node.js 22.22.0 ou superior
- npm 11.3.0

O arquivo `.nvmrc` fixa a versão recomendada do Node.js para desenvolvimento e CI.

## Execução local

```bash
npm ci
npm run dev
```

O Vite exibirá o endereço local, normalmente `http://localhost:5173`.

## Scripts

| Comando | Finalidade |
| --- | --- |
| `npm run dev` | Inicia o servidor de desenvolvimento. |
| `npm run typecheck` | Valida os projetos TypeScript em modo estrito. |
| `npm run lint` | Executa o ESLint sem aceitar avisos. |
| `npm test` | Executa testes unitários e de componentes com Vitest. |
| `npm run test:coverage` | Gera cobertura de testes com V8. |
| `npm run test:e2e` | Executa os fluxos críticos com Playwright. |
| `npm run build` | Gera sitemap, bundle do cliente, SSR temporário e páginas pré-renderizadas. |
| `npm run preview` | Serve localmente o resultado de produção. |
| `npm run check` | Executa typecheck, lint, testes e build em sequência. |

## Arquitetura

```text
src/
├── components/    componentes de layout, UI, SEO e acessibilidade
├── content/       dados profissionais e editoriais tipados
├── pages/         páginas e estudos de caso
├── routes/        configuração das rotas e carregamento sob demanda
├── styles/        tokens e estilos globais responsivos
├── test/          configuração e testes Vitest
└── types/         contratos compartilhados
scripts/           geração de sitemap e pré-renderização
tests/e2e/         fluxos Playwright
```

O conteúdo profissional deve ser alterado em `src/content`. Isso evita duplicação entre a página Sobre, os projetos e o currículo HTML.

## Conteúdo e imagens

As imagens finais dos estudos de caso devem ser exportadas em WebP e colocadas em `src/assets/projects`, seguindo os nomes descritos no README dessa pasta. Enquanto os arquivos não existem, a interface exibe um fallback neutro e acessível.

A foto otimizada está em `src/assets/image/pedro.webp`. O currículo ATS 2026 está em `src/assets/documents/curriculo-pedro-gabriel.pdf`, e a página `/curriculo` replica seu conteúdo em uma versão HTML responsiva e imprimível.

## Variáveis de ambiente

O site funciona sem variáveis obrigatórias. Use `.env.example` como referência para valores públicos opcionais.

Variáveis com prefixo `VITE_` são incorporadas ao bundle do navegador e nunca devem conter tokens, senhas ou segredos. Integrações que exigirem credenciais devem passar por um backend ou função server-side.

## SEO e pré-renderização

`npm run build` gera HTML estático para todas as rotas públicas conhecidas. O sitemap é derivado da mesma lista de rotas em `src/content/seo.ts`, reduzindo divergências. Novos estudos de caso devem ser incluídos no conteúdo central e receber metadados próprios.

## Qualidade, acessibilidade e segurança

Antes de abrir um pull request, execute:

```bash
npm run check
npm run test:e2e
```

O projeto inclui testes com axe-core, mas ferramentas automatizadas não substituem a revisão por teclado, leitor de tela e contraste visual. Links externos usam `noopener noreferrer`; não há HTML arbitrário, analytics ou cookies de rastreamento.

O orçamento atual do bundle é:

- JavaScript inicial: até 100 kB gzip.
- CSS inicial: até 10 kB gzip.
- Cada imagem raster: alvo de até 200 kB.
- O currículo PDF é baixado sob demanda e não integra o bundle inicial.

## Deploy na Vercel

1. Importe o repositório na Vercel.
2. Use Node.js 22.22.0 ou superior.
3. Mantenha `npm run build` como Build Command e `dist` como Output Directory.
4. Faça o deploy primeiro em Preview.
5. Valide rotas diretas, metadados, sitemap, cabeçalhos e links externos antes de promover para produção.

`vercel.json` publica os arquivos pré-renderizados com URLs limpas. O build também emite `404.html`, usado pela Vercel como página de erro para caminhos que não correspondem a um arquivo estático.

## Integração contínua

O workflow em `.github/workflows/ci.yml` executa instalação reprodutível, typecheck, lint, testes, build e E2E. Nenhuma publicação automática foi configurada.

## Autor

Pedro Gabriel — [GitHub](https://github.com/pedrogles) · [LinkedIn](https://www.linkedin.com/in/pedrogles/)
