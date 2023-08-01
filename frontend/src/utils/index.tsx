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

export { saveAccountDetailsInLocal, getAccountDetailsFromLocal };
