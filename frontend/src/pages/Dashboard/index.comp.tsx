import React from 'react';
import Product from '../../components/Product/index.comp';
import { IBook } from '../../interfaces/Book.interface';

const sampleProduct: IBook = {
  name: 'Harry Potter',
  author: 'JK rowling',
  price: '$100',
  seller: 'Unknown',
  images: ['./SampleImage.png'],
  genre: 'Horror',
};

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <Product {...sampleProduct} />
    </div>
  );
};

export default Dashboard;
