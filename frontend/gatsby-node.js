const path = require('path');

async function turnProductsIntoPages({ graphql, actions }) {
  // const { createPage } = actions;
  const productTemplate = path.resolve('./src/templates/Product.js');
  const { data } = await graphql`
    query {
      products: allSanityProduct {
        nodes {
          slug {
            current
          }
        }
      }
    }
  `;
  // data.nodes.products.forEach((edge) => {
  // console.log(edge);
  // createPage({
  // path: `${edge.node.slug}`,
  // component: blogPostTemplate,
  // context: {
  // title: edge.node.title,
  // },
  // });
  // });
  console.log(data);
}

export async function createPages(params) {
  await turnProductsIntoPages(params);
}
