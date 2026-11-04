import { mkdir, readFile, writeFile } from 'node:fs/promises'
import { fileURLToPath } from 'node:url'
import path from 'node:path'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const output = path.join(root, 'public/portfolio')
await mkdir(output, { recursive: true })

const esc = (value) => String(value).replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;')
const rect = (x, y, w, h, fill, rx = 0, stroke = 'none') => `<rect x="${x}" y="${y}" width="${w}" height="${h}" rx="${rx}" fill="${fill}" stroke="${stroke}"/>`
const line = (x1, y1, x2, y2, stroke, width = 2) => `<path d="M${x1} ${y1}L${x2} ${y2}" stroke="${stroke}" stroke-width="${width}" fill="none"/>`
const label = (x, y, value, size = 18, color = '#F8FAFC', weight = 500) => `<text x="${x}" y="${y}" fill="${color}" font-family="Inter,Arial,sans-serif" font-size="${size}" font-weight="${weight}">${esc(value)}</text>`
const circle = (x, y, r, fill, stroke = 'none', width = 1) => `<circle cx="${x}" cy="${y}" r="${r}" fill="${fill}" stroke="${stroke}" stroke-width="${width}"/>`

const themes = {
  fluxo: { name: 'AXR Fluxo', bg: '#0B1830', surface: '#102344', panel: '#162D53', primary: '#2F6BFF', accent: '#4DE1D1', muted: '#A7BDDA' },
  saldo: { name: 'AXR Saldo', bg: '#08251F', surface: '#0D332A', panel: '#144438', primary: '#137C61', accent: '#B9F36C', muted: '#A8C9BD' },
  visitas: { name: 'AXR Visitas', bg: '#211833', surface: '#2D2045', panel: '#3C2B59', primary: '#7C4DCC', accent: '#FFB86B', muted: '#C8B9DD' },
  motos: { name: 'AXR Motos', bg: '#181B20', surface: '#22262D', panel: '#30353D', primary: '#E85D2A', accent: '#F5B84B', muted: '#B8BFC9' },
}

const fluxo = themes.fluxo
const saldo = themes.saldo
const visitas = themes.visitas
const motos = themes.motos
const photo = (await readFile(path.join(root, 'assets/portfolio/moto-demo.jpg'))).toString('base64')

function screenshot(name, background, content) {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720" role="img" aria-label="Prévia ilustrativa ${name}">${rect(0, 0, 1280, 720, background)}${content}</svg>`
}

function taskflowPreview() {
  const blue = fluxo.primary
  let content = `${rect(0, 0, 178, 720, '#F7FAFD')}${line(178, 0, 178, 720, '#D5DFEA', 1)}`
  content += `${rect(19, 17, 38, 38, blue, 9)}${circle(30, 36, 4, fluxo.accent)}${circle(46, 36, 4, fluxo.accent)}${line(30, 36, 46, 36, '#FFFFFF', 3)}${label(66, 43, 'AXR Fluxo', 20, '#153052', 700)}`
  ;['Painel', 'Minhas Tarefas', 'Conversas', 'Obrigações', 'Reuniões', 'Clientes', 'CRM', 'Relatórios', 'Agenda', 'Portal', 'Configurações'].forEach((name, index) => {
    const y = 97 + index * 49
    if (index === 1) content += rect(7, y - 23, 163, 39, '#DDE9F9', 19, '#2F6BFF')
    content += `${circle(28, y - 3, 5, index === 1 ? blue : '#8598B2')}${label(43, y + 2, name, 13, index === 1 ? '#173968' : '#47607E', index === 1 ? 700 : 500)}`
  })
  content += `${line(0, 655, 178, 655, '#D5DFEA', 1)}${circle(28, 682, 11, '#D9E7F7')}${label(47, 687, 'Usuário demo', 12, '#45607E', 600)}`
  content += `${rect(178, 0, 1102, 720, '#F1F5F9')}${rect(178, 0, 1102, 41, '#F8FBFD')}${line(178, 41, 1280, 41, '#D5DFEA', 1)}${rect(1033, 9, 106, 24, '#E6F9F0', 12, '#58C893')}${label(1048, 26, 'Versão atual', 11, '#167453', 700)}${label(1164, 26, 'Operação', 12, '#18314F', 600)}`
  content += `${circle(202, 65, 5, blue)}${label(215, 70, 'Em andamento', 16, '#1A2A44', 700)}${rect(345, 53, 28, 22, '#D9E5F8', 11)}${label(354, 68, '4', 12, '#244E88', 700)}${label(1244, 70, '+', 23, '#314D70')}${rect(190, 86, 1075, 588, '#F5F8FC', 12)}${rect(190, 86, 4, 588, blue, 2)}`
  const cards = [
    { project: 'PROJETO EXEMPLO A', title: 'Revisar conteúdo', tag: 'TAREFA', progress: '2/3', accent: '#2F6BFF', y: 157 },
    { project: 'PROJETO EXEMPLO B', title: 'Preparar apresentação', tag: 'MATERIAL', progress: '1/2', accent: '#1686AD', y: 157 },
    { project: 'PROJETO EXEMPLO C', title: 'Conferir proposta', tag: 'REVISÃO', progress: '2/2', accent: '#0E7490', y: 157 },
    { project: 'PROJETO EXEMPLO D', title: 'Validar entrega', tag: 'TAREFA', progress: '1/3', accent: '#1D4ED8', y: 157 },
  ]
  cards.forEach((card, index) => {
    const x = 203 + index * 265
    content += `${rect(x, 101, 251, 541, '#FFFFFF', 10, '#C8D5E3')}${rect(x, 101, 251, 26, card.accent, 10)}${rect(x, 117, 251, 10, card.accent)}${label(x + 12, 119, card.project, 10, '#FFFFFF', 700)}${label(x + 12, 151, card.title, 14, '#16283F', 700)}`
    content += `${rect(x + 12, 172, 75, 23, '#DDEAFF', 12)}${label(x + 22, 188, card.tag, 10, '#1E5AB8', 700)}${label(x + 12, 224, 'Descrição da atividade', 11, '#71839B')}${line(x + 12, 245, x + 239, 245, '#DDE5EE', 1)}`
    content += `${rect(x + 12, 257, 227, 177, '#F8FAFC', 9, '#D6E0EB')}${label(x + 22, 279, 'Subtarefas', 12, '#18314F', 700)}${label(x + 210, 279, card.progress, 10, '#6E8097')}`
    ;['Planejar etapa', 'Executar atividade', 'Conferir resultado'].forEach((item, row) => {
      const y = 302 + row * 40
      if (row === 1) content += rect(x + 19, y - 13, 212, 36, '#E4F9F2', 5, '#A9E5D3')
      content += `${rect(x + 25, y - 3, 12, 12, row === 1 ? '#1F6D79' : '#FFFFFF', 3, '#9CB0C6')}${label(x + 44, y + 8, item, 11, '#243953', row === 1 ? 600 : 400)}`
    })
    content += `${label(x + 13, 458, '+ Adicionar subtarefa', 10, '#7D8FA4')}${rect(x + 12, 480, 227, 42, '#F0F5FC', 6)}${label(x + 23, 498, 'Anexo demonstrativo', 11, '#315A8A', 600)}${label(x + 23, 515, 'Sem dados de clientes', 9, '#8092A8')}`
    content += `${rect(x + 12, 538, 128, 25, index === 0 ? '#E8F7F0' : '#EAF0FC', 12)}${label(x + 25, 555, index === 0 ? 'Prazo: hoje' : 'Prazo: esta semana', 10, index === 0 ? '#137C61' : '#315DC6', 700)}${line(x + 12, 580, x + 239, 580, '#E2E9F1', 1)}${label(x + 15, 604, 'Colaboradores', 10, '#607791')}${label(x + 15, 625, 'Conversa', 10, '#607791')}`
  })
  content += `${circle(202, 697, 5, '#6B45C9')}${label(215, 703, 'Em revisão', 15, '#253752', 700)}`
  return screenshot('AXR Fluxo', '#F1F5F9', content)
}

function visitasReferencePreview() {
  let content = `${rect(0, 0, 244, 720, '#30204A')}${rect(18, 20, 52, 52, visitas.primary, 12)}${circle(44, 46, 14, 'none', visitas.accent, 4)}${circle(44, 46, 4, visitas.accent)}${label(82, 51, 'AXR Visitas', 23, '#FFFFFF', 700)}${label(82, 67, 'Visitas e orçamentos', 10, '#C9B7E0')}`
  ;['Calculadora', 'Orçamentos', 'Produtos', 'Clientes', 'Visitas', 'Descontos', 'Condições', 'Frete', 'Relatórios', 'Atualizações'].forEach((name, index) => {
    const y = 120 + index * 43
    if (index === 0) content += rect(8, y - 22, 224, 37, '#594080', 6)
    content += `${rect(8, y - 22, index === 0 ? 4 : 0, 37, visitas.accent, 2)}${label(20, y + 3, name, 14, index === 0 ? '#FFFFFF' : '#D8CAE8', index === 0 ? 700 : 500)}`
  })
  content += `${line(8, 651, 232, 651, '#695482', 1)}${label(26, 681, 'Usuário demonstrativo', 11, '#D8CAE8', 600)}`
  content += `${rect(244, 0, 1036, 720, '#F8F6FB')}${rect(244, 0, 1036, 59, '#FFFFFF')}${line(244, 59, 1280, 59, '#E4DBEC', 1)}${label(274, 39, 'Calculadora', 24, '#2F2344', 700)}`
  content += `${label(274, 95, 'Monte o pedido produto a produto. Os valores são recalculados na hora,', 14, '#6E627A')}${label(274, 117, 'conforme as condições comerciais.', 14, '#6E627A')}`
  content += `${rect(274, 139, 687, 123, '#FFFFFF', 10, '#DED4E7')}${label(294, 169, 'Cliente', 18, '#2F2344', 700)}${label(294, 196, 'Cliente do orçamento (opcional)', 12, '#3E324F', 600)}${rect(294, 205, 647, 37, '#FFFFFF', 6, '#C9BBD5')}${label(307, 230, 'Sem cliente vinculado', 13, '#655972')}${label(919, 229, '⌄', 18, '#7C4DCC')}`
  content += `${rect(274, 276, 687, 286, '#FFFFFF', 10, '#DED4E7')}${label(294, 307, 'Produto', 18, '#2F2344', 700)}${label(294, 334, 'Produto', 12, '#3E324F', 600)}${rect(294, 344, 647, 36, '#FFFFFF', 6, '#C9BBD5')}${label(308, 368, 'Selecionar produto ou informar preço manualmente', 12, '#655972')}${label(918, 368, '⌄', 18, '#7C4DCC')}`
  content += `${label(294, 407, 'Prazo de pagamento', 12, '#3E324F', 600)}${label(511, 407, 'Preço de tabela', 12, '#3E324F', 600)}${label(727, 407, 'Linha de desconto', 12, '#3E324F', 600)}`
  ;[[294, 'Selecione o prazo'], [511, 'R$  0,00'], [727, 'Selecione a linha']].forEach(([x, value]) => {
    content += `${rect(x, 416, 200, 37, '#FFFFFF', 6, '#C9BBD5')}${label(x + 12, 440, value, 12, '#655972')}`
  })
  content += `${label(294, 478, 'Quantidade', 12, '#3E324F', 600)}${rect(294, 487, 200, 37, '#FFFFFF', 6, '#C9BBD5')}${label(308, 511, '1', 12, '#655972')}${label(458, 511, 'itens', 11, '#9B8FAA')}${rect(294, 534, 146, 31, visitas.primary, 6)}${label(309, 554, 'Adicionar ao pedido', 11, '#FFFFFF', 700)}`
  content += `${rect(274, 575, 687, 126, '#FFFFFF', 10, '#DED4E7')}${label(294, 607, 'Itens do pedido', 18, '#2F2344', 700)}${rect(851, 585, 89, 23, '#F0E7F8', 12)}${label(868, 601, '0 produtos', 10, '#6E429F', 700)}${rect(294, 622, 647, 59, '#FDFBFE', 6, '#D6C8E2')}${label(545, 647, 'Nenhum produto no pedido.', 12, '#3E324F', 700)}${label(472, 666, 'Adicione um produto para iniciar o orçamento.', 11, '#8A7C99')}`
  content += `${rect(985, 81, 270, 391, '#4D2D73', 11)}${label(1003, 113, 'Total do pedido', 12, '#D7C6E5')}${label(1003, 159, 'R$ 0,00', 38, '#FFCC87', 700)}${label(1003, 180, 'Produto, frete e descontos', 11, '#D7C6E5')}${line(985, 196, 1255, 196, '#795C97', 1)}`
  ;[['Produtos', '0'], ['Itens', '0'], ['Peso', '0 kg']].forEach(([name, value], index) => {
    const x = 1002 + index * 83
    content += `${label(x, 221, name, 11, '#D7C6E5')}${label(x, 246, value, 18, '#FFFFFF', 700)}`
  })
  content += `${line(1003, 267, 1237, 267, '#795C97', 1)}`
  ;[['Subtotal dos produtos', 'R$ 0,00'], ['Frete', 'R$ 0,00'], ['Desconto', 'R$ 0,00'], ['Total estimado', 'R$ 0,00']].forEach(([name, value], index) => {
    const y = 299 + index * 39
    content += `${label(1003, y, name, 12, '#D7C6E5')}${label(1180, y, value, 12, index === 3 ? visitas.accent : '#FFFFFF', 700)}`
  })
  content += `${rect(985, 485, 270, 107, '#FFFFFF', 10, '#DED4E7')}${label(1003, 515, 'Cliente: sem vínculo', 12, '#53475F')}${rect(1003, 533, 234, 38, '#D9C5EA', 6)}${label(1054, 557, 'Salvar orçamento', 12, '#4D2D73', 700)}`
  return screenshot('AXR Visitas', '#F8F6FB', content)
}

function saldoReferencePreview() {
  let content = `<defs><linearGradient id="saldo-sidebar" x2="0.9" y2="1"><stop stop-color="#ECF8F1"/><stop offset="1" stop-color="#BCE9CE"/></linearGradient></defs>${rect(0, 0, 204, 720, 'url(#saldo-sidebar)')}${line(204, 0, 204, 720, '#BFDCCB', 1)}`
  content += `${rect(17, 19, 41, 41, saldo.primary, 9)}<path d="M28 47l8-9 7 5 7-13" fill="none" stroke="#B9F36C" stroke-width="3"/>${label(68, 45, 'AXR Saldo', 22, '#173D2F', 700)}${label(18, 72, 'Gestão financeira', 11, '#527A63')}`
  ;['Dashboard', 'Lançamentos', 'Contas', 'Plano de contas', 'Fornecedores / clientes', 'Notas da equipe', 'Relatórios', 'Usuários'].forEach((name, index) => {
    const y = 111 + index * 39
    if (index === 0) content += rect(9, y - 20, 185, 31, saldo.primary, 9)
    content += `${circle(28, y - 4, 5, index === 0 ? saldo.accent : '#5E8D75')}${label(42, y + 1, name, 12, index === 0 ? '#FFFFFF' : '#285343', index === 0 ? 700 : 500)}`
  })
  content += `${rect(8, 646, 188, 64, '#E7F3EB', 12, '#BFDCCB')}${circle(29, 668, 12, '#D8EEE0')}${label(50, 672, 'Usuário demonstrativo', 11, '#285343', 600)}${label(17, 696, 'Sair da conta', 10, '#527A63')}`
  content += `${rect(204, 0, 1076, 720, '#F3F7F5')}${rect(204, 0, 1076, 52, '#FFFFFF')}${line(204, 52, 1280, 52, '#DFE8E2', 1)}${label(226, 30, 'Dashboard financeiro', 16, '#203B2C', 700)}${label(226, 44, 'Visão consolidada', 10, '#95A79B')}${rect(1116, 13, 71, 27, '#E6F3EA', 13)}${label(1130, 31, '+ Receita', 10, '#137C61', 700)}${rect(1193, 13, 72, 27, '#EAF4DA', 13)}${label(1207, 31, '+ Despesa', 10, '#506A2D', 700)}`
  content += `${label(220, 85, 'Visão mensal', 19, '#203B2C', 700)}${label(220, 103, 'Receitas, despesas e categorias do mês selecionado.', 10, '#869D8C')}${rect(1089, 66, 175, 39, '#FFFFFF', 16, '#DBE7DF')}${label(1116, 91, 'Novembro de 2026', 11, '#2D563D', 600)}`
  content += `${rect(220, 119, 1044, 33, '#F7FAE8', 10, '#DDECB2')}${label(236, 140, 'Dados demonstrativos — valores e contas fictícios', 11, '#526D2E', 600)}`
  ;[['A pagar hoje', 'R$ 0,00'], ['Receitas recebidas', 'R$ 0,00'], ['Despesas pagas', 'R$ 0,00'], ['A pagar', 'R$ 0,00'], ['A receber', 'R$ 0,00']].forEach(([name, value], index) => {
    const x = 220 + index * 210
    content += `${rect(x, 166, 198, 116, '#FFFFFF', 12, '#DFE8E2')}${circle(x + 22, 190, 10, index % 2 ? '#E1F5E7' : '#EAF4DA')}${label(x + 13, 225, name, 10, '#8A9F91')}${label(x + 13, 254, value, 21, '#203B2C', 700)}${label(x + 13, 273, 'Ver lançamentos →', 9, '#137C61', 600)}`
  })
  content += `${rect(220, 300, 1044, 177, '#FFFFFF', 12, '#DFE8E2')}${label(237, 326, 'Contas em atraso', 17, '#203B2C', 700)}${label(237, 345, 'Lançamentos previstos cujo vencimento já passou.', 10, '#95A79B')}${rect(1168, 311, 76, 21, '#E7F4E9', 10)}${label(1177, 326, '0 pendências', 9, '#137C61', 700)}`
  content += `${rect(237, 359, 495, 99, '#F5FAF6', 10, '#D6E9DA')}${label(253, 380, 'Contas a pagar atrasadas', 10, '#6A8C72')}${label(253, 407, 'R$ 0,00', 18, '#203B2C', 700)}${label(253, 438, 'Nenhum lançamento vencido', 10, '#527A63')}`
  content += `${rect(744, 359, 501, 99, '#F9FAEF', 10, '#E4EACB')}${label(760, 380, 'Contas a receber atrasadas', 10, '#78864A')}${label(760, 407, 'R$ 0,00', 18, '#203B2C', 700)}${label(760, 438, 'Nenhum lançamento vencido', 10, '#677D4B')}`
  content += `${rect(220, 492, 1044, 202, '#FFFFFF', 12, '#DFE8E2')}${label(237, 518, 'Minhas contas', 17, '#203B2C', 700)}${label(237, 537, 'Saldos ilustrativos para esta prévia.', 10, '#95A79B')}`
  ;[['Conta 01', 237, 554], ['Conta 02', 490, 554], ['Conta 03', 743, 554], ['Conta 04', 996, 554], ['Conta 05', 237, 628], ['Conta 06', 490, 628]].forEach(([name, x, y]) => {
    content += `${rect(x, y, 239, 65, '#FCFDFC', 10, '#E0E9E3')}${label(x + 13, y + 24, name, 11, '#203B2C', 600)}${label(x + 164, y + 24, 'R$ 0,00', 11, '#137C61', 700)}${label(x + 13, y + 48, 'Conta demonstrativa', 9, '#9AAFA0')}`
  })
  return screenshot('AXR Saldo', '#F3F7F5', content)
}

function motosPreview() {
  return `<svg xmlns="http://www.w3.org/2000/svg" width="1280" height="720" viewBox="0 0 1280 720" role="img" aria-label="Prévia ilustrativa AXR Motos"><defs><linearGradient id="moto-overlay"><stop stop-color="#181B20" stop-opacity="0.98"/><stop offset="0.48" stop-color="#181B20" stop-opacity="0.9"/><stop offset="1" stop-color="#181B20" stop-opacity="0.18"/></linearGradient></defs>${rect(0, 0, 1280, 720, '#181B20')}<image href="data:image/jpeg;base64,${photo}" width="1280" height="720" preserveAspectRatio="xMidYMid slice"/>${rect(0, 0, 1280, 720, 'url(#moto-overlay)')}${rect(0, 0, 1280, 84, '#181B20')}${line(0, 84, 1280, 84, '#ffffff26', 1)}${circle(64, 42, 18, 'none', motos.accent, 4)}${circle(104, 42, 18, 'none', motos.accent, 4)}<path d="M64 42l15-27h18l7 27M79 15l12 27H64" fill="none" stroke="${motos.accent}" stroke-width="4"/>${label(138, 51, 'AXR MOTOS', 25, '#FFFFFF', 800)}${label(732, 49, 'INÍCIO', 13, '#FFFFFF', 700)}${label(830, 49, 'MOTOS', 13, '#C4C7CD', 700)}${label(920, 49, 'SOBRE', 13, '#C4C7CD', 700)}${label(1010, 49, 'CONTATO', 13, '#C4C7CD', 700)}${rect(1127, 21, 119, 42, '#E85D2A', 4)}${label(1144, 48, 'Fale conosco', 13, '#FFFFFF', 700)}${label(64, 189, 'AXR MOTOS  /  VITRINE DIGITAL', 13, motos.accent, 700)}${label(60, 291, 'Sua próxima', 69, '#FFFFFF', 800)}${label(60, 370, 'jornada', 69, motos.accent, 800)}${label(60, 449, 'começa aqui.', 69, '#FFFFFF', 800)}${label(64, 506, 'Explore motocicletas, compare características e encontre', 18, '#D3D5D9')}${label(64, 534, 'a opção para a sua próxima estrada.', 18, '#D3D5D9')}${rect(64, 569, 205, 55, motos.primary, 5)}${label(86, 604, 'Explorar catálogo  →', 17, '#FFFFFF', 700)}${rect(283, 569, 166, 55, 'none', 5, '#FFFFFF99')}${label(307, 604, 'Conhecer a loja', 17, '#FFFFFF', 600)}${label(64, 680, 'DESCUBRA MAIS  ↓', 13, '#C4C7CD', 700)}</svg>`
}

const specialized = { fluxo: taskflowPreview(), saldo: saldoReferencePreview(), visitas: visitasReferencePreview(), motos: motosPreview() }
for (const [key, preview] of Object.entries(specialized)) {
  await writeFile(path.join(output, `axr-${key}.svg`), preview)
}
