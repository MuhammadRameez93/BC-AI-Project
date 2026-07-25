# BC AI Agent — Web App

Next.js app for registration, login, and (later) Excel + Business Central configuration.

## Quick start

From the **repository root**:

```bash
npm run setup
npm run dev
```

Or from this folder (`web/`):

```bash
npm install
npm run setup
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

`npm run setup` creates `web/.env` from `.env.example` (if missing) and applies the database migration.

## Required: `AUTH_SECRET`

If setup stops with an error about `AUTH_SECRET`, open `web/.env` and set a random string **at least 32 characters**:

```bash
# Linux / macOS / Git Bash
openssl rand -base64 32
```

Paste the result as the value of `AUTH_SECRET=` in `web/.env`, then run `npm run setup` again.

## Troubleshooting

| Problem | Fix |
|--------|-----|
| `Could not read package.json` at repo root | Run commands from `web/` or use root scripts: `npm run dev` from BC-AI-Project root |
| Prisma `datasource.url` required | Run `npm run setup` in `web/` (creates `.env`) |
| Port 3000 in use | `npm run dev -- -p 3001` inside `web/` |
| `better-sqlite3` install fails (Windows) | Install [Visual Studio Build Tools](https://visualstudio.microsoft.com/visual-cpp-build-tools/) with “Desktop development with C++”, then `npm install` again |
