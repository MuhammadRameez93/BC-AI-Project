# BC-AI-Project

AI agent web application for reading Excel workbooks, suggesting Business Central configuration, and connecting to **Dynamics 365 Business Central (cloud)**. Built for [Tech Ventures Global](https://www.techventuresglobal.com/) branding and workflows.

## Run the app (recommended)

From this folder (repository root):

```bash
cd web
npm install
npm run setup
npm run dev
```

Or from the root after `npm install` inside `web/` once:

```bash
npm run setup
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

**Important:** The app lives in the `web/` directory. Running `npm run dev` in the root **without** the root `package.json` scripts only works after pulling the latest changes; otherwise `cd web` first.

### First-time setup

1. `npm run setup` creates `web/.env` from `web/.env.example` if needed.
2. If prompted, edit `web/.env` and set `AUTH_SECRET` to a random string of **32+ characters** (see `web/README.md`).
3. Setup applies SQLite migrations and creates `web/dev.db`.

## Current scope (step 1)

- Web UI themed with TVG colors (navy `#002e5b`, sky `#6c98e1`, gold `#fde428`)
- **Create account** — name, email, password (min 8 characters)
- **Sign in** — email + password from registration
- Protected **dashboard** placeholder for upcoming Excel / BC agent features

## Project layout

| Path | Purpose |
|------|---------|
| `web/` | Next.js 15 app (UI + API routes) |
| `web/prisma/` | User database schema |
| `web/src/app/api/auth/` | Register, login, logout, session |

More detail: [web/README.md](web/README.md)
