/* eslint-disable linebreak-style */
/// <reference types="react-scripts" />

interface Product {
  id: number,
  imageUrl: string,
  name: string,
  count: number,
  size: Size,
  weight: string,
  comments: string[],
}

interface ProductComment {
  id: number,
  productId: number,
  description: string,
  date: string,
}

interface Size {
  width: string,
  height: string,
}
