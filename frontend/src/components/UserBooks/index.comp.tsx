import React from 'react';
import { Title, Grid, Button } from '@mantine/core';
import ProductCard from '../Product/index.comp';
import { IBook } from '../../interfaces/Book.interface';
import { useGetBooksQuery } from '../../apis/bookApi';

const sampleProduct: IBook = {
  _id: '1',
  title: 'Harry Potter',
  author: 'JK rowling',
  price: '$100',
  image:
    'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
  genre: ['Horror'],
  description: 'Harry potter 2000',
  user: '',
};

const UserBooks = () => {
  const { data, isLoading, isError } = useGetBooksQuery()

  if (isLoading) return <div>Loading</div>;
  if (isError) return <div>Error</div>;

  return (
    <div>
      <Title order={2} mb={'md'}>
        My Books
      </Title>
      <Grid gutter="xl">
        {data?.books?.map((book) => (
          <Grid.Col span={3}>
            <ProductCard {...book} />
            <Button mt={"sm"} size="sm" >
              Remove
            </Button>
          </Grid.Col>
        ))}
      </Grid>
    </div>
  );
};

export default UserBooks;
