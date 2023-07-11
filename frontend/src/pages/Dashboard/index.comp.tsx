import React from 'react';
import Product from '../../components/Product/index.comp';
import { IBook } from '../../interfaces/Book.interface';
import BannerCarousel from '../../components/BannerCarousel/index.comp';
import HeaderSearch from '../../components/Header/index.comp';
import DashboardBooks from '../../components/DashboardBooks/index.comp';

const sampleProduct: IBook = {
  name: 'Harry Potter',
  author: 'JK rowling',
  price: '$100',
  seller: 'Unknown',
  image: './SampleImage.png',
  genre: ['Horror'],
};

const links = [
  { label: 'Categories', link: '/categories' },
  { label: 'Recommended Books', link: '/recommended-books' },
];

const Dashboard = () => {
  return (
    <>
      <HeaderSearch links={links} />
      <div className="m-4">
        <BannerCarousel />
      </div>

      <div className="mt-12 mx-4">
        <DashboardBooks />
      </div>
      {/* <Product {...sampleProduct} /> */}
    </>
  );
};

export default Dashboard;
