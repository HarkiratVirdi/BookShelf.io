import React, { useEffect } from 'react';
import HeaderSearch from '../../components/Header/index.comp';
import FooterLinks from '../../components/Footer/index.comp';
import Layout from '../../components/Layout/index.comp';
import { useSelector } from 'react-redux';
import { authState } from '../../store/Auth/auth.selector';
import { useLocation, useNavigate } from 'react-router-dom';
import UserAccount from '../../components/UserAccount/index.comp';

const UserAccountPage = () => {
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
          <UserAccount />
        </Layout>
      </div>
      <FooterLinks />
    </>
  );
};

export default UserAccountPage;