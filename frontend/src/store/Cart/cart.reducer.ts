import { createSlice } from '@reduxjs/toolkit'
import { IBook } from '../../interfaces/Book.interface';

const sampleProduct = [{
    _id: '1',
    title: 'Harry Potter',
    author: 'JK rowling',
    price: 100,
    image:
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    category: 'Horror',
    description: 'Harry potter 2000',
  },
  {
    _id: '2',
    title: 'Harry Potter',
    author: 'JK rowling',
    price: 100,
    image:
      'https://images.unsplash.com/photo-1449824913935-59a10b8d2000?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=250&q=80',
    category: 'Horror',
    description: 'Harry potter 2000',
  }];

const initialState = {
  items: sampleProduct
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    deleteCartItems: (state, action) => {
        
    },
    addCartItems: (state, action) => {

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