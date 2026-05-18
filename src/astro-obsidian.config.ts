import { defineConfig } from './utils/defineConfig'
import { resolveSiteRuntimeConfig } from './utils/site'

const { siteUrl } = resolveSiteRuntimeConfig()

export default defineConfig({
  site: {
    url: siteUrl,
    title: "Kian's Notes",
    description: '一个用 Astro 构建的个人静态博客，记录代码、产品、项目复盘和长期思考。',
    keywords: 'Kian, blog, Astro, static blog, notes, writing',
    lang: 'zh-CN',
    favicon: '/favicon.ico',
    appleTouchIcon: '/apple-touch-icon.png',
  },
  author: {
    name: 'Kian',
    twitterId: '',
    avatar: 'avatar-kian.png',
  },
  hero: {
    name: 'Kian',
    bio: '写代码，做产品，保持长期主义。',
    description: '分享项目复盘、技术实践和个人表达。',
    socials: [
      {
        name: 'Github',
        icon: 'icon-github',
        url: 'https://github.com/KipperSou/KianSou',
        color: 'rgb(24, 23, 23)',
      },
      {
        name: 'Email',
        icon: 'icon-mail',
        url: 'mailto:you@example.com',
        color: 'rgb(212, 70, 56)',
      },
    ],
    yiyan: '先把想法写下来，再让作品替自己说话。',
  },
  color: {
    accent: [
      { light: '#2563EB', dark: '#60A5FA' },
      { light: '#0F766E', dark: '#5EEAD4' },
      { light: '#334155', dark: '#CBD5E1' },
      { light: '#1D4ED8', dark: '#93C5FD' },
      { light: '#166534', dark: '#86EFAC' },
      { light: '#0F172A', dark: '#94A3B8' },
      { light: '#1E40AF', dark: '#7DD3FC' },
      { light: '#155E75', dark: '#67E8F9' },
    ],
    bg: {
      primary: { light: '#fbfcfe', dark: '#050505' },
      secondary: { light: '#eef2f7', dark: '#111111' },
    },
    text: {
      primary: { light: '#1f2937', dark: '#f9fafb' },
      secondary: { light: '#64748b', dark: '#cbd5e1' },
    },
    border: {
      primary: { light: '#d7dee8', dark: '#262626' },
      secondary: { light: '#e5ebf3', dark: '#3f3f46' },
    },
  },
  menus: [
    {
      name: '首页',
      link: '/',
      icon: 'icon-pantone',
    },
    {
      name: '归档',
      link: '/archives',
      icon: 'icon-archive',
    },
    {
      name: '项目',
      link: '/projects',
      icon: 'icon-flask',
    },
    {
      name: '关于',
      link: '/about',
      icon: 'icon-ghost',
    },
    {
      name: '友链',
      link: '/friends',
      icon: 'icon-hearts',
    },
  ],
  posts: {
    perPage: 10,
  },
  footer: {
    startTime: '2026-05-15T00:00:00Z',
  },
  comments: {
    enable: false,
    giscus: {
      repo: 'KipperSou/KianSou',
      repoId: '',
      category: 'Announcements',
      categoryId: '',
    },
    waline: {
      serverURL: '',
    },
  },
  sponsor: {
    wechat: '',
    alipay: '',
    paypal: '',
    github: '',
    patreon: '',
    buymeacoffee: '',
  },
  analytics: {
    enable: false,
    google: {
      measurementId: '',
    },
    umami: {
      serverUrl: '',
      websiteId: '',
    },
    microsoftClarity: {
      projectId: '',
    },
  },
})
