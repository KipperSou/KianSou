import { defineConfig } from './utils/defineConfig'
import { resolveSiteRuntimeConfig } from './utils/site'

const { siteUrl } = resolveSiteRuntimeConfig()

export default defineConfig({
  site: {
    url: siteUrl,
    title: "Kian's Notes",
    description: '一个用 Astro 构建的个人静态博客，记录代码、产品和长期思考。',
    keywords: 'Kian, blog, Astro, static blog, notes, writing',
    lang: 'zh-CN',
    favicon: '/favicon.ico',
    appleTouchIcon: '/apple-touch-icon.png',
  },
  author: {
    name: 'Kian',
    twitterId: '',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=240&q=80',
  },
  hero: {
    name: 'Kian',
    bio: '写代码，做产品，保持长期主义。',
    description: '分享项目复盘、技术实践和个人表达。',
    socials: [
      {
        name: 'Github',
        icon: 'icon-github',
        url: 'https://github.com/your-username/personal-blog',
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
      { light: '#F55555', dark: '#FCCF31' },
      { light: '#0396FF', dark: '#ABDCFF' },
      { light: '#fb7287', dark: '#99D8CF' },
      { light: '#F072B6', dark: '#FFF886' },
      { light: '#9F44D3', dark: '#E2B0FF' },
      { light: '#FF6666', dark: '#A1CCD1' },
      { light: '#F6416C', dark: '#838BC6' },
      { light: '#32CCBC', dark: '#90F7EC' },
      { light: '#33A6B8', dark: '#79F1A4' },
      { light: '#F55555', dark: '#FCCF31' },
    ],
    bg: {
      primary: { light: '#ffffff', dark: '#1c1c1e' },
      secondary: { light: '#f4f4f5', dark: '#27272a' },
    },
    text: {
      primary: { light: '#373a3c', dark: '#ffffff' },
      secondary: { light: '#71717a', dark: '#d1d5db' },
    },
    border: {
      primary: { light: '#e4e4e7', dark: '#3f3f46' },
      secondary: { light: '#e4e4e7', dark: '#3f3f46' },
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
      repo: 'your-username/personal-blog',
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
