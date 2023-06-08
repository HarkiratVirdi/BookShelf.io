 import React from 'react';
 import Link from 'next/link';

 import {Products, AdvertBanner, FooterBanner} from '../../components';

const Frontside = () => {
  return (
    <>
  <AdvertBanner />

<header>

<nav className="navigation">
  

  <Link href="#">
   HOME
  </Link>

  <Link href="#">
   ABOUT
  </Link>

  <Link href="#">
    SERVICES
  </Link>

  <Link href="#">
     CONTACT
  </Link>

  <Link href="/product/ID">
    <button type="button">

      LOGIN

     </button>
  </Link>

     </nav>

</header>


 
    <div className= "products-heading">

      <h2> Best Selling Books</h2>

    <br></br>
      <div className="wrapper">

<div className="form-box login">

<p className="beats-solo">LOGIN</p>
  <br></br>
  <form action="#">

    <div className="input-box-num1">

      <span className="icon"><ion-icon name="mail-outline"></ion-icon></span>
        <input type="email" required></input>
        <label>EMAIL</label>
        
      
    </div>

   

    <div className="input-box-num2">
        <span className="icon"><ion-icon name="lock-closed-outline"></ion-icon></span>
        <input type="password" required></input>
        <label>PASSWORD</label>

    </div>

    <div className="remember-forgot">

      <label><input type="checkbox"></input>
      Remember me</label>
      
      <a href="#" className="unknown-password"> Forgot Password?  </a>

    </div>

    <button type="submit" className="navigation">SIGN IN</button>

    <div className="login-register">
      <p>Not a registered member?<a href="#" className="register-link" >Register</a></p>
    </div>
  </form>

</div>

</div>

      <p>Other book titles</p>
    </div>

    
    <div className="products-container">

      {['Product 1', 'Product 2'].map(
        
        (product) => product)}
    </div>
    
    <FooterBanner />
    </>
   
  )
}

export default Frontside