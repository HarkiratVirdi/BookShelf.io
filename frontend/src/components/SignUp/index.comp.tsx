import React, { useState } from 'react';
import Login from './Login/index.comp';
import Register from './Register/index.comp';

const SignUp = () => {
  const [isLoginPage, setIsLoginPage] = useState(true);
  const changeToLoginPage = (value: boolean) => setIsLoginPage(value);

  return (
    <div>
      {isLoginPage ? (
        <Login changeToLoginPage={changeToLoginPage} />
      ) : (
        <Register changeToLoginPage={changeToLoginPage} />
      )}
    </div>
  );
};

export default SignUp;
