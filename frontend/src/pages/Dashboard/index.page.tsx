import React from 'react';
import Product from '../../components/Product/index.comp';
import { IBook } from '../../interfaces/Book.interface';
import BannerCarousel from '../../components/BannerCarousel/index.comp';
import HeaderSearch from '../../components/Header/index.comp';
import DashboardBooks from '../../components/DashboardBooks/index.comp';
import {
  Container,
  Grid,
  SimpleGrid,
  Skeleton,
  useMantineTheme,
  rem,
} from '@mantine/core';
import FooterLinks from '../../components/Footer/index.comp';
import Layout from '../../components/Layout/index.comp';

const sampleProduct: IBook = {
  _id: '1',
  title: 'Harry Potter',
  author: 'JK rowling',
  price: '$100',
  image:
    'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
  genre: ['Horror'],
  user: '',
  description: 'Harry potter 2000',
};

const Dashboard = () => {
  return (
    <>
      <HeaderSearch />
      <Layout>
        <div className="m-4">
          <BannerCarousel />
        </div>

        <div className="mt-12 mx-4">
          <DashboardBooks />
        </div>
      </Layout>

      <FooterLinks />
    </>
  );
};

export default Dashboard;
