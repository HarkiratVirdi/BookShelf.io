import { createSlice } from '@reduxjs/toolkit'
import { getCookie } from '../../utils';

const userInfo = getCookie('userInfo');

const initialState = {
  isLoading: false,
  errorMsg: '',
  firstName:  userInfo?.firstName || '',
  lastName: userInfo?.lastName || '',
  email:  userInfo?.email || '',
  password: '',
  token: userInfo?.token || '',
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