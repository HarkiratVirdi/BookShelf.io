import React from 'react';
import {
  Text,
  PasswordInput,
  PasswordInputProps,
  Button,
  Grid,
  rem,
} from '@mantine/core';
import EmailWithSuggestions from '../EmailWithSuggestions/index.comp';
import Layout from '../../Layout/index.comp';

function InputPassword({ className, style, ...others }: PasswordInputProps) {
  return (
    <div className={className} style={style}>
      <Text component="label" htmlFor="your-password" size="sm" weight={500}>
        Your password
      </Text>
      <PasswordInput
        placeholder="Your password"
        id="your-password"
        {...others}
      />
    </div>
  );
}

const Login = ({ changeToLoginPage }: any) => {
  return (
    <Grid
      justify="center"
      align="center"
      gutter={5}
      gutterXs="md"
      gutterMd="md"
      gutterXl={50}
    >
      <Grid.Col style={{ minHeight: rem(80) }} span={6}>
        <Layout>
          <div className="text-3xl">Login</div>
          <EmailWithSuggestions />
          <br />
          <InputPassword />
          <Button mt={'sm'}>Login</Button>
          <p>
            Not a user yet?
            <span
              style={{ cursor: 'pointer' }}
              onClick={() => changeToLoginPage(false)}
            >
              Register Now
            </span>
          </p>
        </Layout>
      </Grid.Col>
      <Grid.Col span={6}>
        <img
          src="./signUpCover.jpg"
          style={{ objectFit: 'cover', height: '100vh', width: '100%' }}
          alt=""
        />
      </Grid.Col>
    </Grid>
  );
};

export default Login;
