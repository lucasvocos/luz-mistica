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
      resolve: `gatsby-plugin-styled-components`
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `LUZ MÍSTICA`,
        short_name: `LUZ MÍSTICA`,
        start_url: `/`,
        background_color: `hsl(300, 76%, 72%)`,
        theme_color: `#663399`,
        display: `standalone`,
        icon: `src/images/favicon/color-wheel.png`, // This path is relative to the root of the site.
        theme_color_in_head: false
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
    `gatsby-plugin-sass`,
    `gatsby-plugin-offline`
  ]
};
