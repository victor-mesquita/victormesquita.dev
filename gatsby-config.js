/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  siteMetadata: {
    title: `Victor Mesquita | Fullstack developer`,
  },
  pathPrefix: '/',
  plugins: [
    'gatsby-plugin-sass',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-postcss',
    'gatsby-transformer-yaml',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `data`,
        path: `${__dirname}/src/data/`,
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        typeName: 'GitHub',
        fieldName: 'github',
        url: 'https://api.github.com/graphql',
        headers: {
          Authorization: `bearer ${
            process.env.NODE_ENV == 'production'
              ? 'cee713e97aec68b0bb7b78c7fa5b566da52bd6df'
              : 'cee713e97aec68b0bb7b78c7fa5b566da52bd6df'
          }`,
        },
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `VictorMesquita`,
        short_name: `vm`,
        start_url: `/`,
        icon: `static/icon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-firebase',
      options: {
        credentials: {
          apiKey: process.env.GA_API_KEY,
          authDomain: process.env.GA_AUTH_DOMAIN,
          databaseURL: process.env.GA_DATABASE_URL,
          projectId: process.env.GA_PROJECT_ID,
          storageBucket: process.env.GA_STORAGE_BUCKET,
          messagingSenderId: process.env.GA_MESSAGING_SENDER_ID,
          appId: process.env.GA_APP_ID,
          measurementId: process.env.GA_MEASUREMENT_ID,
        },
      },
    },
  ],
}
