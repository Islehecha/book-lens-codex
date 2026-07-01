# Skills

Book Lens keeps project-local skills under `.codex/skills/` so the repository is self-contained.

## Active Skills

- `.codex/skills/book-lens/` — the main Book Lens workflow used by the backend through `/book-lens`.
- `.codex/skills/frontend-slides/` — retained for future slide generation from `slides-content.md`.

## External References

The `vendor-*` directories are source-tracking wrappers, not full upstream installs. They document which external reading skills influenced this project and how to replace the wrapper with the upstream skill when GitHub cloning is available.

- `vendor-book-to-skill` → https://github.com/virgiliojr94/book-to-skill
- `vendor-book-study` → https://github.com/sanyuan0704/sanyuan-skills/tree/main/skills/book-study
- `vendor-book-translation` → https://github.com/f/prompts.chat/tree/main/.windsurf/skills/book-translation
- `vendor-book-mirror` → https://github.com/garrytan/gbrain/tree/master/skills/book-mirror
- `vendor-deep-reading` → https://github.com/LeoYeAI/openclaw-master-skills/tree/main/skills/mikonos-deep-reading

## Removed

The copied Paper Lens skill was removed from `.codex/skills/` to avoid mixing paper-specific workflows into the book project.
