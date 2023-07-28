import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: false,
  errorMsg: '',
  firstName: '',
  lastName: '',
  email: '',
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
      console.log("state", state, action);
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