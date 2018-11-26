module.exports = {
  siteMetadata: {
    title: 'Wordpress Gatsby',
  },
  plugins: ['gatsby-plugin-react-helmet',
            'gatsby-plugin-sass',
    {
      resolve: "gatsby-source-wordpress",
        options: {
          baseUrl: "elliotmorris.xyz",
          protocol: "https",
          hostingWPCOM: false,
          useACF: false,
          verboseOutput: true,       
        },
      },
  ],
}