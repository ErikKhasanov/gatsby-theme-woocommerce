module.exports = {
  siteMetadata: {
    title: `Gatsby Woocommerce`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-emotion`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
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
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: "gatsby-source-woocommerce",
      options: {
        // Base URL of Wordpress site
        api: "woo.gkdevil.in",
        // true if using https. false if nah.
        https: false,
        api_keys: {
          consumer_key: "",
          consumer_secret: "",
        },
        // Array of strings with fields you'd like to create nodes for...
        fields: ["products"],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Woocommerce Store`,
        short_name: `Woocommerce Store`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#a2466c`,
        display: `standalone`,
        icon: `src/images/gatsby-icon.png`,
      },
    },
    `gatsby-plugin-offline`,
  ],
}
