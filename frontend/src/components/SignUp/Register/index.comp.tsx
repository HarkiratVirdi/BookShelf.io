import React, { useState } from 'react';
import { PasswordStrength } from './PasswordWithValidation/index.comp';
import { Button, Grid, rem } from '@mantine/core';
import Layout from '../../Layout/index.comp';
import EmailWithSuggestions from '../EmailWithSuggestions/index.comp';
import { Input } from '@mantine/core';

const Register = ({ changeToLoginPage }: any) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const onRegisterClick = (e: React.MouseEvent) => {
    console.log('register logs', { name, email, password });
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
          <div className="text-3xl">Register</div>
          <Input.Wrapper id="name" withAsterisk label="Name">
            <Input
              onChange={(e) => setName(e.target.value)}
              value={name}
              id="name"
              placeholder="Your name"
            />
          </Input.Wrapper>

          <EmailWithSuggestions setEmail={setEmail} email={email} />
          <br />
          <PasswordStrength password={password} setPassword={setPassword} />
          <Button my={'sm'} onClick={onRegisterClick}>
            Register
          </Button>
          <p>
            Already a user? &nbsp;
            <span
              style={{ cursor: 'pointer' }}
              onClick={() => changeToLoginPage(true)}
            >
              Login Now
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

export default Register;
