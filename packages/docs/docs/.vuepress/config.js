module.exports = {
  title: 'Boilerplate Docs',
  base: '/',
  description:
    'Boilerplate of a modern tech stack, along with opinionated documentation.',
  markdown: {
    config: md => {
      md.use(require('markdown-it-task-lists'))
    }
  },
  themeConfig: {
    docsDir: 'docs',
    repo: 'https://github.com/overvues/boilerplate',
    editLinks: false,
    editLinkText: 'Propose content change in GitHub.',
    lastUpdated: 'Last Updated', // string | boolean
    sidebarDepth: 2,
    nav: [
      { text: 'Topics', link: '/topics/intro' },
      { text: 'Roadmap', link: '/roadmap/intro' }
    ],
    sidebar: {
      '/topics/': [
        'intro',
        'personal-web-security',
        'api-keys',
        'project-structure',
        'testing',
        'formating'
      ],
      '/roadmap/': ['intro'],
      '/': ['about']
    }
  }
}
