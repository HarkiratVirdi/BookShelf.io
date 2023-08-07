import React from 'react';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import SignUp from './pages/SignUp/index.page';
import Dashboard from './pages/Dashboard/index.comp';


import Sale from './pages/productdetail/sales';                     /*```*******````````*/
import SelectAccount from './pages/selectAccount';                                    /*```*******````````*/
import About from './pages/About';                                  /*```*******````````*/
import TeamMembers from './pages/teamMember';                        /*```*******````````*/
import NewAccount from './pages/NewAccount';


function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignUp />} />
          <Route path="/about" element={<About/>} />

          <Route path="/productdetail" element={<Sale img="./In_Pursuit_of_the_Unknown.jpg" name= "In Pursuit of the Unknown" author="Ian Stewart" price="61" seller="anonymous"/> } />

          <Route path="/selectaccount" element={<SelectAccount/>} />

          <Route path="/useraccount" element={<NewAccount/>} />

          {/* <Route index  element={<TeamMembers/>} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
