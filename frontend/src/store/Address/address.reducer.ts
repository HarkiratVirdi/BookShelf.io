import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    street: '',
    city: '',
    postal: '',
    province: '',
    isLoading: false,
    errorMsg: ''
}

export const searchSlice = createSlice({
  name: 'Search',
  initialState,
  reducers: {
    fetchInit: (state) => {
      state.isLoading = true;
    },
    storeAddressInfo: (state, action) => {
      state.street = action?.payload?.street;
      state.city = action?.payload?.city;
      state.postal = action?.payload?.postal;
      state.province = action?.payload?.province;
    },
    onDataFailure: (state, action) => {
      state.errorMsg = action.payload;
      state.isLoading = false;
    }
  },
});

export const {fetchInit, storeAddressInfo, onDataFailure} = searchSlice.actions;

export default searchSlice.reducer;