# 分享模式 — Share

## 目标

帮助用户准备读书会、团队分享或课程讲解。输出结构化分享内容，后续可交给 slides 工具生成演示稿。

保存到：

```text
book-notes/<name>/slides-content.md
```

## 先确认分享场景

```book_lens_question
{"questions":[{"id":"audience","header":"听众","question":"这次分享面向谁？","options":[{"label":"读书会","description":"轻松讨论，重视观点和问题"},{"label":"团队分享","description":"强调实践启发和行动建议"},{"label":"课程讲解","description":"结构清晰，适合学习"},{"label":"个人复盘","description":"沉淀理解和后续计划"}],"multiSelect":false},{"id":"duration","header":"时长","question":"预计分享多久？","options":[{"label":"10 分钟","description":"只讲核心观点"},{"label":"20 分钟","description":"观点、结构和案例"},{"label":"40 分钟","description":"深入讨论和互动问题"}],"multiSelect":false}]}
```

## 输出结构

```markdown
# <书名> — 分享内容

## 分享定位

## 叙事主线

## Slide 1: 开场

## Slide 2: 这本书试图回答的问题

## Slide 3: 作者的核心主张

## Slide 4-6: 关键章节或模型

## Slide 7: 最有价值的案例/摘录

## Slide 8: 争议与局限

## Slide 9: 对听众的启发

## Slide 10: 讨论问题

## Speaker Notes
```

## 要求

- 每页包含标题、页面要点、讲者备注。
- 不要把精读笔记压缩成密密麻麻的 slide。
- 分享主线必须清楚：为什么读、讲什么、听众带走什么。
- 讨论问题要能引发观点碰撞，不只问事实记忆。
