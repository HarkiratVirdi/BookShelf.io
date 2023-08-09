import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import authReducer from './Auth/auth.reducer';
import { authApi } from '../apis/authApi';
import { bookApi } from '../apis/bookApi';
import addressReducer from './Address/address.reducer';
import cartReducer from './Cart/cart.reducer';
import { addressApi } from '../apis/addressApi';
import { orderApi } from '../apis/orderApi';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
    sagaMiddleware,
    authApi.middleware,
    bookApi.middleware,
    addressApi.middleware,
    orderApi.middleware
]

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [bookApi.reducerPath]: bookApi.reducer,
    [addressApi.reducerPath]: addressApi.reducer,
    [orderApi.reducerPath]: orderApi.reducer,
    auth: authReducer,
    address: addressReducer,
    cart: cartReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  }).concat(middlewares)
})


// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch