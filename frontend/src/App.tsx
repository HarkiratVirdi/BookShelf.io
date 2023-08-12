import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp/index.page';
import Dashboard from './pages/Dashboard/index.page';
import Product from './pages/Product/index.page';
import Cart from './pages/Cart/index.page';
import BookCategories from './pages/BookCategories/index.page';
import Checkout from './pages/Checkout/index.page';
import NewPost from './pages/NewPost/index.page';
import UserAccount from './pages/UserAccount/index.page';
import OrderHistory from './pages/OrderHistory/index.page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<SignUp />} />
          <Route path="/product/:id" element={<Product />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/newpost" element={<NewPost />} />
          <Route path="/useraccount" element={<UserAccount />} />
          <Route path="/orderHistory" element={<OrderHistory />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
