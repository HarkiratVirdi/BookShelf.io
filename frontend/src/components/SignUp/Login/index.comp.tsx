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
  Loader,
  LoadingOverlay,
} from '@mantine/core';
import { useState } from 'react';
import { useLoginMutation } from '../../../apis/authApi';
import { useNavigate } from 'react-router-dom';
import { useCookies } from 'react-cookie';
import {
  authSlice,
  fetchInit,
  onDataFailure,
  storeUserInfo,
} from '../../../store/Auth/auth.reducer';
import { useDispatch, useSelector } from 'react-redux';
import { authState } from '../../../store/Auth/auth.selector';

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

const Login = ({ changeToLoginPage }: any) => {
  const { classes } = useStyles();
  const [loginState, setLoginState] = useState({
    email: '',
    password: '',
    keepLoggedIn: false,
    error: {
      email: '',
      password: '',
      login: '',
    },
  });
  const navigate = useNavigate();
  const [loginApi] = useLoginMutation();
  const [cookies, setCookie, removeCookie] = useCookies(['userInfo']);
  const loginSlice = useSelector(authState);
  const dispatch = useDispatch();

  const setErrorMsg = (msg) => {
    setLoginState((prev) => ({
      ...prev,
      error: { ...prev.error, login: msg },
    }));
  };

  const onLoginClick = async () => {
    dispatch(fetchInit());
    try {
      const { error, data }: any = await loginApi(loginState);
      console.log('data', data);

      if (error) {
        setErrorMsg(error.message);
        return;
      }

      if (data.status === 'ok') {
        //store in cookies
        console.log('logged in');
        dispatch(storeUserInfo(data));
        setCookie('userInfo', data);
        navigate('/');
      }
    } catch (err) {
      console.log('error', err);
      dispatch(onDataFailure(err));
    }
  };

  const changeLoginState = (event: any) => {
    setLoginState((prev) => ({
      ...prev,
      [event.target.name]: event.target.value,
    }));
  };

  return (
    <div className={classes.wrapper}>
      <Paper pos={'relative'} className={classes.form} radius={0} p={30}>
        <Title order={2} className={classes.title} ta="center" mt="md" mb={50}>
          Welcome back to Bookshelf.io!
        </Title>
        <TextInput
          label="Email address"
          placeholder="hello@gmail.com"
          size="md"
          name={'email'}
          onChange={changeLoginState}
          value={loginState.email}
        />
        <PasswordInput
          label="Password"
          placeholder="Your password"
          mt="md"
          onChange={changeLoginState}
          name={'password'}
          size="md"
          value={loginState.password}
        />

        <Text mt={'sm'} color="red">
          {loginState.error.login}
        </Text>

        <Checkbox
          label="Keep me logged in"
          mt="xl"
          onChange={() =>
            setLoginState((prev) => ({
              ...prev,
              keepLoggedIn: !prev.keepLoggedIn,
            }))
          }
          size="md"
        />
        <Button onClick={onLoginClick} fullWidth mt="xl" size="md">
          Login
        </Button>

        <Text ta="center" mt="md">
          Don&apos;t have an account?{' '}
          <Anchor<'a'>
            href="#"
            weight={700}
            onClick={() => changeToLoginPage(false)}
          >
            Register
          </Anchor>
        </Text>
      </Paper>
    </div>
  );
};

export default Login;
