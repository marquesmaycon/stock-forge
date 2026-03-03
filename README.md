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

1. **Pré‑requisitos**
   - Node.js 18+ (recomenda‑se gerenciador de versões como nvm)
   - PostgreSQL ou Neon (pode usar a URL já configurada)
   - Yarn ou npm

2. **Instalar dependências**

```bash
# na raiz do monorepo
npm install
# ou
# yarn install
```

3. **Configurar variáveis de ambiente**

Copie os arquivos `.env.example` de cada app (se existirem) e preencha conforme necessário. O backend tem as seguintes chaves importantes:

> Confira `apps/backend/.env.example` para referência.

```dotenv
# apps/backend/.env
TZ=UTC
PORT=3333
HOST=localhost
NODE_ENV=development

LOG_LEVEL=info
APP_KEY=<chave aleatória>
APP_URL=http://${HOST}:${PORT}

SESSION_DRIVER=cookie

# CORS
# CORS_ORIGIN=http://localhost:5173,http://localhost:3000

DATABASE_URL=postgresql://user:password@host/dbname?sslmode=require&channel_binding=require
```

4. **Rodar projeto**

Na raiz do projeto
```bash
npm run dev
# ou
# yarn dev
```

Ou separadamente:

4.1 **Rodar backend**

```bash
cd apps/backend
# iniciar servidor adonis
node ace serve --watch
```

ou, com `npm`/`yarn`:

```bash
npm run dev
# ou
# yarn dev
```

4.2. **Rodar frontend**

```bash
cd apps/frontend
npm run dev
# ou
# yarn dev
```

O cliente ficará disponível em `http://localhost:5173` por padrão.

---



> Confira `apps/backend/.env` para referência.

---

## 🚀 Desenvolvimento

- Para aplicar migrations:
  ```bash
  node ace migration:run
  ```

- Limpa banco e roda migrations novamente:
  ```bash
  node ace migration:fresh
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