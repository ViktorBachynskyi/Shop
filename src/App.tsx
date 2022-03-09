/* eslint-disable linebreak-style */
import React, { useEffect, useState } from 'react';
import './App.scss';
import { ProductList } from './components/ProductList/ProductList';
import { AddProduct } from './components/AddProduct/AddProduct';
import { deleteProduct, getProduct } from './api/products';

export const App: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => {
    const fetchProduct = async () => {
      const productsFromServer = await getProduct();

      setProducts(productsFromServer);
    };

    fetchProduct();
  }, []);

  const changeSelectedValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  const removeProduct = async (event: React.MouseEvent<HTMLButtonElement>, id: number) => {
    await deleteProduct(id);

    setProducts(products.filter(el => el.id !== id));
  };

  const filterBySelect = () => {
    switch (selectedValue) {
      case 'sortByCount':
        return products.sort((a, b) => b.count - a.count);

      default:
        return products.sort((a, b) => a.name.localeCompare(b.name));
    }
  };

  return (
    <div className="shop">
      <h1 className="shop__title">Shop</h1>
      <h2>List of products</h2>
      <div className="shop__control-panel">
        <form>
          Sort:
          {' '}
          <select
            value={selectedValue}
            onChange={changeSelectedValue}
          >
            <option
              value="sortAlphabetically"
            >
              Alphabetically
            </option>
            <option value="sortByCount">
              By count
            </option>
          </select>
        </form>
        <AddProduct
          products={products}
          setProducts={setProducts}
        />
      </div>
      <ProductList
        productsFromServer={filterBySelect()}
        removeProduct={removeProduct}
        products={products}
        setProducts={setProducts}
      />
    </div>
  );
};
