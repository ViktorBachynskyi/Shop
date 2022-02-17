import React from 'react';
import { ProductCard } from '../ProductCard/ProductCard';

type Props = {
  productsFromServer: Product[],
  removeProduct: (prod: Product) => void,
};

export const ProductList: React.FC<Props> = (props) => {
  return (
    <ul>
      {props.productsFromServer.map(product => (
        <li key={product.id}>
          <ProductCard product={product} removeProduct={props.removeProduct} />
        </li>
      ))}
    </ul>
  );
};
