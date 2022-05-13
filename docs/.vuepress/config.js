module.exports = {
  title: '不完全开源使用指南',
  description: '真正的无脑使用指南',
  head: [
    ['link', { rel: 'icon', href: '/favicon.png' }],
    ['meta', { name: 'keywords', content: '开源,opensource,git,github,gitee,codeing,doc,document,文档,中文文档,编程,人工智能,AI,大数据,bigdata,云计算,java,c#,c++,c,python,php,sql,swift,go,golang,js,javascript,css,html,elasticsearch,es,ELK,入门教程,计算机,IT,k8s,book,docker,系统架构' }]
  ],
  base: '/',
  markdown: {
    lineNumbers: true
  },
  plugins: [
    ['@vuepress/medium-zoom', {
      selector: '.page img',
      delay: 1000,
      options: {
        margin: 24
      }
    }],
    [
      '@vuepress/google-analytics', {
        'ga': 'UA-226868573-3'
      }
    ],
    [
      '@renovamen/vuepress-plugin-baidu-tongji', {
        'ba': '7d92404ff833d14674e677060218ec5e'
      }
    ],
    [
      '@vssue/vuepress-plugin-vssue', {
        platform: 'github',
        owner: 'dev2007',
        repo: 'gitalk-comment',
        clientId: '6852269af4df47405b4e',
        clientSecret: '65e33f2cbf43b13a37258667c63fa5d1aba615c2',
      }
    ]
  ],
  themeConfig: {
    logo: '/favicon.png',
    lastUpdated: '最后更新',
    nav: [
      { text: '首页', link: '/' },
      { text: 'MorTnon项目', link: 'https://project.mortnon.fun' },
      { text: 'Gitee', link: 'https://gitee.com/mortise-and-tenon/mortnon' }
    ],
    sidebar: [
      {
        title: '框架',
        path: '/framework/',
        children: [
          `/framework/springboot.html`
        ]
      },
      {
        title: '组件',
        path: '/lib/',
        children: [
          
        ]
      },
    ]

  }
};