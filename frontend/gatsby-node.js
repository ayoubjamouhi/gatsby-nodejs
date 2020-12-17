const path = require('path');

async function turnProductsIntoPages({ graphql, actions }) {
  const { createPage } = actions;
  const productTemplate = path.resolve('./src/templates/Product.js');
  const { data } = await graphql(`
    query {
      products: allSanityProduct {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `);
  data.products.nodes.forEach((edge) => {
    createPage({
      path: `product/${edge.slug.current}`,
      component: productTemplate,
      context: {
        slug: edge.slug.current,
      },
    });
  });
}

export async function createPages(params) {
  await turnProductsIntoPages(params);
}
