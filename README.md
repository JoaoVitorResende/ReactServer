# ReactServer

Aplicação em **React + Vite + TypeScript** para gerenciamento de usuários, consumindo uma API REST local (`json-server`).

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TanStack Query](https://img.shields.io/badge/TanStack%20Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)
![json-server](https://img.shields.io/badge/json--server-000000?style=for-the-badge&logo=json&logoColor=white)

## Tecnologias

- **React** — UI
- **Vite** — build tool / dev server
- **TypeScript** — tipagem estática
- **TanStack Query** — data fetching, cache e gerenciamento de estado assíncrono
- **json-server** — API REST fake para desenvolvimento

## Funcionalidades

- 🔍 **Buscar usuário** por identificador (`GET /users/:id`)
- ➕ **Criar usuário** via formulário (`POST /users`)
- 📋 **Listar todos os usuários** (`GET /users`, via TanStack Query)

## Pré-requisitos

- [Node.js](https://nodejs.org/) instalado
- Gerenciador de pacotes: `npm`, `yarn` ou `pnpm`

## Instalação

Clone o repositório e instale as dependências:

```bash
git clone <url-do-repositorio>
cd ReactServer/Servidor/server
pnpm install
```

## Rodando o projeto

O projeto precisa de **dois processos rodando ao mesmo tempo**: a API (`json-server`) e o frontend (`Vite`).

### 1. Subir a API (json-server)

```bash
pnpm dlx json-server --watch db.json --port 3000
```

A API ficará disponível em `http://localhost:3000`.

> 💡 Dica: para não digitar o comando toda vez, adicione um script no `package.json`:
> ```json
> "scripts": {
>   "server": "json-server --watch db.json --port 3000"
> }
> ```
> E rode com `pnpm server`.

### 2. Subir o frontend (Vite)

Em outro terminal:

```bash
pnpm dev
```

O app ficará disponível em `http://localhost:5173` (porta padrão do Vite).

## Estrutura do banco de dados (`db.json`)

```json
{
  "users": [
    { "id": "jao", "name": "jao" },
    { "id": "car", "name": "Carlos" }
  ]
}
```

## Estrutura do projeto

```
Servidor/
└── server/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   │   ├── new-user-form.tsx   # Formulário de criação de usuário
    │   │   ├── user-info.tsx       # Busca e exibe um usuário específico
    │   │   └── users-list.tsx      # Lista todos os usuários (TanStack Query)
    │   ├── helpers/
    │   │   └── api.ts              # Funções fetcher e api para chamadas HTTP
    │   ├── hooks/
    │   │   ├── use-user.ts         # Hook com getUser, createUser e estado de requisição
    │   │   └── use-users.ts        # Hook para listar todos os usuários (TanStack Query)
    │   ├── models/
    │   │   └── user.ts             # Tipagem da entidade User
    │   ├── App.tsx
    │   ├── index.css
    │   └── main.tsx
    ├── db.json
    ├── vite.config.ts
    └── package.json
```

## Scripts disponíveis

| Comando           | Descrição                              |
|-------------------|------------------------------------------|
| `pnpm dev`        | Inicia o servidor de desenvolvimento    |
| `pnpm build`      | Gera a build de produção                |
| `pnpm preview`    | Pré-visualiza a build de produção       |

## Observações

- A URL base da API está fixada em `http://localhost:3000` nos arquivos `helpers/api.ts`. Caso o backend rode em outra porta/host, ajuste esse valor.
- Certifique-se de que o `json-server` esteja rodando **antes** de usar as funcionalidades de busca/criação de usuário, ou as requisições falharão.
