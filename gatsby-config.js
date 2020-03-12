module.exports = {
  siteMetadata: {
    siteTitle: `John Super Site`,
    defaultTitle: `John Super Site`,
    siteTitleShort: `John Super Site`,
    siteDescription: `John Super Site`,
    siteUrl: `https://rocketdocs.netlify.com`,
    siteAuthor: `John Site`,
    siteImage: `/banner.png`,
    siteLanguage: `en`,
    themeColor: `#7159c1`,
    footer: `John Site`,
  },
  plugins: [
    {
      resolve: `@rocketseat/gatsby-theme-docs`,
      options: {
        configPath: `src/config`,
        docsPath: `src/docs`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Rocketseat Gatsby Themes`,
        short_name: `RS Gatsby Themes`,
        start_url: `/`,
        background_color: `#ffffff`,
        display: `standalone`,
        icon: `static/favicon.png`,
      },
    },
    `gatsby-plugin-sitemap`,
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: `UA-99997611-9`,
      },
    },
    {
      resolve: `gatsby-plugin-canonical-urls`,
      options: {
        siteUrl: `https://rocketdocs.netlify.com`,
      },
    },
    `gatsby-plugin-offline`,
  ],
};
