module.exports = {
  title: 'vuepress源码导读',
  description: 'vuepress源码导读',
  base: '/dive-in-vuepress/',
  themeConfig: {
    // repo: 'vuejs/vuepress',
    editLinks: true,
    docsDir: 'docs',
    nav: [
      {
        text: '源码解读',
        link: '/source/',
      },
      {
        text: '自定义主题',
        link: '/theme/'
      },
      {
        text: '疑惑解答',
        link: '/qa/'
      },
      {
        text: '关于我',
        link: '/about/'
      }
    ],
    sidebar: {
      '/source/': [
        {
          title: '源码解读',
          collapsable: false,
          children: [
            '',
            'chapter1',
            'chapter2'
          ]
        }
      ]
    }
  }
}