import React, { useEffect } from 'react';
import Product from '../../components/Product/index.comp';
import HeaderSearch from '../../components/Header/index.comp';
import FooterLinks from '../../components/Footer/index.comp';
import Layout from '../../components/Layout/index.comp';
import { useSelector } from 'react-redux';
import { authState } from '../../store/Auth/auth.selector';
import { useLocation, useNavigate } from 'react-router-dom';
import NewPost from '../../components/NewPost/index.comp';

const NewPostPage = () => {
  const authStore = useSelector(authState);
  const navigate = useNavigate();

  useEffect(() => {
    if (!authStore.email) {
      navigate('/login');
    }
  }, []);

  return (
    <>
      <HeaderSearch />
      <div className="mt-12 mx-4">
        <Layout>
          <NewPost />
        </Layout>
      </div>
      <FooterLinks />
    </>
  );
};

export default NewPostPage;
