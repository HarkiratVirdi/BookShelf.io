import React, { useRef, useState } from 'react';
import { useGetBookByIdQuery } from '../../apis/bookApi';
import { useParams } from 'react-router-dom';
import { Button, Grid, Text, Title, Image, Badge } from '@mantine/core';
import Counter from '../../components/Counter/index.comp';
import HeaderSearch from '../../components/Header/index.comp';
import Layout from '../../components/Layout/index.comp';
import { useDispatch, useSelector } from 'react-redux';
import { authState } from '../../store/Auth/auth.selector';
import { BiSolidTruck } from 'react-icons/bi';
import { TbTruckReturn } from 'react-icons/tb';
import {
  addCartItems,
  changeCartQuantity,
} from '../../store/Cart/cart.reducer';
import { cartState } from '../../store/Cart/cart.selector';

const ProductPage = () => {
  const { id } = useParams();
  const { data, isLoading, isError } = useGetBookByIdQuery(id);
  const authStore = useSelector(authState);
  const cartStore = useSelector(cartState);
  const [counter, setCounter] = useState(1);
  const itemQuantity = useRef(null);
  const dispatch = useDispatch();

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  const addToCartIfLoggedIn = () => {
    const product = {
      ...data?.book,
      quantity: counter,
    };

    const ifItemExists = cartStore?.items.filter(
      (it) => it._id === data?.book?._id
    );

    if (ifItemExists.length > 0) {
      dispatch(changeCartQuantity(product));
    } else {
      dispatch(addCartItems(product));
    }
  };

  return (
    <>
      <HeaderSearch />
      <Layout>
        <div className="mt-12">
          <Grid gutter={5} gutterXs="md" gutterMd="xl" gutterXl={50}>
            <Grid.Col span={6}>
              <Image
                maw={540}
                mx="auto"
                radius="lg"
                src={data?.book?.image}
                alt={data?.book?.title}
              />
            </Grid.Col>
            <Grid.Col span={6} mt={'xl'}>
              <Title mb={'sm'} order={1}>
                {data?.book?.title}
              </Title>
              <Text mb={'sm'} fz="md" fw={600}>
                {data?.book?.description}
              </Text>
              <Text mb={'sm'} fz="md" fw={600}>
                Price: ${data?.book?.price}
              </Text>
              <Text mb={'sm'} fz="md" fw={600}>
                Written By: {data?.book?.author}
              </Text>
              {data?.book?.genre.length > 0 && (
                <Text mb={'sm'} fz={'md'} fw={600}>
                  Genre:{' '}
                  {data?.book?.genre.map((gen) => (
                    <Badge>{gen}</Badge>
                  ))}
                </Text>
              )}
              <div className="w-32">
                <Counter
                  setCounter={setCounter}
                  counter={counter}
                  ref={itemQuantity}
                />
              </div>
              <Button
                disabled={authStore.token ? false : true}
                mt={'md'}
                onClick={addToCartIfLoggedIn}
              >
                {' '}
                {authStore.token
                  ? 'Add to Cart'
                  : 'Please Login to add item to cart'}
              </Button>

              <div className="border-2 mt-16 p-4 rounded-lg">
                <Text className="flex" mb={'sm'} fz="md" fw={600}>
                  <BiSolidTruck className="mr-2" size={'20px'} /> Free Delivery
                </Text>
                <Text className="flex" mb={'sm'} fz="md" fw={600}>
                  <TbTruckReturn className="mr-2" size={'20px'} />
                  Return in 30 Days
                </Text>
              </div>
            </Grid.Col>
          </Grid>
        </div>
      </Layout>
    </>
  );
};

export default ProductPage;
