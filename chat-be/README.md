# Chat backend

Node.js and TypeScript backend using Express.

## Requirements

- Node.js 20 or newer
- npm

## Commands

```bash
npm install
npm run dev
npm run typecheck
npm run build
npm start
```

The server listens on port `3000` by default. Set `PORT` to use another port.
The `GET /health` endpoint returns `{ "status": "ok" }`.

## Prisma

The Prisma schema is in `prisma/schema.prisma`; `prisma.config.ts` reads the
database connection settings from `DB_HOST`, `DB_PORT`, `DB_USER`,
`DB_PASSWORD`, and `DB_NAME` in `.env`. The schema maps `User` and
`RefreshToken` to the existing `usetime` and `refestoken` tables.

The Prisma schema/config use Prisma ORM 7 format. The current Prisma CLI
dependency is 8.0.0-rc.33, which is not compatible with the installed Prisma
Client 7.10.1; align the CLI and client versions before running Prisma commands.

Use the following commands to validate the schema and generate the client:

```bash
npx prisma validate
npx prisma generate
```
