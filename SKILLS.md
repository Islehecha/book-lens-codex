# Skills

Book Lens keeps project-local skills under `.codex/skills/` so the repository is self-contained.

## Active Skills

- `.codex/skills/book-lens/` — the main Book Lens workflow used by the backend through `/book-lens`.
- `.codex/skills/frontend-slides/` — retained for future slide generation from `slides-content.md`.

## Vendored Upstream Skills

These directories contain real upstream skill files copied into this repository:

- `.codex/skills/book-study/` → https://github.com/sanyuan0704/sanyuan-skills/tree/main/skills/book-study
- `.codex/skills/book-translation/` → https://github.com/f/prompts.chat/tree/main/.windsurf/skills/book-translation
- `.codex/skills/book-mirror/` → https://github.com/garrytan/gbrain/tree/master/skills/book-mirror

## External Reference Wrappers

The remaining `vendor-*` directories are source-tracking wrappers, not full upstream installs.

- `vendor-book-to-skill` → https://github.com/virgiliojr94/book-to-skill
  - GitHub clone/raw download still fails locally with `SSL_ERROR_SYSCALL`.
  - Book Lens already integrates the core idea through `.codex/skills/book-lens/references/book-to-skill.md`.
- `vendor-deep-reading` → https://github.com/LeoYeAI/openclaw-master-skills/tree/main/skills/mikonos-deep-reading
  - The advertised `deep-reading` skill name was not exposed by `npx skills`; the repo currently reports `openclaw-master-skills`.

## Removed

The copied Paper Lens skill was removed from `.codex/skills/` to avoid mixing paper-specific workflows into the book project.
