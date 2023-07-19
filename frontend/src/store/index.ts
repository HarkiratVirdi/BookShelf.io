import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import authReducer from './Auth/auth.reducer';
import { authApi } from '../apis/authApi';
import { bookApi } from '../apis/bookApi';
import searchReducer from './Search/search.reducer';

const sagaMiddleware = createSagaMiddleware();

const middlewares = [
    sagaMiddleware,
    authApi.middleware,
    bookApi.middleware
]

export const store = configureStore({
  reducer: {
    [authApi.reducerPath]: authApi.reducer,
    [bookApi.reducerPath]: bookApi.reducer,
    auth: authReducer,
    search: searchReducer
  },
  middleware: getDefaultMiddleware => getDefaultMiddleware({
    serializableCheck: false
  }).concat(middlewares)
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch