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
