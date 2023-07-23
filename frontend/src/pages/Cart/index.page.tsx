import React from 'react';
import Product from '../../components/Product/index.comp';
import Cart from '../../components/Cart/index.comp';

import HeaderSearch from '../../components/Header/index.comp';
import BannerCarousel from '../../components/BannerCarousel/index.comp';



const CartPage = () => {
    return (
      <>
      <HeaderSearch />
      <div className="m-4">
        <BannerCarousel />
      </div>
        <div className="mt-12 mx-4">
          <Cart />
        </div>
      </>
    );
  };

  export default CartPage;