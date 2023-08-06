import cookies from 'js-cookie';

export interface ILoginState {
  email: string;
  password: string;
  keepLoggedIn: boolean;
}

const saveAccountDetailsInLocal = (loginState: ILoginState) => {
  const accountDetails = {
    email: loginState.email,
    password: loginState.password,
    keepLoggedIn: loginState.keepLoggedIn,
  };

  localStorage.setItem('userAccount', JSON.stringify(accountDetails));
};

const getAccountDetailsFromLocal = (): ILoginState | null => {
  const userAccount = localStorage.getItem('userAccount');

  if (userAccount) return JSON.parse(userAccount);
  return null;
};

const extractPrice = (price: string) => {
  return price.substring(1);
};

function getCookie(name) {
  const userInfo = cookies.get('userInfo');

  if (userInfo) {
    return JSON.parse(userInfo);
  }
}

export {
  getCookie,
  saveAccountDetailsInLocal,
  extractPrice,
  getAccountDetailsFromLocal,
};
