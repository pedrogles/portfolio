# Auditoria diferencial de preservação

Data: 2026-09-13. Branch: `feat/software-developer-positioning`.
HEAD antes da correção: `9fe94abf479c30238d30cb078c93a5763aa721ef`.
Base local `main`: `b2a3e514873bab4d13a3c8818bc39c7c53bdc722`.

## Causa e referências

O diff `main...9fe94ab` não removeu imports de imagens nem highlights. O commit
`a0ed232` adicionou três mídias e quatro listas de highlights em outra linha de
histórico, integrada a `dev` por `7f317ba`, mas ausente de `main` e desta branch.
Usar somente `main` como baseline não detectava a perda em relação à versão já
conhecida pelo usuário. A inspeção visual de `main` confirmou seis cards sem
imagens e somente uma experiência com tags.

Os vínculos de Renato César, Converx e Bendita Beleza foram encontrados em
`8488e10^:src/pages/ProjectsPage/components/ProjectsSection/ProjectsSection.jsx`.
Já estavam ausentes do conteúdo modernizado em `main`. Os SVG permaneciam no checkout.

## Classificação das diferenças

| Categoria | Diferenças e tratamento |
| --- | --- |
| EXPECTED_CHANGE | Cargo, narrativa, textos de Home/Sobre/Projetos/Header/Footer/manifest, SEO, Person, aprofundamento conceitual do REURB, três serviços, headline/resumo/REURB no currículo, novos schemas e renomeação de categoria de skills: mantidos. |
| NECESSARY_SUPPORT_CHANGE | Union types de `Project.schemaType` e categoria de skills, consumidor About, seleção condicional de propriedades JSON-LD e testes correspondentes: mantidos. Imports de mídia e testes de preservação suportam esta correção. |
| UNINTENDED_REGRESSION | Mural de inspiração de Pró-Reforma removido do currículo na feature sem conflito com o reposicionamento: referência restaurada. |
| UNINTENDED_REGRESSION (baseline histórico) | Três WebP e quatro listas de highlights ficaram fora da branch por diferença de base; três identidades SVG perderam vínculo na modernização anterior. Restaurados conforme evidências, sem atribuir essas remoções ao diff da feature. |
| UNCERTAIN | Incorporação dos ajustes de títulos dos commits `00df093` e `4ed2e91`: existem em outras branches, não em `main`; sua inclusão nesta frente não foi estabelecida. CSS não alterado. Exigem decisão de integração separada se essa outra branch for o baseline visual desejado. |

## Projetos: mídia encontrada e vinculada

| Projeto | Asset | Origem | Resultado |
| --- | --- | --- | --- |
| REURB | `src/assets/projects/reurb-validacao.webp` | `a0ed232` | WebP recuperado byte a byte, import e alt restaurados. |
| Pró-Reforma | `src/assets/projects/pro-reforma.webp` | `a0ed232` | WebP recuperado byte a byte, import e alt restaurados. |
| Informativo TRE-PB | `src/assets/projects/informativo-tre.webp` | `a0ed232` | WebP recuperado byte a byte, import e alt restaurados. |
| Portfólio Renato César | `src/assets/logo/rcc.svg` | Componente legado | SVG existente vinculado como identidade visual, com alt correspondente. |
| Converx | `src/assets/logo/converx.svg` | Componente legado | Logotipo existente vinculado; nenhum screenshot criado. |
| Bendita Beleza | `src/assets/logo/rv.svg` | Componente legado | Identidade existente vinculada; nenhum screenshot criado. |

Nenhum dos seis cards precisa de placeholder com os assets atuais carregados.
Os SVG não são apresentados como screenshots. A imagem histórica do REURB foi
preservada sem edição; retrata uma tela de consulta com exemplos e não documenta
todos os fluxos atuais de revisão/validação. Não foi usada para afirmar métricas.

Todos os projetos foram comparados campo a campo: `slug`, `title`, `cardTitle`,
`image`, `imageAlt`, `summary`, `category`, `technologies`, `responsibilities`,
`context`, `problem`, `solution`, `challenges`, `outcome`, `links` e `schemaType`.
Slugs, títulos, ordem, categorias, tecnologias e links permanecem iguais a `main`.
`cardTitle` estava ausente e continua ausente. As diferenças narrativas são as
aprovadas; detalhes operacionais do REURB permanecem abstraídos por confidencialidade.
Os cinco links externos existentes continuam idênticos; REURB continua sem link externo.

## Experiências, currículo e skills

- REURB: restaurados Angular, TypeScript, Tailwind CSS, Supabase, PostgreSQL, Git e Vercel.
- Pró-Reforma: preservados Angular, TypeScript, RxJS, PrimeNG, Angular Material e SCSS.
- Go Beesiness: restaurados React, TypeScript, Figma e REST APIs.
- TRE-PB: restaurados Figma, CSS e HTML.
- UNIESP: restaurados Hardware, Software e Suporte Técnico.

As cinco listas correspondem integralmente a `a0ed232`. Organizações, períodos,
ordem e cargos históricos foram preservados. Apenas título/descrição do REURB
mantêm o reposicionamento aprovado.

Currículo: mesmos cinco registros de experiência, quatro projetos selecionados,
links, períodos, contatos, formação acadêmica/complementar, idiomas e ferramentas.
Itens das quatro categorias de competências preservados. O mural de inspiração
foi reinserido sem perder materiais, preços, planejamento e orçamento.
Skills: 20 nomes, mesma ordem; apenas `Dados e APIs` virou `Dados e Integrações`.

## Estrutura e validação

ProjectCard, ImageWithFallback, TechnologyList, ServiceCard, timeline, layouts,
CSS e Router não foram alterados nesta correção. Links e CTAs não foram alterados.
PDF, SVG existentes, configurações Vercel/CI, dependências e lockfile preservados.

- `npm run check`: PASS; 38 testes, typecheck, lint e build/prerender.
- `npm run test:e2e`: PASS; 10 testes, incluindo carga real das seis mídias em cards/cases.
- Inspeção visual: Home com quatro mídias; Projetos com seis; Sobre com cinco listas de tags; currículo com competências, experiências, quatro projetos, formação e idiomas.
- Desktop 1440px e mobile 390px: quatro páginas inspecionadas, sem overflow horizontal ou erros de página.
- Comparação visual com `main` executada com servidor temporário lendo fontes do Git, sem checkout ou modificação dos arquivos da base.
- Capturas locais de auditoria em `tmp/preservation-review/` (ignoradas pelo Git).

Os testes novos verificam mídia/alt no card, saída do estado de carregamento,
ausência de fallback indevido, carga real no navegador, tags semanticamente
relevantes nas cinco experiências e preservação do mural no currículo. Não há
snapshot massivo nem teste frágil de existência física dos assets.

Esta correção não executa push, PR, merge ou deploy. A autorização anterior de
push permanece revogada; o próximo gate é o novo review da branch corrigida.
