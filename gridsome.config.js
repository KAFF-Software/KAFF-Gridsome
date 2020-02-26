module.exports = {
  siteDescription: 'Indie Games Company',
  siteUrl: 'https://kaffsoftware.com',
  titleTemplate: 'KAFF | %s',
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
    {
      use: '@gridsome/source-filesystem',
      options: {
        typeName: 'GeneralInfo',
        path: './content/general.toml',
      }
    },
  ]
}
