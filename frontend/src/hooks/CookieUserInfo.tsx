import React from 'react';
import { useCookies } from 'react-cookie';

const CookieUserInfo = () => {
  const [cookies, setCookie, removeCookie] = useCookies(['userInfo']);

  return cookies;
};

export default CookieUserInfo;
