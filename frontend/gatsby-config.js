// import dotenv from 'dotenv';

const dotenv = require('dotenv');

dotenv.config({ path: '.env' });
module.exports = {
  siteMetadata: {
    title: 'Jamo Store',
    siteUrl: 'https://jamostore.com',
    description: 'Jamo store!',
    twitter: '@gemouhi',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'babel-plugin-styled-components',
    {
      resolve: `gatsby-plugin-postcss`,
      options: {
        // Accepts all options defined by `gatsby-plugin-postcss` plugin.
      },
    },
    {
      resolve: `gatsby-source-sanity`,
      options: {
        projectId: `in0kcvbu`,
        dataset: `production`,
        token: process.env.SANITY_TOKEN,
        graphqlTag: 'default',
        watchMode: true,
      },
    },
  ],
};
