import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  items: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    deleteCartItems: (state, action) => {
        const newItems = [...state.items];
        const productId = action.payload._id;

        const deletedItems = newItems.filter((item) => item._id !== productId);
        state.items = deletedItems;
    },
    addCartItems: (state, action) => {
        const newItems = [...state.items, action.payload];

        state.items = newItems;
    },
    changeCartQuantity: (state, action) => {
        const productId = action.payload._id;
        const newItems = [...state.items];

        newItems.forEach((item) => {
            if(item._id === productId)
            {
                item['quantity'] = action.payload.quantity;
            }
        })

        state.items = newItems;
    }
  },
});

export const {deleteCartItems, addCartItems, changeCartQuantity} = cartSlice.actions;

export default cartSlice.reducer;