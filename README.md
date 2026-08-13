# ReactServer

A **React + Vite + TypeScript** application for user management, consuming a local REST API (`json-server`).

![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![TanStack Query](https://img.shields.io/badge/TanStack%20Query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white)
![pnpm](https://img.shields.io/badge/pnpm-F69220?style=for-the-badge&logo=pnpm&logoColor=white)
![json-server](https://img.shields.io/badge/json--server-000000?style=for-the-badge&logo=json&logoColor=white)

## Tech Stack

- **React** — UI
- **Vite** — build tool / dev server
- **TypeScript** — static typing
- **TanStack Query** — data fetching, caching, and async state management
- **json-server** — fake REST API for development

## Features

- 🔍 **Get user** by identifier (`GET /users/:id`)
- ➕ **Create user** via form (`POST /users`)
- 📋 **List all users** (`GET /users`, via TanStack Query)

## Prerequisites

- [Node.js](https://nodejs.org/) installed
- Package manager: `pnpm`

## Installation

Clone the repository and install dependencies:

```bash
git clone <repository-url>
cd ReactServer/Servidor/server
pnpm install
```

## Running the project

The project requires **two processes running at the same time**: the API (`json-server`) and the frontend (`Vite`).

### 1. Start the API (json-server)

```bash
pnpm dlx json-server --watch db.json --port 3000
```

The API will be available at `http://localhost:3000`.

> 💡 Tip: to avoid typing the command every time, add a script to `package.json`:
> ```json
> "scripts": {
>   "server": "json-server --watch db.json --port 3000"
> }
> ```
> Then run it with `pnpm server`.

### 2. Start the frontend (Vite)

In another terminal:

```bash
pnpm dev
```

The app will be available at `http://localhost:5173` (Vite's default port).

## Database structure (`db.json`)

```json
{
  "users": [
    { "id": "jao", "name": "jao" },
    { "id": "car", "name": "Carlos" }
  ]
}
```

## Project structure

```
Servidor/
└── server/
    ├── src/
    │   ├── assets/
    │   ├── components/
    │   │   ├── new-user-form.tsx   # User creation form
    │   │   ├── user-info.tsx       # Fetches and displays a specific user
    │   │   └── users-list.tsx      # Lists all users (TanStack Query)
    │   ├── helpers/
    │   │   └── api.ts              # fetcher and api functions for HTTP calls
    │   ├── hooks/
    │   │   ├── use-user.ts         # Hook with getUser, createUser, and request status
    │   │   └── use-users.ts        # Hook to list all users (TanStack Query)
    │   ├── models/
    │   │   └── user.ts             # User entity typing
    │   ├── App.tsx
    │   ├── index.css
    │   └── main.tsx
    ├── db.json
    ├── vite.config.ts
    └── package.json
```

## Available scripts

| Command           | Description                             |
|--------------------|------------------------------------------|
| `pnpm dev`        | Starts the development server           |
| `pnpm build`      | Generates the production build          |
| `pnpm preview`    | Previews the production build           |

## Notes

- The API base URL is hardcoded to `http://localhost:3000` in the `helpers/api.ts` files. If the backend runs on a different host/port, update this value.
- Make sure `json-server` is running **before** using the search/create user features, or the requests will fail.
