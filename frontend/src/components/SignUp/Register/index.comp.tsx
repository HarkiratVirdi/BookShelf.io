import {
  Paper,
  createStyles,
  TextInput,
  PasswordInput,
  Checkbox,
  Button,
  Title,
  Text,
  Anchor,
  rem,
} from '@mantine/core';
import { useRegisterMutation } from '../../../apis/authApi';
import { useState } from 'react';

const useStyles = createStyles((theme) => ({
  wrapper: {
    minHeight: '100vh',
    backgroundSize: 'cover',
    backgroundImage:
      'url(https://images.unsplash.com/photo-1484242857719-4b9144542727?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1280&q=80)',
  },

  form: {
    borderRight: `${rem(1)} solid ${
      theme.colorScheme === 'dark' ? theme.colors.dark[7] : theme.colors.gray[3]
    }`,
    minHeight: '100vh',
    maxWidth: rem(450),
    paddingTop: rem(80),

    [theme.fn.smallerThan('sm')]: {
      maxWidth: '100%',
    },
  },

  title: {
    color: theme.colorScheme === 'dark' ? theme.white : theme.black,
    fontFamily: `Greycliff CF, ${theme.fontFamily}`,
  },
}));

const Register = ({ changeToLoginPage }: any) => {
  const { classes } = useStyles();
  const [registerState, setRegisterState] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    keepLoggedIn: false,
  });

  const [registerApi] = useRegisterMutation();

  const onRegisterClick = () => {
    const data = registerApi(registerState);
    console.log('data', data);
  };

  const changeRegisterState = (event: any) => {
    setRegisterState((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className={classes.wrapper}>
      <Paper className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Welcome to Bookshelf.io!
        </Title>
        <TextInput
          label="First Name"
          placeholder="First Name"
          size="md"
          mt="md"
          name="firstName"
          onChange={(e) => changeRegisterState(e)}
        />
        <TextInput
          label="Last Name"
          placeholder="Last Name"
          size="md"
          mt="md"
          name="lastName"
          onChange={(e) => changeRegisterState(e)}
        />
        <TextInput
          label="Email address"
          placeholder="hello@gmail.com"
          size="md"
          mt="md"
          name="email"
          onChange={(e) => changeRegisterState(e)}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          mt="md"
          name="password"
          onChange={(e) => changeRegisterState(e)}
          size="md"
        />
        <Checkbox
          onChange={() =>
            setRegisterState((prev) => ({
              ...prev,
              keepLoggedIn: !prev.keepLoggedIn,
            }))
          }
          label="Keep me logged in"
          mt="xl"
          size="md"
        />
        <Button onClick={onRegisterClick} fullWidth mt="xl" size="md">
          Register
        </Button>

        <Text ta="center" mt="md">
          Don&apos;t have an account?{' '}
          <Anchor<'a'>
            href="#"
            weight={700}
            onClick={() => changeToLoginPage(true)}
          >
            Login
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
};

export default Register;
