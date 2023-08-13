import React, { useEffect } from 'react';
import { useGetOrdersQuery } from '../../apis/orderApi';
import HeaderSearch from '../../components/Header/index.comp';
import FooterLinks from '../../components/Footer/index.comp';
import Layout from '../../components/Layout/index.comp';
import OrderHistory from '../../components/OrderHistory/index.comp';

const OrderHistoryPage = () => {
  const { isError, data, isLoading } = useGetOrdersQuery();

  useEffect(() => {
    console.log('order history', data);
  }, []);

  if (isError) {
    return <div>Error fetching Order History</div>;
  }

  
  //return <div> Order History</div>;
  return (
    <>
      <HeaderSearch />
      <div className="mt-12 mx-4">
        <Layout>
          <OrderHistory />
        </Layout>
      </div>
      <FooterLinks />
    </>
  );
};

export default OrderHistoryPage;
