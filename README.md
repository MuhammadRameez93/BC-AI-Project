# BC-AI-Project

AI agent web application for reading Excel workbooks, suggesting Business Central configuration, and connecting to **Dynamics 365 Business Central (cloud)**. Built for [Tech Ventures Global](https://www.techventuresglobal.com/) branding and workflows.

## Current scope (step 1)

- Web UI themed with TVG colors (navy `#002e5b`, sky `#6c98e1`, gold `#fde428`)
- **Create account** — name, email, password (min 8 characters)
- **Sign in** — email + password from registration
- Protected **dashboard** placeholder for upcoming Excel / BC agent features
- Session-based auth (HTTP-only cookie, JWT)

## Run locally

```bash
cd web
cp .env.example .env   # set AUTH_SECRET to a random string (32+ chars)
npm install
npm run db:migrate     # creates SQLite database
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Project layout

| Path | Purpose |
|------|---------|
| `web/` | Next.js 15 app (UI + API routes) |
| `web/prisma/` | User database schema |
| `web/src/app/api/auth/` | Register, login, logout, session |

## Next steps (from product roadmap)

- Excel upload and parsing
- AI configuration suggestions
- Business Central online OAuth / API connection (environment selection TBD)
