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
import { fetchBookById } from '../../apis/customApi';

const Orderhistory = () => {
  const { data, isLoading, isError } = useGetOrdersQuery();
  const [orderBooks, setOrderBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      console.log('orders', data?.orders);
      const bookDetailsPromises = data?.orders?.map(({ bookIds }) =>
        fetchBookById(bookIds[0])
      );

      console.log('promises', bookDetailsPromises);

      const bookDetails = await Promise.all(bookDetailsPromises);

      console.log('book Details', bookDetails);

      const bookData = bookDetails
        ?.map((eBookDetails) => {
          if (eBookDetails?.data?.book?.title) {
            return eBookDetails?.data?.book;
          }
        })
        .filter((ebook) => ebook !== undefined);

      console.log('ebook data', bookData);

      const orders = data?.orders?.filter((eOrder) => {
        return bookData.map(({ _id }) => _id).includes(eOrder.bookIds[0]);
      });

      console.log('orders', orders);

      const combinedData = orders.map((eOrder) => ({
        ...eOrder,
        bookDetails: bookData.find((eb) => eb._id === eOrder.bookIds[0]),
      }));

      console.log('combined data', combinedData);
      setOrderBooks(combinedData);
    };

    if (!isLoading) fetchBooks();
  }, [isLoading]);

  // console.log('ORDER TOTAL: ' + orderTotal(orderHistory[0].items));

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error</div>;

  return (
    <div>
      <Text weight={700} fz="xl">
        Order History
      </Text>
      {orderBooks?.length === 0 ? (
        <Text weight={700}>Order history is currently empty</Text>
      ) : (
        <ul style={{ listStyle: 'none', padding: 5 }}>
          {orderBooks?.map((eOrderBook) => {
            return (
              <li
                key={eOrderBook?.bookDetails?._id}
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
                    src={eOrderBook?.bookDetails?.image}
                    alt={eOrderBook?.bookDetails?.title}
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
                  <Text weight={700}>{eOrderBook?.bookDetails?.title}</Text> by{' '}
                  {eOrderBook?.bookDetails?.author}
                </div>
                <div className="flex items-center">
                  {/* <span className="mr-2">${order.price}</span> */}
                  <div className="w-36">
                    <Link to={`/product/${eOrderBook?.bookDetails?._id}`}>
                      <Button ml={'sm'}>Go to Product</Button>
                    </Link>
                    <Text>Total: ${eOrderBook?.totalPrice}</Text>

                    <Text>
                      Purchased On:{' '}
                      {new Date(eOrderBook?.createdAt).toUTCString()}
                    </Text>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default Orderhistory;
