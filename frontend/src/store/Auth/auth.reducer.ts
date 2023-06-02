import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: true,
  errorMsg: '',
  name: '',
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
      state.isLoading = false;
      state.email = action?.payload?.email;
      state.name = action?.payload?.name;
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