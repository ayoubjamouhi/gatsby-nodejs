import React from 'react';
import { graphql } from 'gatsby';
import ProductList from '../components/ProductList';

export default function Products({ data }) {
  return (
    <>
      <p>Products</p>
      <ProductList products={data.products.nodes} />
    </>
  );
}

export const query = graphql`
  query ProductsQuery {
    products: allSanityProduct {
      nodes {
        name
        id
        slug {
          current
        }
        image {
          asset {
            fluid(maxWidth: 400) {
              ...GatsbySanityImageFluid
            }
          }
        }
      }
    }
  }
`;
