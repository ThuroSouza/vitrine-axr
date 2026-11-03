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

- `src/config/site.ts`: identidade e canais oficiais de contato. Os canais começam vazios para evitar dados fictícios.
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
- `src/types/project.ts` e `src/data/projects.ts`: modelo tipado e cadastro dos projetos publicados.
- `src/config/seo.ts` e `src/hooks/usePageMeta.ts`: títulos, descrições e metadados sociais por rota.
- `src/utils/contact.ts`: link do WhatsApp com mensagem inicial e canais oficiais validados.
- `src/styles/index.css`: tokens visuais e estilos globais.
- `scripts/prepare-pages.mjs`: prepara HTML de cada rota e, quando há domínio confirmado, gera sitemap e robots.txt.
- `public/_headers`: cabeçalhos de segurança para respostas estáticas do Cloudflare Pages.

O projeto usa React Router. O Cloudflare Pages trata caminhos sem arquivo correspondente como rotas da SPA quando não há um `404.html` no topo do build; por isso, não é necessário um redirecionamento geral em `_redirects`. O React mostra a página 404 para rotas desconhecidas. A resposta HTTP de um caminho desconhecido ainda pode ser `200` pelo fallback da SPA.

Os canais de contato permanecem vazios em `src/config/site.ts`. Para ativá-los, informe o WhatsApp comercial com código do país, o e-mail corporativo e os links HTTPS das redes sociais oficiais. O WhatsApp recebe a mensagem inicial definida no briefing. Sem canais diretos, a Página Inicial informa a pendência e não apresenta botões de envio sem destino.

Configure `siteUrl` em `src/config/site.ts` com a origem HTTPS final, por exemplo `https://seudominio.com`, quando ela estiver confirmada. O build passará a gerar URLs canônicas, `og:url`, `sitemap.xml` e `robots.txt`. Sem esse valor, esses arquivos e tags dependentes do domínio não são gerados. As cinco rotas principais têm HTML próprio com título, descrição e metadados sociais; o conteúdo dessas páginas continua renderizado no cliente. A resposta de uma rota desconhecida usa o HTML inicial da SPA, e o React aplica `noindex` após carregar. A imagem de compartilhamento social ainda depende de um recurso final aprovado.

Missão, visão e valores são propostas editoriais iniciais fornecidas no briefing. Revise esses textos em `src/data/institutional.ts` antes da publicação.

## Cadastrar um projeto no portfólio

Adicione uma entrada real em `src/data/projects.ts` seguindo o tipo `Project`. Use apenas informações e imagens autorizadas para divulgação pública, com arquivos locais otimizados em `public/`. Preencha `approvedForPublication: true` somente após conferir nome do cliente, logo, telas, descrições e resultados. O campo `status` deve refletir o estágio real do projeto. A galeria contém imagens adicionais à capa. Sem projetos aprovados, o site mostra um estado vazio e não publica cases fictícios.

## Deploy no Cloudflare Pages

1. Revise os textos institucionais, cadastre apenas projetos aprovados e preencha os canais oficiais em `src/config/site.ts`.
2. Confirme o domínio final e ajuste `siteUrl`. Se usar primeiro o subdomínio `pages.dev`, é possível preenchê-lo após o primeiro deploy e publicar uma nova versão.
3. Rode `npm ci`, `npm run typecheck` e `npm run build`. Confira as páginas com `npm run preview` antes de publicar.
4. Envie o repositório a um GitHub autorizado e conecte-o ao Cloudflare Pages.
5. Configure a branch de produção, o comando de build `npm run build` e a pasta de saída `dist`.
6. Após o deploy, confira diretamente `/`, `/servicos`, `/clientes`, `/institucional`, `/objetivos`, o menu móvel, as chamadas para contato, os metadados e os cabeçalhos de segurança.

O arquivo `public/_headers` é copiado para `dist/` e aplicado pelo Cloudflare Pages às respostas estáticas. O deploy não é executado por este projeto automaticamente.

Referências: [guia React no Cloudflare Pages](https://developers.cloudflare.com/pages/framework-guides/deploy-a-react-site/), [roteamento SPA](https://developers.cloudflare.com/pages/configuration/serving-pages/) e [cabeçalhos personalizados](https://developers.cloudflare.com/pages/configuration/headers/).
