import React, { useEffect, useRef, useState } from 'react';
import { Title, Grid } from '@mantine/core';
import ProductCard from '../Product/index.comp';
import { Card, Text, Button, Divider } from '@mantine/core';
import { IBook } from '../../interfaces/Book.interface';
import Layout from '../Layout/index.comp';
import Counter from '../Counter/index.comp';
import { useDispatch, useSelector } from 'react-redux';
import {
  cartSlice,
  changeCartQuantity,
  deleteCartItems,
} from '../../store/Cart/cart.reducer';
import { cartState } from '../../store/Cart/cart.selector';
import { Link } from 'react-router-dom';
import { extractPrice } from '../../utils';
import { useGetOrdersQuery } from '../../apis/orderApi';
import { useGetBookByIdQuery } from '../../apis/bookApi';

const Orderhistory = () => {
  const { data, isLoading, isError } = useGetOrdersQuery();

  console.log('order data', data);

  // const orderTotal = (items: IBook[]): number => {
  //   let total = 0;
  //   for (const i of items) {
  //     total += Number(extractPrice(i.price));
  //   }
  //   return total;
  // };

  // console.log('ORDER TOTAL: ' + orderTotal(orderHistory[0].items));

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  const GetBookDetails = async (id) => {
    console.log('id', id);
    const data: any = await useGetBookByIdQuery(id);

    console.log('data', data);
    return data;
  };

  return (
    <div>
      <Text weight={700} fz="xl">
        Order History
      </Text>
      {data?.orders?.length === 0 ? (
        <Text weight={700}>Order history is currently empty</Text>
      ) : (
        <ul style={{ listStyle: 'none', padding: 5 }}>
          {data?.orders?.length > 0 &&
            data?.orders?.map((order, index) => (
              <div key={order._id}>
                <Text weight={700}>Order #{order._id}</Text>
                <ul style={{ listStyle: 'none', padding: 5 }}>
                  {order?.booksIds?.map(async (item) => {
                    const getBook = await GetBookDetails(item);
                    return (
                      <li
                        key={item}
                        style={{
                          display: 'grid',
                          gridTemplateColumns: 'auto 1fr auto',
                          padding: '20px',
                          alignItems: 'center',
                        }}
                      >
                        <div
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                          }}
                        >
                          <img
                            src={item}
                            alt={item}
                            style={{
                              width: '100px',
                              height: '100px',
                              borderRadius: '10%',
                              objectFit: 'cover',
                              marginRight: '10px',
                              marginLeft: '10px',
                            }}
                          />
                        </div>

                        <div>
                          <Text weight={700}>{item.title}</Text> by{' '}
                          {item.author}
                        </div>
                        <div className="flex items-center">
                          <span className="mr-2">${order.totalPrice}</span>
                          <div className="w-36">
                            <Link to={`/product/${item._id}`}>
                              <Button ml={'sm'}>Go to Product</Button>
                            </Link>
                          </div>
                        </div>
                      </li>
                    );
                  })}
                </ul>
                <Text weight={700}>Order total: $</Text>
                <Divider />
              </div>
            ))}
        </ul>
      )}
      <div
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          marginTop: '20px',
        }}
      ></div>
    </div>
  );
};

export default Orderhistory;
