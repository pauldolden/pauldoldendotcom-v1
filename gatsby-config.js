module.exports = {
  siteMetadata: {
    title: 'dolden-dev',
    author: 'Paul Dolden',
    description: 'Full Stack Web/Mobile Developer',
  },
  plugins: [
    `gatsby-plugin-graphql-codegen`,
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-preload-fonts`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/posts/`,
        name: 'post',
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/src/images/posts`,
        name: 'postImage',
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
  ],
  flags: {
    FAST_DEV: false,
  },
};
