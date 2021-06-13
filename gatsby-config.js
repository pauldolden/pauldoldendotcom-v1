module.exports = {
  siteMetadata: {
    title: 'dolden-dev',
    author: 'Paul Dolden',
    description: 'Full Stack Web/Mobile Developer',
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts`,
        name: 'post',
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        root: __dirname,
      },
    },
    {
      resolve: 'gatsby-plugin-apollo',
      options: {
        uri: 'http://localhost:8000/___graphql',
      },
    },
    `gatsby-plugin-graphql-codegen`,
    'gatsby-plugin-styled-components',
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-preload-fonts',
  ],
};
