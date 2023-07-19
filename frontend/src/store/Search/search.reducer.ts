import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  isLoading: true,
  errorMsg: '',
  value: '',
  product: {}
}

export const searchSlice = createSlice({
  name: 'Search',
  initialState,
  reducers: {
    fetchInit: (state) => {
      state.isLoading = true;
    },
    onChangeSearch: (state, action) => {
      state.isLoading = false;
      state.value = action?.payload?.value;
      state.product = action?.payload?.product;
    },
    onDataFailure: (state, action) => {
      state.errorMsg = action.payload;
      state.isLoading = false;
    }
  },
});

export const {fetchInit, onChangeSearch, onDataFailure} = searchSlice.actions;

export default searchSlice.reducer;