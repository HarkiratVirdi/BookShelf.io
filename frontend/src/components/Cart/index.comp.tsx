import React from 'react';
import { Title, Grid } from '@mantine/core';
import ProductCard from '../Product/index.comp';
import { Paper } from '@mantine/core';
import { IBook } from '../../interfaces/Book.interface';

const sampleProduct: IBook = {
  _id: '1',
  title: 'Harry Potter',
  author: 'JK rowling',
  price: 100,
  image:
    'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
  category: 'Horror',
  description: 'Harry potter 2000',
};

const Cart = () => {
  const cartBooks = [
    { sampleProduct },
    { sampleProduct },
    { sampleProduct },
    { sampleProduct },
    { sampleProduct },
  ];

  const totalPrice = cartBooks.reduce((acc, item) => acc + item.sampleProduct.price, 0);

    return (
      <Paper style={{ padding: '20px' }}>
      <h2>Shopping Cart</h2>
      {cartBooks.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul>
          {cartBooks.map((i) => (
            <li key={i.sampleProduct._id}>
              <img src={i.sampleProduct.image} alt={i.sampleProduct.title} style={{ width: '50px', marginRight: '10px' }} />{i.sampleProduct.title} by {i.sampleProduct.author} - ${i.sampleProduct.price}
            </li>
          ))}
        </ul>
      )}
      <div>Total: ${totalPrice.toFixed(2)}</div>
    </Paper>
    );
  };
  
  export default Cart;