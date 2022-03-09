import React from 'react';
import { ProductCard } from '../ProductCard/ProductCard';
import './ProductList.scss';

type Props = {
  productsFromServer: Product[],
  removeProduct: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void,
  products: Product[],
  setProducts: (product: Product[]) => void,
};

export const ProductList: React.FC<Props> = ({
  productsFromServer,
  removeProduct,
  products,
  setProducts,
}) => {
  return (
    <ul>
      {productsFromServer.map(product => (
        <li key={product.id}>
          <ProductCard
            product={product}
            removeProduct={removeProduct}
            products={products}
            setProducts={setProducts}
          />
        </li>
      ))}
    </ul>
  );
};
