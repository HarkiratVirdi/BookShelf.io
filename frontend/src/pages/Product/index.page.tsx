import React from 'react';
import { useGetBookByIdQuery } from '../../apis/bookApi';
import { useParams } from 'react-router-dom';
import { Button, Grid, Text, Title, Image } from '@mantine/core';
import Counter from '../../components/Counter/index.comp';
import HeaderSearch from '../../components/Header/index.comp';
import Layout from '../../components/Layout/index.comp';

const ProductPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetBookByIdQuery(id);

  if (isLoading) return <div>Loading...</div>;

  if (isError) return <div>Error</div>;

  return (
    <>
      <HeaderSearch />
      <Layout>
        <div>
          <Grid gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50}>
            <Grid.Col span={6}>
              <Image
                maw={240}
                mx="auto"
                radius="lg"
                src={data?.book?.image}
                alt={data?.book?.title}
              />
            </Grid.Col>
            <Grid.Col span={6}>
              <Title mb={'sm'} order={2}>
                {data?.book?.title}
              </Title>
              <Text mb={'sm'} fz="md" fw={600}>
                {data?.book?.description}
              </Text>
              <div className="w-32">
                <Counter />
              </div>
              <Button mt={'md'}> Add to Cart</Button>
            </Grid.Col>
          </Grid>
        </div>
      </Layout>
    </>
  );
};

export default ProductPage;
