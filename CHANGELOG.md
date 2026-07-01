# Changelog

## v0.1.0 (2026-07-01)

Initial Book Lens release.

- Forked the Paper Lens Codex architecture into an independent book-reading workspace.
- Uses frontend port 3002 and backend port 8767 so it can run alongside Paper Lens.
- Stores user book files and notes under `book-notes/`.
- Supports PDF, EPUB, TXT, and Markdown uploads in the first implementation.
- Adds Book Lens modes: 速览, 精读, 伴读, 分享, 生成技能.
- Adds the project-local `.codex/skills/book-lens` workflow.
- Removes the copied Paper Lens skill from the distributable skill set.
- Adds external reading-skill reference wrappers under `.codex/skills/vendor-*`.
