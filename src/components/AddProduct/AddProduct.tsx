import React, { useState } from 'react';
import { addProduct } from '../../api/products';
import { Modal } from '../Modal/Modal';
import './AddProduct.scss';

type Props = {
  products: Product[],
  setProducts: (product: Product[]) => void,
};

export const AddProduct: React.FC<Props> = ({ products, setProducts }) => {
  const [newProduct, setNewProduct] = useState({
    id: 0,
    imageUrl: '',
    name: '',
    count: 0,
    size: {
      width: '',
      height: '',
    },
    weight: '',
    comments: [],
  });
  const [modalAddForm, setModalAddForm] = useState(false);

  const clearInputs = () => {
    setNewProduct({
      id: 0,
      imageUrl: '',
      name: '',
      count: 0,
      size: {
        width: '',
        height: '',
      },
      weight: '',
      comments: [],
    });
  };

  const inputHander = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewProduct({
      ...newProduct,
      id: Math.random(),
      [event.target.name]: event.target.value,
    });
  };

  const inputSizeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewProduct({
      ...newProduct,
      id: Math.random(),
      size: {
        ...newProduct.size,
        [event.target.name]: event.target.value,
      },
    });
  };

  const addNewProduct = async (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    await addProduct(newProduct);

    setProducts([...products, newProduct]);
    clearInputs();
    setModalAddForm(false);
  };

  return (
    <>
      <button
        type="button"
        onClick={() => setModalAddForm(true)}
      >
        Add product
      </button>
      <Modal modalActive={modalAddForm} setModalActive={setModalAddForm}>
        <form className="add-product-form" onSubmit={addNewProduct}>
          <span className="add-product-form__input-title">Product Name: </span>
          <input
            value={newProduct.name}
            name="name"
            type="text"
            placeholder=""
            required
            autoComplete="off"
            onChange={inputHander}
          />
          <span className="add-product-form__input-title">ImageUrl: </span>
          <input
            value={newProduct.imageUrl}
            name="imageUrl"
            type="text"
            placeholder=""
            required
            autoComplete="off"
            onChange={inputHander}
          />
          <span className="add-product-form__input-title">Count: </span>
          <input
            value={newProduct.count}
            name="count"
            type="text"
            placeholder=""
            required
            autoComplete="off"
            onChange={inputHander}
          />
          <span className="add-product-form__input-title">Width: </span>
          <input
            value={newProduct.size.width}
            name="width"
            type="text"
            placeholder=""
            required
            autoComplete="off"
            onChange={inputSizeHandler}
          />
          <span className="add-product-form__input-title">Height: </span>
          <input
            value={newProduct.size.height}
            name="height"
            type="text"
            placeholder=""
            required
            autoComplete="off"
            onChange={inputSizeHandler}
          />
          <span className="add-product-form__input-title">Weight: </span>
          <input
            value={newProduct.weight}
            name="weight"
            type="text"
            placeholder=""
            required
            autoComplete="off"
            onChange={inputHander}
          />
          <button
            type="submit"
            className="add-product-form__button-add"
          >
            Add
          </button>
        </form>
      </Modal>
    </>
  );
};
