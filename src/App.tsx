/* eslint-disable linebreak-style */
import React, { useState } from 'react';
import './App.scss';
import productsFromServer from './api/products';
import { ProductList } from './components/ProductList/ProductList';
import { AddProduct } from './components/AddProduct/AddProduct';

export const App: React.FC = () => {
  const [products, setProducts] = useState(productsFromServer);
  const [selectedValue, setSelectedValue] = useState('');

  const changeSelectedValue = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setSelectedValue(event.target.value);
  };

  const filterBySelect = () => {
    switch (selectedValue) {
      case 'sortByCount':
        return products.sort((a, b) => b.count - a.count);

      default:
        return products.sort((a, b) => a.name.localeCompare(b.name));
    }
  };

  const removeProduct = (prod: Product) => {
    // eslint-disable-next-line no-restricted-globals
    const remove = confirm('You sure you want to remove this product?');

    if (remove) {
      setProducts(products.filter(el => el !== prod));
    }
  };

  return (
    <div className="shop">
      <h1 className="shop__title">Shop</h1>
      <form>
        Sort:
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
      <h2>List of products</h2>
      <AddProduct products={products} setProducts={setProducts} />
      <ProductList productsFromServer={filterBySelect()} removeProduct={removeProduct} />
    </div>
  );
};
