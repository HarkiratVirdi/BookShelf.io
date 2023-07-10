import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp/index.page';
import Dashboard from './pages/Dashboard/index.comp';


import Sale from './pages/productdetail/sales';                     /*```*******````````*/
import Homr from './pages/Homr';                                    /*```*******````````*/
import About from './pages/About';                                  /*```*******````````*/
import TeamMembers from './pages/teamMember';                        /*```*******````````*/


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/dashboard" element={<Dashboard />} />

          <Route path="/productdetail" element={<Sale img="./In_Pursuit_of_the_Unknown.jpg" name= "In Pursuit of the Unknown" author="Ian Stewart" price="61" seller="anonymous"/> } />

          <Route index element={<Homr/>} />
          <Route index element={<About/>} />
          <Route index  element={<TeamMembers/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
