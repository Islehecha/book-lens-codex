---
name: vendor-book-to-skill
description: "Upstream reference wrapper for virgiliojr94/book-to-skill. Use Book Lens' built-in 生成技能 mode for the integrated workflow; replace this wrapper with the upstream skill when GitHub installation is available."
---

# vendor-book-to-skill

Source: https://github.com/virgiliojr94/book-to-skill

Recommended upstream install command:

```bash
npx skills add https://github.com/virgiliojr94/book-to-skill --skill book-to-skill
```

Book Lens integration status:

- The core idea is integrated into `.codex/skills/book-lens/references/book-to-skill.md`.
- The frontend exposes this as the `生成技能` mode.
- This wrapper is kept so the repository documents the intended upstream dependency without requiring a global install.

When network access allows cloning from GitHub, replace this wrapper with the upstream `book-to-skill` skill contents or vendor it under `.codex/skills/book-to-skill/`.
