import React from 'react';
import { Title, Grid } from '@mantine/core';
import ProductCard from '../Product/index.comp';
import { IBook } from '../../interfaces/Book.interface';
import { useGetBooksQuery } from '../../apis/bookApi';

const CartItems = () => {
    const { data, isLoading, isError } = useGetBooksQuery();
  
    if (isLoading) return <div>Loading</div>;
    if (isError) return <div>Error</div>;
  
    return (
      <div>
        <Title order={2} mb={'md'}>
          Books just for you
        </Title>
        <Grid gutter="xl">
          {data?.books?.map((book) => (
            <Grid.Col span={3}>
              <ProductCard {...book} />
            </Grid.Col>
          ))}
        </Grid>
      </div>
    );
  };
  
  export default CartItems;