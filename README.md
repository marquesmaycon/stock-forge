# ⚙️ Stock Forge

> Uma plataforma full‑stack para gerenciamento de produtos e matérias‑primas.

---

## 🧱 Stack

- **Backend:** AdonisJS 7 (TypeScript)
- **Frontend:** TanStack Start (Vite)
- **API:** RESTful
- **Banco de dados:** PostgreSQL (Neon)
- **ORM / Query builder:** Adonis Lucid
- **Linter / Formatter:** ESLint, Prettier
- **Monorepo:** TurboRepo

---

## 📦 Estrutura do monorepo

```
/apps
  /backend   # servidor AdonisJS
  /frontend  # cliente React
```

---

## 🛠️ Como rodar localmente


1. **Clone o repositório**

  - **Pré‑requisitos**
    - Node.js 18+ (recomenda‑se gerenciador de versões como nvm)
    - PostgreSQL ou Neon (pode usar a URL já configurada)
    - Yarn ou npm

```bash
# no terminal
git clone https://github.com/marquesmaycon/stock-forge.git
```

2. **Instalar dependências**

```bash
cd stock-forge
# na raiz do monorepo
npm install
# ou
# yarn install
```

3. **Configurar variáveis de ambiente do backend**

Copie os arquivos `.env.example` de cada app (se existirem) e preencha conforme necessário. O backend tem as seguintes chaves importantes:

> Confira `apps/backend/.env.example` para referência.

  - Você vai precisar de uma chave aletória de 16 digitos e pode gerar com o comando abaixo.

```bash
  cd apps/backend
  # na pasta do backend
  node ace generate:key
```
  - Seu aquivo ``.env`` vai se parecer com isso

```dotenv
# apps/backend/.env
TZ=UTC
PORT=3333
HOST=localhost
NODE_ENV=development

LOG_LEVEL=info
APP_KEY=<chave aleatória com 16 caracteres>
APP_URL=http://${HOST}:${PORT}

SESSION_DRIVER=cookie

# CORS
# CORS_ORIGIN=http://localhost:5173,http://localhost:3000

DATABASE_URL=postgresql://user:password@host/dbname?sslmode=require&channel_binding=require
```
> Alternativamente você pode definir variáveis de ambiente para o banco de forma convencional

```dotenv
# apps/backend/.env
DB_HOST=127.0.0.1
DB_PORT=5432
DB_USER=root
DB_PASSWORD=root
DB_DATABASE=app
```

4. **Rodar projeto**

  -  backend + frontend
```bash
# na raiz do projeto
npm run dev
# ou
# yarn dev
```
  - **Rodar apenas backend**

```bash
cd apps/backend
# iniciar servidor adonis
npm run dev
```

  - **Rodar frontend**

```bash
cd apps/frontend
# iniciar TanStack Start
npm run dev
# ou
# yarn dev
```

O cliente ficará disponível em `http://localhost:3000` por padrão.

## 🚀 Desenvolvimento

- Para aplicar migrations:
  ```bash
  node ace migration:run
  ```

- Limpa banco e roda migrations novamente:
  ```bash
  node ace migration:fresh
  ```

- Popula o banco de dados (seed):
  ```bash
  node ace db:seed
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