import React, { useEffect } from 'react';
import { useGetOrdersQuery } from '../../apis/orderApi';

const OrderHistory = () => {
  const { isError, data, isLoading } = useGetOrdersQuery();

  useEffect(() => {
    console.log('order history', data);
  }, []);

  if (isError) {
    return <div>Error fetching Order History</div>;
  }

  return <div>OrderHistory</div>;
};

export default OrderHistory;
