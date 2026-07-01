# 生成技能模式 — Book To Skill

## 目标

把一本书沉淀成可复用的 Codex skill，让后续任务能按需调用这本书的方法、框架、术语和案例。

## 输出

先保存计划：

```text
book-notes/<name>/book-skill-plan.md
```

如果用户确认生成，则创建：

```text
.codex/skills/generated/<slug>/
├── SKILL.md
└── references/
```

## 生成原则

- 不要把整本书复制进 skill。
- `SKILL.md` 只放触发条件、核心方法、使用流程和索引。
- 大段章节内容放入 `references/`，并按主题拆分。
- 保留书名、作者、版权来源说明；只写摘要和转述，不长篇摘录。
- 如果本地安装了外部 `book-to-skill` skill，可参考它的章节化、术语表、patterns、cheatsheet 结构，但输出必须适配当前 Book Lens 项目。

## 计划模板

```markdown
# <书名> — Skill 生成计划

## Skill 名称

## 适用任务

## 不适用任务

## 核心概念

## 可复用方法

## References 拆分

## 触发描述

## 风险与边界
```
