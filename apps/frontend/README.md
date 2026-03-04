# 🔨 Frontend — Teste Técnico

🚀 **Interface de usuário moderna** construída com TanStack Start (Vite + TanStack Router); projetada para interagir com o backend compartilhado em um monorepo.

## 🧩 Funcionalidades

Este frontend atua como a interface de usuário do monorepo `stock-forge`. Funcionalidades principais:

- **⚡ Vite** — build tool moderno com hot module replacement (HMR) para desenvolvimento rápido.
- **🌐 TanStack Router** — roteamento baseado em arquivos com suporte a loaders de dados e layouts.
- **📦 TanStack Start** — framework full-stack que permite server functions e rotas de API sem deixar a arquitetura SPA.
- **🎨 Tailwind CSS** — utilitários CSS para styling responsivo e consistente.
- **⚛️ React** — biblioteca de UI componível, com TypeScript strict mode.
- **🧩 Shadcn** — componentes pré-construídos e acessíveis que podem ser customizados.
- **🔗 Integração com Backend** — tipagem fim-a-fim com suporte a Tuyau para chamadas de API type-safe.
- **🛣️ File-based Routing** — rotas definidas automaticamente a partir da estrutura de arquivos.
- **🧪 Vitest** — framework de testes rápido e moderno, compatível com Vite.
- **✨ Validação & Tipagem** — TypeScript strict mode em todo o código.
- **📱 Responsivo** — design mobile-first com Tailwind de série.

**Observação:** este README foi adaptado para um teste técnico; revise cada seção para pontos de conversa durante a apresentação do código.

## 🚀 Quick Start

```bash
# na pasta ``apps/frontend`` 
npm install
npm run dev          # dev server com HMR (http://localhost:5173)
npm run build        # build para produção
npm run preview      # preview da build
npm run test         # Vitest interactive mode
npm run lint
npm run check        # check + lint + format
```

Por padrão a aplicação roda em `http://localhost:5173`.

## 🛣️ Roteamento

### Conceito File-based

Rotas são criadas automaticamente a partir de arquivos em `src/routes`:

- `src/routes/index.tsx` → `/`
- `src/routes/about.tsx` → `/about`
- `src/routes/products/index.tsx` → `/products`
- `src/routes/products/$id.tsx` → `/products/:id`

## 🧪 Testes

O projeto usa **Vitest** para testes rápidos e integrados com Vite.

```bash
npm run test         # modo interativo
npm run test -- --ui # interface do navegador
npm run test -- --run # rodar uma única vez
```

## 👨‍💻 Autor

<div align="center">
  <img src="https://github.com/marquesmaycon.png" width="100px" style="border-radius: 50%"/>
  <br/>
  <strong>Maycon Marques</strong>
  <br/>
  <br/>
  
  [![LinkedIn](https://img.shields.io/badge/LinkedIn-0077B5?style=flat-square&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/mayconhenrique/)
  [![GitHub](https://img.shields.io/badge/GitHub-100000?style=flat-square&logo=github&logoColor=white)](https://github.com/marquesmaycon)
  [![Email](https://img.shields.io/badge/Email-D14836?style=flat-square&logo=gmail&logoColor=white)](mailto:mayconmarquesh@gmail.com)

  ### Feito com ❤️ e muita 🎵
</div>