# BC-AI-Project

Business Central AI configuration agent. The application lives in `web/` (a Next.js 15 app with TVG-branded registration/login and a protected dashboard).

## Cursor Cloud specific instructions

### Services

- `web/` — Next.js 15 (App Router, Turbopack) + React 19. Auth via HTTP-only JWT cookie (`AUTH_SECRET`), user storage in SQLite via Prisma 7 (`web/dev.db`).

### Running / testing / linting

Standard commands are defined in `package.json` (repo root) and `web/package.json`. Run from the repo root or from `web/`:

- Dev server: `npm run dev` (root proxies to `web`). Serves on `http://localhost:3000`.
- Lint: `cd web && npm run lint`.
- Build (production): `npm run build`.
- DB/env setup: `npm run setup` (creates `web/.env` from `.env.example` and applies Prisma migrations).

### Non-obvious notes

- The update script only installs dependencies (`npm install --prefix web`, which also runs `prisma generate` via `postinstall`). It intentionally does NOT create `.env` or run migrations.
- Environment + database are auto-provisioned at dev time, not by the update script: `npm run dev` runs `web/scripts/ensure-db.mjs`, which invokes `web/scripts/ensure-env.mjs` to create `web/.env` from `.env.example` (with a dev-only `AUTH_SECRET` and `DATABASE_URL="file:./dev.db"`) and applies migrations if `web/dev.db` is missing. So a fresh clone can go straight to `npm run dev` after install.
- `AUTH_SECRET` must be 32+ chars and not contain `replace-with`, or `ensure-env.mjs` aborts. The committed `.env.example` default satisfies this for local dev only.
- `better-sqlite3` is a native module; it needs a C/C++ toolchain (gcc present on the cloud VM) to build during `npm install`.
- The app is accessed via the in-VM browser/Desktop pane at `http://localhost:3000`; there is no public URL.
