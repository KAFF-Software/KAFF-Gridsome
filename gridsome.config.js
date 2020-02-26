module.exports = {
  siteName: 'KAFF Software',
  siteDescription: 'Indie Games Company',
  siteUrl: 'https://kaffsoftware.com',
  titleTemplate: 'KAFF | %s',
  configureWebpack: {
    mode: 'development'
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Members',
        path: './content/members/*.toml',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'SocialIcon',
        path: './content/social/*.toml',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'Article',
        path: './content/articles/*.toml',
      }
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'FaqItem',
        path: './content/faq/*.toml',
      }
    },
  ]
}
