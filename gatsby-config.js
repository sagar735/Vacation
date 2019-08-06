module.exports = {
  siteMetadata: {
    title: `Shellino vacations`,
	description: `This is the tour and travel company based in Jalgoan, Maharashtra`,
	author:`Sagar735`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          `Roboto:400,400i,700 700i`,
          `Open Sans:400,400i,700 700i`,
          `material icons`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          name: `images`,
          path: `${__dirname}/src/`,
        },
      },
    {
      resolve: `gatsby-plugin-manifest`,
		options: {
			name: `gatsby-starter-default`,
			start_url: `/`,
			background_color: `#663399`,
			theme_color: `#663399`,
			display: `minimal-ui`,
			icon: `src/Assets/Logo/android-icon-48x48.png`, // This path is relative to the root of the site.
		}
    }
  ],
}
