# AXR Sistemas Empresariais

Base do site institucional em React, TypeScript, Vite, Tailwind CSS, React Router e Lucide React.

## Desenvolvimento local

Use Node.js 22 ou superior.

```bash
npm ci
npm run dev
```

## Verificação

```bash
npm run typecheck
npm run build
npm run preview
```

O build fica em `dist/`. O comando de build também gera HTML com metadados para as cinco rotas principais e para cada case publicado.

## Organização

- `src/config/site.ts`: identidade e canais oficiais de contato.
- `public/logo-tecnologico-axr.png`, `src/components/ui/BrandLogo.tsx` e `public/favicon.svg`: logo tecnológico fornecido para o site e ícone do navegador derivado do símbolo.
- `src/data/navigation.ts`: links principais.
- `src/components/layout`: cabeçalho, rodapé e layout compartilhado.
- `src/pages/Home`: Página Inicial completa, com seções institucionais, soluções, diferenciais, prévia do portfólio e contato.
- `src/pages/Services`: página de Serviços e componente para apresentar cada solução.
- `src/pages/Clients` e `src/pages/ProjectDetails`: portfólio, filtros e página individual dos cases.
- `src/pages/Institutional`: apresentação da empresa, missão, visão, valores e área de atendimento.
- `src/pages/Objectives`: objetivo principal, objetivos específicos e aplicações práticas.
- `src/data/home.ts`: textos e ícones dos serviços, diferenciais e abordagem apresentados na Página Inicial.
- `src/data/services.ts`: conteúdo dos cinco serviços e das seis etapas de trabalho.
- `src/data/institutional.ts`: descrição oficial da empresa e textos editoriais de missão, visão e valores.
- `src/data/objectives.ts`: objetivos da AXR e exemplos de aplicação em soluções empresariais.
- `src/data/portfolioPreviews.ts` e `src/components/ui/PortfolioPreviewCard.tsx`: identidade, texto e apresentação das quatro prévias visuais.
- `src/types/project.ts` e `src/data/projects.ts`: modelo tipado e cadastro dos projetos publicados.
- `src/config/seo.ts` e `src/hooks/usePageMeta.ts`: títulos, descrições e metadados sociais por rota.
- `src/utils/contact.ts`: link do WhatsApp com mensagem inicial e canais oficiais validados.
- `src/styles/index.css`: tokens visuais e estilos globais.
- `scripts/prepare-pages.mjs`: prepara HTML de cada rota e, quando há domínio confirmado, gera sitemap e robots.txt.
- `scripts/generate-portfolio-previews.mjs`: recria as imagens ilustrativas do portfólio em `public/portfolio/`.
- `public/_headers`: cabeçalhos de segurança para respostas estáticas do Cloudflare Pages.

O projeto usa React Router. O Cloudflare Pages trata caminhos sem arquivo correspondente como rotas da SPA quando não há um `404.html` no topo do build; por isso, não é necessário um redirecionamento geral em `_redirects`. O React mostra a página 404 para rotas desconhecidas. A resposta HTTP de um caminho desconhecido ainda pode ser `200` pelo fallback da SPA.

O WhatsApp comercial e o e-mail corporativo estão configurados em `src/config/site.ts`. O WhatsApp recebe a mensagem inicial definida no briefing. As redes sociais permanecem vazias até que seus links HTTPS oficiais sejam informados.

No checkout atual, `siteUrl` em `src/config/site.ts` está `null`. Configure a origem HTTPS definitiva quando ela estiver confirmada. O build passará a gerar URLs canônicas, `og:url`, `sitemap.xml` e `robots.txt`. Sem esse valor, esses arquivos e tags dependentes do domínio não são gerados. As cinco rotas principais têm HTML próprio com título, descrição e metadados sociais; o conteúdo dessas páginas continua renderizado no cliente. A resposta de uma rota desconhecida usa o HTML inicial da SPA, e o React aplica `noindex` após carregar. A imagem de compartilhamento social ainda depende de um recurso final aprovado.

Missão, visão e valores são propostas editoriais iniciais fornecidas no briefing. Revise esses textos em `src/data/institutional.ts` antes da publicação.

## Prévias visuais no portfólio

`src/data/portfolioPreviews.ts` apresenta AXR Fluxo, AXR Saldo, AXR Visitas e AXR Motos, cada um com uma breve descrição abaixo da imagem. As quatro prévias aparecem em `/clientes`; as duas primeiras também aparecem na Página Inicial. Os nomes, logos e cores são identidades demonstrativas próprias da vitrine.

As imagens em `public/portfolio/` foram reconstruídas com base nas capturas fornecidas: quadro de tarefas, painel financeiro, calculadora de orçamento e vitrine de motos. Elas **não são as capturas originais**. Nomes de pessoas e clientes, e-mails, links, contas e valores financeiros das referências não foram copiados. O conteúdo visível usa exemplos ou valores demonstrativos; a imagem financeira indica isso dentro da própria tela.

Para recriar as imagens, execute `node scripts/generate-portfolio-previews.mjs`. A foto demonstrativa da moto usada na composição fica em `assets/portfolio/moto-demo.jpg`. Antes de publicar uma nova versão das prévias, confira os SVGs gerados para evitar dados identificáveis. As prévias não criam páginas individuais de case.

## Cadastrar um projeto no portfólio

Adicione uma entrada real em `src/data/projects.ts` seguindo o tipo `Project`. Use apenas informações e imagens autorizadas para divulgação pública, com arquivos locais otimizados em `public/`. Preencha `approvedForPublication: true` somente após conferir nome do cliente, logo, telas, descrições e resultados. O campo `status` deve refletir o estágio real do projeto. A galeria contém imagens adicionais à capa. As prévias ilustrativas atuais ficam separadas dos cases reais e não criam páginas individuais de projeto.

## Deploy no Cloudflare Pages

1. Revise os textos institucionais, cadastre apenas projetos aprovados e preencha os canais oficiais em `src/config/site.ts`.
2. Confirme o domínio final e ajuste `siteUrl`. Se usar primeiro o subdomínio `pages.dev`, é possível preenchê-lo após o primeiro deploy e publicar uma nova versão.
3. Rode `npm ci`, `npm run typecheck` e `npm run build`. Confira as páginas com `npm run preview` antes de publicar.
4. O remote `origin` deste checkout já aponta para `https://github.com/ThuroSouza/vitrine-axr.git`. Revise as alterações e faça commit/push somente quando decidir publicar.
5. Na integração do Cloudflare Pages, confira a branch de produção, o comando de build `npm run build` e a pasta de saída `dist`.
6. Após o deploy, confira diretamente `/`, `/servicos`, `/clientes`, `/institucional`, `/objetivos`, o menu móvel, as chamadas para contato, os metadados e os cabeçalhos de segurança.

O arquivo `public/_headers` é copiado para `dist/` e aplicado pelo Cloudflare Pages às respostas estáticas. O deploy não é executado por este projeto automaticamente.

Referências: [guia React no Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-a-react-site/), [roteamento SPA](https://developers.cloudflare.com/pages/configuration/serving-pages/) e [cabeçalhos personalizados](https://developers.cloudflare.com/pages/configuration/headers/).
