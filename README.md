# Book Lens · Codex Edition

Book Lens is a Codex-powered reading workspace for books. It is adapted from Paper Lens, but uses a separate frontend port, backend port, data directory, and `book-lens` skill so it can run alongside the original project.

## Features

| Mode | Purpose | Output |
|---|---|---|
| **速览** | Quickly understand what a book is about and whether to read it | `speed-read.md` |
| **精读** | Build a structured long-form reading note | `book-reading.md` |
| **伴读** | Chapter-by-chapter guided reading, concepts, foreign-language help | `reading-notes.md` |
| **分享** | Prepare reading-club or team-sharing material | `slides-content.md` |
| **生成技能** | Turn a book into a reusable Codex skill plan | `book-skill-plan.md` |

## Architecture

```
Browser (3002) <-> book-lens-backend (8767) <-> codex app-server
```

Book files and notes live under `book-notes/`.

## Run

```bash
cd book-lens-web
npm install
npm run dev
```

Open http://localhost:3002.

`npm run dev` starts the FastAPI backend behind the frontend. The default backend is `http://localhost:8767`.

## Supported Uploads

The first version accepts PDF, EPUB, TXT, and Markdown. DOCX, HTML, RTF, MOBI, AZW, and AZW3 are planned as extractor/converter extensions.

## Project Skills

Project-local skills live in `.codex/skills/`.

- `book-lens` is the active workflow called by the backend.
- `frontend-slides` is retained for future slide generation.
- `vendor-*` directories document external reading skills that influenced the project. See `SKILLS.md`.

## Roadmap

- Book categories with collapsible category groups.
- Drag books into a category.
- Add a book directly under a selected category.
- One book belongs to one category in the first implementation; duplicate uploads can be used when a user wants separate categorized copies.
