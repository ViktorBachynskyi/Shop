import React, { useState } from 'react';
import { EditProduct } from '../EditProduct/EditProduct';
import { Modal } from '../Modal/Modal';
import './ProductCard.scss';

type Props = {
  product: Product,
  removeProduct: (event: React.MouseEvent<HTMLButtonElement>, id: number) => void,
  products: Product[],
  setProducts: (product: Product[]) => void,
};

export const ProductCard: React.FC<Props> = ({
  product,
  removeProduct,
  products,
  setProducts,
}) => {
  const [visibleDetails, setVisibleDetails] = useState(false);
  const [modalDelete, setModalDelete] = useState(false);

  const showHideDetails = () => {
    setVisibleDetails(!visibleDetails);
  };

  return (
    <div className="product-card">
      <div className="product-card__content">
        <div className="product-card__img-container">
          <img
            src={product.imageUrl}
            alt="product img"
            className="product-card__img"
          />
        </div>
        <p>
          {`Product: ${product.name}`}
        </p>
        {visibleDetails && (
          <>
            <p>{`Count: ${product.count}`}</p>
            <p>{`Size: ${product.size.width}x${product.size.height}`}</p>
            <p>{`Weight: ${product.weight}`}</p>
          </>
        )}
        <div className="product-card__buttons-container">
          <button
            type="button"
            onClick={showHideDetails}
          >
            Details
          </button>
          <EditProduct
            product={product}
            products={products}
            setProducts={setProducts}
          >

          </EditProduct>
          <button
            type="button"
            onClick={() => setModalDelete(true)}
          >
            Delete
          </button>
          <Modal modalActive={modalDelete} setModalActive={setModalDelete}>
            <div className="delete-product">
              <span className="delete-product__title">You sure you want to delete this product?</span>
              <div className="delete-product__buttons-container">
                <button
                  type="button"
                  onClick={(event) => removeProduct(event, product.id)}
                >
                  Delete
                </button>
                <button
                  type="button"
                  onClick={() => setModalDelete(false)}
                >
                  Cancel
                </button>
              </div>
            </div>
          </Modal>
        </div>
      </div>
    </div>
  );
};
