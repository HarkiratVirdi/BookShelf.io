import React from 'react';
import { Title, Grid } from '@mantine/core';
import ProductCard from '../Product/index.comp';
import { Paper, Text } from '@mantine/core';
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

  let totalPrice: number = 0;

  for (const c of cartBooks) {
    totalPrice += c.sampleProduct.price;
  }

    return (
      <Paper style={{ padding: '20px' }}>
      <h2>Shopping Cart</h2>
      {cartBooks.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 5 }}>
          {cartBooks.map((i) => (
            <li key={i.sampleProduct._id} style={{ display: 'grid', gridTemplateColumns: 'auto 1fr', padding: '20px', alignItems: 'center' }}>
              <img src={i.sampleProduct.image} alt={i.sampleProduct.title} style={{ width: '100px', height: '100px', borderRadius: '50%', objectFit: 'cover', marginRight: '10px' }} />
              <div>
              <Text weight={700}>{i.sampleProduct.title}</Text> by {i.sampleProduct.author} - ${i.sampleProduct.price}
              </div>
            </li>
          ))}
        </ul>
      )}
      <div>Total: ${totalPrice.toFixed(2)}</div>
    </Paper>
    );
  };
  
  export default Cart;