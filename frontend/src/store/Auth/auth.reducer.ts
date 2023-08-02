import { createSlice } from '@reduxjs/toolkit'
import { getAccountDetailsFromLocal, getCookie } from '../../utils';
import cookieUserInfo from '../../hooks/CookieUserInfo';

const getCookies = getCookie('token');

console.log("get cookie", getCookie)
const initialState = {
  isLoading: false,
  errorMsg: '',
  firstName:  '',
  lastName: '',
  email:  '',
  password: '',
  token: '',
}

export const authSlice = createSlice({
  name: 'Auth',
  initialState,
  reducers: {
    fetchInit: (state) => {
      state.isLoading = true;
    },
    storeUserInfo: (state, action) => {
      state.isLoading = false;
      state.email = action?.payload?.email;
      state.firstName = action?.payload?.firstName;
      state.lastName = action?.payload?.lastName;
      state.token = action?.payload?.token;
    },
    onDataFailure: (state, action) => {
      state.errorMsg = action.payload;
      state.isLoading = false;
    }
  },
});

export const {fetchInit, storeUserInfo, onDataFailure} = authSlice.actions;

export default authSlice.reducer;