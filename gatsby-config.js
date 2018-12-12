module.exports = {
  siteMetadata: {
    title: "الدكتور نزار فقية",
    siteUrl: "https://www.drnizarfakih.com/"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/pages`,
        name: "pages"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/images`,
        name: "images"
      }
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        path: `${__dirname}/src/content`,
        name: "content"
      }
    },
    "gatsby-plugin-sharp",
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `الدكتور نزار فقية`,
        short_name: `د.نزار فقية`,
        start_url: `/`,
        background_color: `#f7f0eb`,
        theme_color: `#84E3D2`,
        display: `standalone`,
        icon: `src/images/logo.png` // This path is relative to the root of the site.
      }
    },
    "gatsby-transformer-sharp",
    {
      resolve: "gatsby-transformer-remark",
      options: {
        plugins: [
          {
            resolve: "gatsby-remark-better-embed-video",
            options: {
              width: 250
            }
          }
        ]
      }
    },
    {
      resolve: "gatsby-plugin-netlify-cms",
      options: {
        modulePath: `${__dirname}/src/cms/cms.js`
      }
    },
    "gatsby-plugin-styled-components",
    "gatsby-plugin-sitemap",
    "gatsby-plugin-offline",
    "gatsby-plugin-netlify" // make sure to keep it last in the array
  ]
};
