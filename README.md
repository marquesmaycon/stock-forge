# Stock Forge

Plataforma full-stack para gerenciamento de estoque, produtos e matérias-primas, construída em monorepo com AdonisJS, TanStack Start, React, TypeScript e Turborepo.

[![React](https://img.shields.io/badge/React-19.2-61DAFB?logo=react)](https://react.dev/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6?logo=typescript)](https://www.typescriptlang.org/)
[![AdonisJS](https://img.shields.io/badge/AdonisJS-7-5A45FF)](https://adonisjs.com/)
[![TanStack](https://img.shields.io/badge/TanStack-Start-FF4154)](https://tanstack.com/start)
[![PostgreSQL](https://img.shields.io/badge/PostgreSQL-Database-4169E1?logo=postgresql)](https://www.postgresql.org/)
[![Turborepo](https://img.shields.io/badge/Turborepo-2.8-EF4444?logo=turborepo)](https://turbo.build/repo)

## Demo

Projeto ao vivo: [stock-forge.mklly.com.br](https://stock-forge.mklly.com.br/)

> A API pode entrar em hibernação quando fica sem acessos. O primeiro carregamento pode levar alguns segundos.

## Sobre

O Stock Forge é uma aplicação de inventário para controlar produtos, matérias-primas e composições de fabricação. O projeto foi estruturado como monorepo para integrar backend, frontend e contrato de API de forma organizada.

A aplicação explora um fluxo full-stack real, com autenticação, CRUDs, validações, tabelas, formulários e comunicação tipada entre cliente e servidor.

## Funcionalidades

- Cadastro e autenticação de usuários.
- Gestão de produtos.
- Gestão de matérias-primas.
- Associação entre produtos e matérias-primas.
- Cálculo e organização de composições de estoque.
- Listagens em tabela com ações de edição e remoção.
- Formulários com validação.
- API REST com transformers, services e validators.
- Testes funcionais para recursos principais.

## Stack

- **AdonisJS 7** para o backend.
- **Lucid ORM** para banco de dados.
- **PostgreSQL** como banco relacional.
- **TanStack Start** e **React 19** no frontend.
- **TanStack Router**, **TanStack Query**, **TanStack Table** e **TanStack Form**.
- **Tuyau** para integração tipada com a API.
- **Radix UI**, **Tailwind CSS** e componentes reutilizáveis.
- **Japa** para testes no backend.
- **Turborepo** para orquestração do monorepo.

## Arquitetura

```txt
.
├── apps/
│   ├── backend/       # API AdonisJS
│   └── frontend/      # Aplicação TanStack Start
├── packages/
│   └── api-contract/  # Contrato compartilhado da API
└── turbo.json
```

## Como executar

### Pré-requisitos

- Node.js 24 ou superior.
- npm.
- PostgreSQL.

### Instalação

```bash
git clone https://github.com/marquesmaycon/stock-forge.git
cd stock-forge
npm install
```

Configure o backend usando `apps/backend/.env.example` como referência:

```env
PORT=3333
HOST=localhost
APP_KEY=
DATABASE_URL=
CORS_ORIGIN=http://localhost:3000
```

Gere a chave da aplicação:

```bash
cd apps/backend
node ace generate:key
```

Volte para a raiz e inicie o monorepo:

```bash
cd ../..
npm run dev
```

## Scripts disponíveis

```bash
npm run dev        # Inicia backend e frontend
npm run build      # Gera build dos workspaces
npm run test       # Executa testes
npm run lint       # Executa lint
npm run format     # Formata os projetos
npm run typecheck  # Valida TypeScript
```

## Destaques técnicos

- Monorepo com frontend, backend e pacote de contrato.
- Backend organizado com controllers, services, validators e transformers.
- Integração type-safe entre API e frontend.
- Uso extensivo do ecossistema TanStack.
- Testes funcionais no backend.
- Modelagem de domínio voltada para estoque e composição de produtos.

---

<div align="center">
  <img src="https://github.com/marquesmaycon.png" width="100px" style="border-radius: 50%"/>
  <br/>
  <strong>Maycon Marques</strong>
  <br/>
  <br/>

  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mayconhenrique/)
  [![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat-square&logo=github&logoColor=white)](https://github.com/marquesmaycon)
  [![Email](https://img.shields.io/badge/Email-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:mayconmarquesh@gmail.com)
</div>
