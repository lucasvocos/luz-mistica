require("dotenv").config();
module.exports = {
  siteMetadata: {
    title: `LUZ MÍSTICA`,
    description: `Luz Mística // Mystic Light is a color + light therapy app`,
    author: `Lucas Vocos <lucas@buena-suerte.studio>`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/favicon/color-wheel.png` // This path is relative to the root of the site.
      }
    },
    {
      resolve: "gatsby-source-sanity",
      options: {
        projectId: process.env.REACT_APP_SANITY_PROJECT_ID,
        dataset: process.env.REACT_APP_SANITY_DATASET,
        token: process.env.REACT_APP_SANITY_API_TOKEN
      }
    },
    `gatsby-plugin-sass`
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
};