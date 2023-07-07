import React, { Dispatch, SetStateAction, useState } from 'react';
import { Text, PasswordInput, Button, Grid, rem } from '@mantine/core';
import EmailWithSuggestions from '../EmailWithSuggestions/index.comp';
import Layout from '../../Layout/index.comp';

interface IInputPassword {
  setPassword: Dispatch<SetStateAction<string>>;
  password: string;
}

function InputPassword({ setPassword, password }: IInputPassword) {
  return (
    <div>
      <Text component="label" htmlFor="your-password" size="sm" weight={500}>
        Your password
      </Text>
      <PasswordInput
        placeholder="Your password"
        id="your-password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
    </div>
  );
}

const Login = ({ changeToLoginPage }: any) => {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const onLogin = (e: React.MouseEvent) => {
    console.log('login logs', { email, password });
  };

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
          <EmailWithSuggestions setEmail={setEmail} email={email} />
          <br />
          <InputPassword setPassword={setPassword} password={password} />
          <Button onClick={onLogin} my={'sm'}>
            Login
          </Button>
          <p>
            Not a user yet? &nbsp;
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
