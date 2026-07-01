# 伴读模式 — Guided Reading

## 目标

像读书搭子一样陪用户读一本书：拆章节、解释概念、处理外文难句、提出问题、记录进度。

保存到：

```text
book-notes/<name>/reading-notes.md
```

## 流程

1. 读取已有 `speed-read.md` 或先生成简短速览。
2. 用结构化提问确认伴读目标：章节推进、外文辅助、概念解释、实践应用、考试/汇报准备。
3. 建立 `reading-notes.md`，记录阅读目标和当前进度。
4. 每轮围绕一个章节或主题输出：
   - 本节在全书中的作用
   - 核心观点
   - 难懂概念
   - 关键句解释
   - 反思问题
   - 可追加到笔记的内容
5. 用户追问时直接更新笔记。

## 结构化提问模板

```book_lens_question
{"questions":[{"id":"goal","header":"伴读目标","question":"这轮你想怎么读？（可多选）","options":[{"label":"按章节推进","description":"从当前章节开始逐步读"},{"label":"外文辅助","description":"解释术语、长难句和章节摘要"},{"label":"概念解释","description":"把抽象概念讲清楚"},{"label":"实践应用","description":"转成行动清单和案例"}],"multiSelect":true},{"id":"pace","header":"阅读节奏","question":"你希望每轮读多深？","options":[{"label":"轻量","description":"每章核心观点和问题"},{"label":"标准","description":"观点、论证、案例和反思"},{"label":"深入","description":"逐节拆解并追问边界"}],"multiSelect":false}]}
```

## 笔记结构

```markdown
# <书名> — 伴读笔记

> 目标：...
> 当前进度：...

## 阅读计划

## 章节笔记

## 概念表

## 外文难句

## 我的追问

## 行动与复习
```

## 要求

- 每轮完成后保存文件，并提示路径。
- 不要一次性写完全书，除非用户明确要求。
- 外文书不做整本逐句翻译，优先解释影响理解的段落、句子和术语。
