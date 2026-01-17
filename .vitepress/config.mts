import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  srcDir: "docs",
  
  title: "Cjsah的个人主页",
  description: "Cjsah's Blog",

  head: [['link', { rel: 'icon', href: '/avator.png' }]],

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/Cjsah' }
    ],

    footer: {
      message: 'Released under the CC BY-NC-SA 4.0 License.',
      copyright: 'Copyright © 2026-present Cjsah<br/><a href="https://beian.miit.gov.cn/">黑ICP备2020005031号</a>'
    }
  }
})
