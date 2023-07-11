import React from 'react';
import { Title, Grid } from '@mantine/core';
import ProductCard from '../Product/index.comp';
import { IBook } from '../../interfaces/Book.interface';

const sampleProduct: IBook = {
  name: 'Harry Potter',
  author: 'JK rowling',
  price: '$100',
  seller: 'Unknown',
  image:
    'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
  genre: ['Horror'],
};

const DashboardBooks = () => {
  return (
    <div>
      <Title order={2} mb={'md'}>
        Books just for you
      </Title>

      <Grid gutter="xl">
        <Grid.Col span={3}>
          <ProductCard {...sampleProduct} />
        </Grid.Col>
        <Grid.Col span={3}>
          <ProductCard {...sampleProduct} />
        </Grid.Col>
        <Grid.Col span={3}>
          <ProductCard {...sampleProduct} />
        </Grid.Col>
        <Grid.Col span={3}>
          <ProductCard {...sampleProduct} />
        </Grid.Col>
        <Grid.Col span={3}>
          <ProductCard {...sampleProduct} />
        </Grid.Col>
        <Grid.Col span={3}>
          <ProductCard {...sampleProduct} />
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default DashboardBooks;
