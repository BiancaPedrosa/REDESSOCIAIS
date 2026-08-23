# REDESSOCIAIS

Aplicação web em Node.js e Express para analisar dados de jovens sobre o uso de redes sociais e gerar filtros, alertas e recomendações.

## Sobre

Este projeto carrega dados de `jovens.json` e apresenta páginas que mostram:

- lista geral de jovens
- jovens afetados ou não afetados
- jovens com uso excessivo de redes sociais
- jovens com rendimento escolar alto (destaque)
- recomendações com base no uso, rendimento escolar e impacto

O app usa `Express` como servidor e `EJS` como motor de templates.

## Funcionalidades

- Lista geral de jovens
- Filtro de jovens `afetados` e `não afetados`
- Alerta para jovens com `10 horas ou mais` de uso diário
- Destaque para jovens com rendimento escolar `alto`
- Recomendações personalizadas por jovem
- Página 404 personalizada

## Estrutura do projeto

- `server.js` - servidor Express e rotas
- `jovens.json` - dados dos jovens
- `views/` - templates EJS
- `views/partials/` - cabeçalho e rodapé

## Pré-requisitos

- Node.js instalado
- npm disponível

## Instalação

1. Abra o terminal na pasta do projeto:

```bash
cd /Users/bianca/REDESOCIAIS
```

2. Crie um `package.json` (caso ainda não exista):

```bash
npm init -y
```

3. Instale as dependências:

```bash
npm install express ejs
```

## Executando o projeto

```bash
node server.js
```

Abra o navegador em:

```
http://localhost:3000
```

## Rotas disponíveis

- `/` - lista geral de jovens
- `/ativos` - jovens afetados (afetado = true)
- `/nao-afetados` - jovens não afetados (afetado = false)
- `/alerta` - jovens com 10 horas ou mais de uso diário
- `/destaque` - jovens com rendimento escolar alto
- `/recomendacao` - recomendações personalizadas para cada jovem

## Observações

- O arquivo `jovens.json` é lido a cada requisição para validação dos dados.
- Se houver problema ao carregar o JSON, o app retorna um erro amigável.
- Se desejar, você pode adicionar `package.json` e `package-lock.json` ao repositório para facilitar a instalação.
