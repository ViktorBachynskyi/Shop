import React, { useEffect, useState } from 'react';
import { Modal } from '../Modal/Modal';
import './EditProduct.scss';

type Props = {
  product: Product,
  products: Product[],
  setProducts: (book: Product[]) => void,
};

export const EditProduct: React.FC<Props> = ({
  product,
  products,
  setProducts,
}) => {
  const [editingProduct, setEditingProduct] = useState(product);
  const [modalEditForm, setModalEditForm] = useState(false);

  useEffect(() => {
    if (product) {
      setEditingProduct(product);
    }
  }, [product]);

  const inputHander = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditingProduct({
      ...editingProduct,
      [event.target.name]: event.target.value,
    });
  };

  const inputSizeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEditingProduct({
      ...editingProduct,
      size: {
        ...editingProduct.size,
        [event.target.name]: event.target.value,
      },
    });
  };

  const editProduct = () => {
    const index = products.find((book: Product) => book.id === editingProduct.id);

    if (index) {
      products.splice(products
        .findIndex((book: Product) => book.id === editingProduct.id), 1, editingProduct);

      setProducts(
        [...products],
      );
    }

    setModalEditForm(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setModalEditForm(true)}
      >
        Edit
      </button>
      <Modal modalActive={modalEditForm} setModalActive={setModalEditForm}>
        <form className="edit-product-form">
          <span className="edit-product-form__input-title">Product Name: </span>
          <input
            value={editingProduct.name}
            name="name"
            type="text"
            placeholder=""
            required
            autoComplete="off"
            onChange={inputHander}
          />
          <span className="edit-product-form__input-title">ImageUrl: </span>
          <input
            value={editingProduct.imageUrl}
            name="imageUrl"
            type="text"
            placeholder=""
            required
            autoComplete="off"
            onChange={inputHander}
          />
          <span className="edit-product-form__input-title">Count: </span>
          <input
            value={editingProduct.count}
            name="count"
            type="text"
            placeholder=""
            required
            autoComplete="off"
            onChange={inputHander}
          />
          <span className="edit-product-form__input-title">Width: </span>
          <input
            value={editingProduct.size.width}
            name="width"
            type="text"
            placeholder=""
            required
            autoComplete="off"
            onChange={inputSizeHandler}
          />
          <span className="edit-product-form__input-title">Height: </span>
          <input
            value={editingProduct.size.height}
            name="height"
            type="text"
            placeholder=""
            required
            autoComplete="off"
            onChange={inputSizeHandler}
          />
          <span className="edit-product-form__input-title">Weight: </span>
          <input
            value={editingProduct.weight}
            name="weight"
            type="text"
            placeholder=""
            required
            autoComplete="off"
            onChange={inputHander}
          />
          <button
            type="button"
            className="edit-product-form__button-add"
            onClick={editProduct}
          >
            Edit
          </button>
        </form>
      </Modal>
    </>
  );
};
