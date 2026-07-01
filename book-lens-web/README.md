# Book Lens Codex Web

Next.js frontend for `BookLensCodeX`. It talks to the FastAPI backend over REST and SSE.

## Setup

```bash
npm install
npm run dev
```

Open http://localhost:3002.

`npm run dev` starts the backend behind the frontend. The default backend is `http://localhost:8767`; change `NEXT_PUBLIC_BACKEND_URL` only if you are intentionally pointing the UI at a separately managed backend.

## Checks

```bash
npm run lint
npx tsc --noEmit
```
