module.exports = {
  title: '咸鱼Bot',
  description: '一个自用的Bot框架',
  head: [
    ['link', { rel: 'icon', href: '/favicon.ico' }],
  ],
  base: '/xianyu-robot-doc/',
  themeConfig: {
    smoothScroll: true,
    lastUpdated: '上一次编辑',
    docsDir: 'docs',
    docsBranch: 'master',
    repo: 'blacktunes/xianyu-robot',
    repoLabel: 'GitHub',
    docsRepo: 'xianyu-robot-doc',
    editLinks: true,
    editLinkText: '编辑此页',
    displayAllHeaders: false,
    sidebarDepth: 2,
    activeHeaderLinks: true,
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'Bot', link: '/bot/' },
      { text: 'Plugins', link: 'https://github.com/blacktunes/xianyu-robot-plugins' }
    ],
    sidebar: {
      '/guide/': [
        '',
        'plugin'
      ],
      '/bot/': [
        '',
        'data',
        'cqcode',
        'api',
        'event',
        'debug'
      ]
    }
  }
}
