import type { GatsbyConfig } from "gatsby";

require("dotenv").config({
  path: '.env',
})

const config: GatsbyConfig = {
  siteMetadata: {
    siteUrl: `https://www.yourdomain.tld`,
    title: `BN Gallery`,
    description: `Gallery for Nikolett Bohus' paintings`,
    image: `src/images/icon.png`,
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `BN Gallery`,
        short_name: `BN Gallery`,
        description: `Gallery for Nikolett Bohus' paintings`,
        lang: `en`,
        display: `standalone`,
        icon: `src/images/icon.png`,
        start_url: `/`,
        background_color: `#ffffff`,
        theme_color: `#fff`,
      },
    },
    ],
}

export default config
