import React from 'react';
import { PasswordStrength } from './PasswordWithValidation/index.comp';
import { Button, Grid, rem } from '@mantine/core';
import Layout from '../../Layout/index.comp';
import EmailWithSuggestions from '../EmailWithSuggestions/index.comp';

const Register = ({ changeToLoginPage }: any) => {
  const onRegisterClick = () => {};

  return (
    <Grid
      justify="left"
      align="center"
      gutter={5}
      gutterXs="md"
      gutterMd="md"
      gutterXl={50}
    >
      <Grid.Col style={{ minHeight: rem(80) }} span={6}>
        <Layout>
          <div className="text-3xl">Register</div>
          {/* <EmailWithSuggestions /> */}
          <br />
          {/* <PasswordStrength /> */}
          {/* <Button mt={'sm'}>Register</Button> */}
          {/* <p
            style={{ cursor: 'pointer' }}
            onClick={() => changeToLoginPage(false)}
          >
            Already a user? Login Now
          </p> */}
        </Layout>
      </Grid.Col>
      <Grid.Col span={20}>
        {/* <img
          src="./signUpCover.jpg"
          style={{ objectFit: 'cover', height: '100vh', width: '100%' }}
          alt=""
        /> */}
      </Grid.Col>
    </Grid>
  );
};

export default Register;
