import React from 'react';
import Img from 'gatsby-image';
import styled from 'styled-components';

const ProductsStyles = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 4rem;
  grid-template-rows: auto auto 500px;
`;

const ProductStyle = styled.div`
  display: grid;
  @supports not (grid-template-columns: subgrid) {
    --rows: auto auto 1fr;
  }
  grid-template-columns: vars(--rows, subgrid);
  grid-row: span 2;
  grid-gap: 1rem;
  p {
    margin: 0;
  }
`;

function SingleProduct({
  product: {
    id,
    name,
    image: {
      asset: { fluid },
    },
  },
}) {
  return (
    <ProductStyle>
      <p>{name}</p>
      <Img fluid={fluid} alt={name} />
    </ProductStyle>
  );
}
export default function ProductList({ products }) {
  const p = products.map((product) => (
    <SingleProduct key={product.id} product={product} />
  ));
  return <ProductsStyles className="products">{p}</ProductsStyles>;
}
