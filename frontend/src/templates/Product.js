import { graphql } from 'gatsby';
import React from 'react';
import Img from 'gatsby-image';
import SEO from '../components/SEO';

export default function ProductTemplate({
  data: {
    product: {
      name,
      image: {
        asset: { fluid },
      },
    },
  },
}) {
  return (
    <div>
      <SEO title={name} image={fluid?.src} />
      <Img fluid={fluid} alt={name} />
      <h2 className="mark">{name}</h2>
    </div>
  );
}

export const query = graphql`
  query($slug: String!) {
    product: sanityProduct(slug: { current: { eq: $slug } }) {
      id
      name
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
`;
