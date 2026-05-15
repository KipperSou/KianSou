# Personal Blog

一个基于 [astro-obsidian](https://github.com/linaaaqi/astro-obsidian) 二次构建的个人静态博客，适合部署到 GitHub Pages，也可以后续切到自定义域名。

## 技术栈

- Astro 5
- React 18
- Tailwind CSS
- Markdown content collections
- GitHub Actions + GitHub Pages

## 已做的改造

- 保留原模板的文章、归档、项目、关于页结构
- 评论系统默认关闭，首次部署不依赖第三方服务
- 站点 URL 和 base path 支持自动适配 GitHub Pages
- 已添加 `.github/workflows/deploy.yml`，推送到默认分支即可自动发布

## 本地开发

建议使用 Node 20 或 22，并启用 `pnpm`。

```bash
pnpm install
pnpm dev
```

构建生产版本：

```bash
pnpm build
pnpm preview
```

## 关键配置

主要站点信息在 `src/astro-obsidian.config.ts`：

- 站点标题、描述、关键词
- 个人信息与社交链接
- 首页 Hero 文案
- 菜单与评论设置

内容目录：

- `src/content/posts`：博客文章
- `src/content/projects`：项目展示
- `src/content/spec/about.md`：关于页
- `src/content/spec/friends.md`：友链页说明

## GitHub Pages 部署

1. 新建一个 GitHub 仓库，例如 `personal-blog`
2. 把当前目录代码推到该仓库默认分支
3. 在 GitHub 仓库的 `Settings > Pages` 中将 source 设为 `GitHub Actions`
4. 推送后等待 `deploy` 工作流完成

这个项目会自动处理两种场景：

- 用户站点：`https://your-username.github.io`
- 项目站点：`https://your-username.github.io/personal-blog`

## 自定义域名

如果后续要绑定独立域名，建议同时做两件事：

1. 在仓库 `Settings > Pages` 中填写自定义域名
2. 新增两个仓库变量

```text
PUBLIC_SITE_URL=https://blog.yourdomain.com
PUBLIC_BASE_PATH=
```

如果不买域名，直接使用 GitHub Pages 默认域名也完全可用。
