---
name: book-lens
description: "读书助手：面向书籍 PDF/EPUB/TXT/Markdown 的速览、精读、伴读、分享和生成技能。当用户提供书籍文件、要求读书、整理读书笔记、外文书理解、读书会分享、或把一本书沉淀为可复用 skill 时触发。"
---

# Book Lens — 读书助手

Book Lens 通过不同阅读模式把一本书转成可持续使用的笔记、学习计划、分享材料或 agent skill。

## 模式

| 模式 | 适合场景 | 输出 |
|---|---|---|
| **速览** | 快速判断一本书是否值得读、怎么读 | `speed-read.md` |
| **精读** | 生成系统读书笔记，适合收藏和复盘 | `book-reading.md` |
| **伴读** | 多轮章节导读、概念解释、问题讨论 | `reading-notes.md` |
| **分享** | 准备读书会、团队分享、课程讲解 | `slides-content.md` |
| **生成技能** | 把一本书沉淀成可复用 Codex skill | `book-skill-plan.md`，必要时生成 `.codex/skills/generated/<slug>/` |

## 标准目录

所有文件写入：

```text
book-notes/<book-name>/
├── source.pdf|source.epub|source.txt|source.md
├── extracted-text.md
├── speed-read.md
├── book-reading.md
├── reading-notes.md
├── slides-content.md
├── book-skill-plan.md
└── notes-*.md
```

## 输入处理

支持书籍源文件：PDF、EPUB、TXT、Markdown。DOCX、HTML、RTF、MOBI/AZW/AZW3 可作为后续扩展；若当前工具链不能直接提取，先明确说明需要转换，不要编造已读取内容。

优先读取当前书籍目录中的材料：

1. `extracted-text.md`
2. `source.*`
3. 已有 `speed-read.md` / `book-reading.md` / `reading-notes.md` / `slides-content.md`
4. 用户自己的 `notes-*.md`

如果缺少 `extracted-text.md`，尝试从 `source.*` 提取文本并保存。不能可靠提取时，说明原因并请求用户提供文本版或章节内容。

## 结构化提问

Book Lens Web UI 使用隐藏 fenced block 渲染问题卡片。需要用户选择时，输出：

```book_lens_question
{"questions":[{"id":"focus","header":"阅读重点","question":"你想优先读哪部分？（可多选）","options":[{"label":"核心观点","description":"先理解全书主张和论证线"},{"label":"章节脉络","description":"按目录梳理每章作用"},{"label":"概念术语","description":"解释重要概念和外文术语"},{"label":"实践启发","description":"提炼可行动的方法"}],"multiSelect":true}]}
```

输出问题块后立即停止正文，等待用户回答。每个问题必须包含 `id`、`header`、`question`、`options`、`multiSelect`。

## 模式路由

- 用户选择“速览”或要求快速了解：加载 `references/speed-read.md`
- 用户选择“精读”或要求系统读书笔记：加载 `references/book-reading.md`
- 用户选择“伴读”、外文书帮助、章节学习、难句解释：加载 `references/guided-reading.md`
- 用户选择“分享”或读书会/汇报：加载 `references/share.md`
- 用户要求“生成 skill / 把这本书变成技能”：加载 `references/book-to-skill.md`

## 写作原则

- 中文输出，必要时保留英文原词并给短中文解释。
- 区分“书中明确写到”和“基于上下文推断”。
- 不把书籍当论文处理：不要套用 baseline、dataset、metric、实验结果等论文模板。
- 对外文书，优先做术语表、难句解释和章节双语摘要，而不是整本逐句翻译。
- 读书笔记要保留页码、章节名或位置线索；没有页码时用章节标题定位。
