import React from 'react';
import Product from '../../components/Product/index.comp';
import Cart from '../../components/Cart/index.comp';

import HeaderSearch from '../../components/Header/index.comp';

const CartPage = () => {
    return (
      <>
        <HeaderSearch />
        <h1>Shopping Cart</h1>
        <div className="mt-12 mx-4">
          <Cart />
        </div>
      </>
    );
  };

  export default CartPage;