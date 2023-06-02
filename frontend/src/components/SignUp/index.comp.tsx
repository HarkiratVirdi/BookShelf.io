import React, { useState } from 'react';
import Login from './Login/index.comp';
import Register from './Register/index.comp';

const SignUp = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);

  return <div>{isLoginPage ? <Login /> : <Register />}</div>;
};

export default SignUp;
