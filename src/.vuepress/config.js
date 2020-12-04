const nav = require("./nav.js")
const sidebar = require("./sidebar.js")

module.exports = {
  base: '/vue-docs-custom/',
  title: 'Vue.js',
  description: 'Vue.js - The Progressive JavaScript Framework',
  head: [
    ['link', { href: 'https://fonts.googleapis.com/css?family=Inter:300,400,500,600|Open+Sans:400,600;display=swap', rel: 'stylesheet' }],
    /* 本地备份字体 */
    // ['link', {rel: 'stylesheet', href: './font/index.css'}]
    ['script', { src: '/icon/svg.js' }]
  ],
  themeConfig: {
    logo: '/logo.png',
    nav: nav,
    // repo: 'vuejs/docs-next',
    // editLinks: false,
    // editLinkText: 'Edit this on GitHub!',
    lastUpdated: '上次更新',
    docsDir: 'src',
    sidebarDepth: 0,
    sidebar: sidebar,
    smoothScroll: true,
    /* algolia: {
      indexName: 'vuejs-v3',
      appId: 'BH4D9OD16A',
      apiKey: 'bc6e8acb44ed4179c30d0a45d6140d3f'
    } */
  },
  plugins: [
    ['vuepress-plugin-table-of-contents'],
    ['@vuepress/back-to-top'],
    [
      'vuepress-plugin-zooming',
      {
        selector: '.page img',
        delay: 1000,
        options: {
          bgColor: 'black',
          zIndex: 10000,
        },
      },
    ],
    [
      '@vuepress/pwa',
      {
        serviceWorker: true,
        updatePopup: {
          '/': {
            message: 'New content is available.',
            buttonText: 'Refresh'
          }
        }
      }
    ],
    [
      'vuepress-plugin-container',
      {
        type: 'info',
        before: info =>
          `<div class="custom-block info"><p class="custom-block-title">${info}</p>`,
        after: '</div>'
      }
    ]
  ],
  markdown: {
    lineNumbers: true,
    /** @param {import('markdown-it')} md */
    extendMarkdown: md => {
      md.options.highlight = require('./markdown/highlight')(
        md.options.highlight
      )
    }
  }
}
