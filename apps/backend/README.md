# 🔨 Stock Forge - Backend 

🚀 **API AdonisJS 7** desenvolvida como parte de um teste técnico; projetada
para um monorepo com frontend e backend compartilhados.

Este README descreve a arquitetura do backend, as ferramentas utilizadas e
decisões de implementação. Também aponta os tópicos que costumam ser
avaliados em entrevistas técnicas.

## 🧩 Funcionalidades

Este backend atua como a camada de API do monorepo `stock-forge`. Funcionalidades
principais:

- **🗂️ Controladores modulares** — cada recurso (produtos, matérias-primas,
  usuários) possui um controller em `app/controllers`.
- **🏋️ Transformers** — normalizam o formato das respostas em
  `app/transformers` (ex.: `product_transformer.ts`, `raw_material_transformer.ts`).
- **🧪 Validação** — schemas VineJS em `app/validators`; regras compartilhadas
  e lógica utilitária em `forge.ts`.

- **📑 Rotas tipadas** — rotas definidas em `start/routes.ts` com suporte a
  tipos end-to-end via `Tuyau`.
- **📁 Factories & Seeders** — localizados em `database/factories` e
  `database/seeders` para gerar dados rapidamente em desenvolvimento e testes.
- **🔀 Migrations** — o esquema é mantido com migrations do Lucid em
  `database/migrations`.
- **⚡ Preparado para monorepo** — integração fluida com o frontend via Turborepo
  e pacotes compartilhados.

Por padrão a API roda em `http://localhost:3333`.

## 💻 Comandos
> Todos os comandos disponeis do framework estão listados via
```bash
# na pasta atual ``apps/backend``
node ace list
```

## 🧪 Testes

- **Framework**: Japa (veja `./tests`).
- **Agrupamento**: testes utilizam a flag `--group` (ex.: `node ace test --groups="Raw material"`).
- **Factories**: `database/factories` cria instâncias de modelos via `Factory` — usadas em testes funcionais.
- **Seeders**: popular dados para desenvolvimento e CI; execute com `node ace db:seed`.

Exemplo de comando de teste:

```bash
node ace test --groups="Raw material"
```
---

## 🗃️ Banco de Dados

- Os schemas ficam em `database/migrations` usando o construtor de schema do Lucid.
- Execute migrations com `node ace migration:run` ou desfaça com `node ace migration:rollback`.
- Factories e seeders suportam Postgre por padrão; o ambiente é configurado em `config/database.ts`.

---

## 🔧 Validators & Transformers

- **Validators**: cada payload de requisição possui um schema em `app/validators`. Lógica compartilhada (ex.: regras de senha) fica em `forge.ts`.
- **Transformers**: convertem modelos Lucid para respostas JSON; estão em `app/transformers`. Utilize-os em controllers, por exemplo: `ProductTransformer.transform(product)` para padronizar a saída.

---

## 📦 Estrutura do Projeto

- `app/` – código da aplicação (controllers, models, services, etc.)
- `config/` – arquivos de configuração do Adonis
- `database/` – migrations, factories, seeders, definições de schema
- `start/` – definições de rotas, kernel e providers
- `tests/` – suítes de teste Japa

Explore a pasta `build/` para ver o output compilado ao rodar `npm run build`.

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