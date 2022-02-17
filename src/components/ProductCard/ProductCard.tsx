import React, { useState } from 'react';
import './ProductCard.scss';

type Props = {
  product: Product,
  removeProduct: (prod: Product) => void,
};

export const ProductCard: React.FC<Props> = (props) => {
  const [visibleDetails, setVisibleDetails] = useState(false);

  const showHideDetails = () => {
    setVisibleDetails(!visibleDetails);
  };

  return (
    <div className="product-card">
      <div className="product-card__content">
        <div className="product-card__img-container">
          <img
            src={props.product.imageUrl}
            alt="product img"
            className="product-card__img"
          />
        </div>
        <p>
          {`Product: ${props.product.name}`}
        </p>
        {visibleDetails && (
          <>
            <p>{`Count: ${props.product.count}`}</p>
            <p>{`Size: ${props.product.size.width}x${props.product.size.height}`}</p>
            <p>{`Weight: ${props.product.weight}`}</p>
          </>
        )}
        <button
          type="button"
          onClick={showHideDetails}
        >
          Details
        </button>
        <button
          type="button"
          onClick={() => props.removeProduct(props.product)}
        >
          Delete
        </button>
      </div>
    </div>
  );
};
