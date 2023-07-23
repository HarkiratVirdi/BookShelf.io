import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp/index.page';
import Dashboard from './pages/Dashboard/index.page';
import Product from './pages/Product/index.page';
import BookCategories from './pages/BookCategories/index.page';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/login" element={<SignUp />} />
          <Route path="/categories" element={<BookCategories />} />
          <Route path="/product/:id" element={<Product />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
