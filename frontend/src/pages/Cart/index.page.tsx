import React from 'react';
import Product from '../../components/Product/index.comp';
import CartItems from '../../components/Cart/index.comp';

import HeaderSearch from '../../components/Header/index.comp';

const Cart = () => {
    return (
      <>
        <HeaderSearch />
 
        <div className="mt-12 mx-4">
          <CartItems />
        </div>
      </>
    );
  };

  export default Cart;