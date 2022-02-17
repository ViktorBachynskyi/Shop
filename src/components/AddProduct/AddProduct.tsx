import React, { useState } from 'react';

type Props = {
  products: Product[],
  setProducts: (product: Product[]) => void,
};

export const AddProduct: React.FC<Props> = (props) => {
  const [showForm, setAddForm] = useState(false);
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

  const toggleForm = () => {
    setAddForm(!showForm);
  };

  const inputHander = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewProduct({
      ...newProduct,
      id: props.products.length + 1,
      [event.target.name]: event.target.value,
    });
  };

  const inputSizeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewProduct({
      ...newProduct,
      id: props.products.length + 1,
      size: {
        ...newProduct.size,
        [event.target.name]: event.target.value,
      },
    });
  };

  const addProduct = (event: React.ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();

    props.setProducts([...props.products, newProduct]);
    // eslint-disable-next-line no-console
    console.log(newProduct);
  };

  return (
    <>
      <button
        type="button"
        onClick={toggleForm}
      >
        {showForm ? 'Close' : 'Add product'}
      </button>
      {showForm && (
        <form className="shop__addForm" onSubmit={addProduct}>
          Product Name:
          <input
            name="name"
            type="text"
            placeholder=""
            required
            autoComplete="off"
            onChange={inputHander}
          />
          ImageUrl:
          <input
            name="imageUrl"
            type="text"
            placeholder=""
            required
            autoComplete="off"
            onChange={inputHander}
          />
          Count:
          <input
            name="count"
            type="text"
            placeholder=""
            required
            autoComplete="off"
            onChange={inputHander}
          />
          Width:
          <input
            name="width"
            type="text"
            placeholder=""
            required
            autoComplete="off"
            onChange={inputSizeHandler}
          />
          Height:
          <input
            name="height"
            type="text"
            placeholder=""
            required
            autoComplete="off"
            onChange={inputSizeHandler}
          />
          Weight:
          <input
            name="weight"
            type="text"
            placeholder=""
            required
            autoComplete="off"
            onChange={inputHander}
          />
          {showForm && (
            <button
              type="submit"
            >
              Add
            </button>
          )}
        </form>
      )}
    </>
  );
};
