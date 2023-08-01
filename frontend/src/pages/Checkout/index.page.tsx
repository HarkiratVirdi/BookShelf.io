import React from 'react';
import Product from '../../components/Product/index.comp';
import Checkout from '../../components/Checkout/index.comp';
import HeaderSearch from '../../components/Header/index.comp';

const CartPage = () => {
  return (
    <>
      <HeaderSearch />
      <div className="mt-12 mx-4">
        <Checkout />
      </div>
    </>
  );
};

export default CartPage;
