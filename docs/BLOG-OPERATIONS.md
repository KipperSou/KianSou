# 博客运营清单

这份清单只回答一件事：日常维护 `personal-blog` 时，具体该改哪些文件。

## 第一次初始化

第一次把博客改成你自己的站，优先检查这些文件：

- [src/astro-obsidian.config.ts](D:\MyProject\CodeX\personal-blog\src\astro-obsidian.config.ts)
- [src/content/spec/about.md](D:\MyProject\CodeX\personal-blog\src\content\spec\about.md)
- [src/content/spec/projects.md](D:\MyProject\CodeX\personal-blog\src\content\spec\projects.md)
- [src/content/spec/friends.md](D:\MyProject\CodeX\personal-blog\src\content\spec\friends.md)

要改的内容：

- 站点标题和描述
- GitHub 链接和邮箱
- 首页文案
- 关于页自我介绍
- 项目页说明
- 友链页说明

## 发一篇新文章

每次发文，核心只动一个目录：

- [src/content/posts](D:\MyProject\CodeX\personal-blog\src\content\posts)

### 需要新建的文件

新增一个 Markdown 文件，例如：

- `src/content/posts/2026-05-my-new-post.md`

### 一篇文章最少要写的字段

参考 [hello-world.md](D:\MyProject\CodeX\personal-blog\src\content\posts\hello-world.md)：

```md
---
title: 文章标题
date: 2026-05-16
summary: 一句话摘要
category: 分类名
tags:
  - 标签1
  - 标签2
comments: false
draft: false
sticky: 0
---
```

### 字段怎么用

- `title`：文章标题，必填
- `date`：发布日期，必填
- `summary`：首页列表摘要，建议填
- `category`：文章分类，建议填
- `tags`：标签数组，建议填
- `comments`：这篇文章是否开评论
- `draft`：`true` 表示草稿，不会正式发布
- `sticky`：`0` 为普通文章，大于 `0` 可置顶
- `cover`：可选，文章封面图 URL
- `lastMod`：可选，最后修改时间

### 发文后的发布动作

```powershell
git add src/content/posts
git commit -m "feat: publish new post"
git push origin main
```

推送后 GitHub Actions 会自动重新部署。

## 修改一篇旧文章

只改对应文章文件：

- `src/content/posts/那篇文章的文件名.md`

建议同时补上：

- `lastMod`
- `summary`
- `tags`

提交方式：

```powershell
git add src/content/posts/文章文件.md
git commit -m "docs: update post"
git push origin main
```

## 更新关于页

只改：

- [src/content/spec/about.md](D:\MyProject\CodeX\personal-blog\src\content\spec\about.md)

适合更新的内容：

- 个人介绍
- 工作方向
- 技术栈
- 联系方式
- 当前正在做什么

## 新增或修改项目

项目列表数据目录：

- [src/content/projects](D:\MyProject\CodeX\personal-blog\src\content\projects)

每个项目一个 YAML 文件，例如：

- [personal-blog.yaml](D:\MyProject\CodeX\personal-blog\src\content\projects\personal-blog.yaml)

项目字段格式：

```yaml
title: 项目名
description: 项目简介
image: https://example.com/project-cover.png
link: https://github.com/your/repo
```

如果是修改项目页说明，再改：

- [src/content/spec/projects.md](D:\MyProject\CodeX\personal-blog\src\content\spec\projects.md)

## 新增友链

友链数据目录：

- [src/content/friends](D:\MyProject\CodeX\personal-blog\src\content\friends)

每个友链一个 YAML 文件：

```yaml
title: 对方站点名
description: 一句话介绍
avatar: https://example.com/avatar.png
link: https://example.com
```

如果要改页面说明，再改：

- [src/content/spec/friends.md](D:\MyProject\CodeX\personal-blog\src\content\spec\friends.md)

## 什么时候需要改全站配置

只在这些场景改：

- 换博客标题
- 换头像
- 改首页文案
- 改 GitHub、邮箱、评论配置
- 改配色

对应文件：

- [src/astro-obsidian.config.ts](D:\MyProject\CodeX\personal-blog\src\astro-obsidian.config.ts)

## 什么时候不用动代码

正常写博客时，一般不需要改这些：

- `src/components/*`
- `src/layouts/*`
- `src/utils/*`
- [astro.config.ts](D:\MyProject\CodeX\personal-blog\astro.config.ts)
- [.github/workflows/deploy.yml](D:\MyProject\CodeX\personal-blog.github\workflows\deploy.yml)

这些是站点结构、构建和部署层，不是日常内容层。

## 发布前自检

每次发文前看一遍：

- 文章是否有标题
- `date` 是否正确
- `draft` 是否为 `false`
- `summary` 是否已填写
- 标签是否过多
- 链接和图片是否能打开

## 最简运营路径

如果你只想稳定更新，长期只做这四件事：

1. 在 `src/content/posts` 持续发文
2. 偶尔更新 `about.md`
3. 有代表性作品时更新 `projects`
4. 每次改完直接 `push` 到 GitHub
