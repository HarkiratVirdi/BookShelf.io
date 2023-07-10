
import {
  Text,
  PasswordInput,
  PasswordInputProps,
  Button,
  Grid,
  rem,
} from '@mantine/core';
import EmailWithSuggestions from '../EmailWithSuggestions/index.comp';
import Layout from '../../Layout/index.comp';


import { Link } from 'react-router-dom';          /* ````` */
import ReactDOM from 'react-dom/client';          /*```*******````````*/

import AdvertBanner from '../../AdvertBanner/advertbanner';
import FooterBanner from '../../FooterBanner/footerbner';
import Products from '../../Products/soldproducts';
import React, { useEffect } from 'react';

function InputPassword({ className, style, ...others }: PasswordInputProps) {
  return (
    <div className={className} style={style}>
      <Text component="label" htmlFor="your-password" size="sm" weight={500}>
        Your password
      </Text>
      <PasswordInput
        placeholder="Your password"
        id="your-password"
        {...others}
      />
    </div>
  );
}


const Login = ({ changeToLoginPage }: any) => {

  useEffect(() => {

    // Update the document wrapper using the browser API

    const wrapper = document.querySelector('.wrapper');

    const registerLink = document.querySelector('.register-link');

    const btnPopup = document.querySelector('.btnLogin-popup');

    const iconClose = document.querySelector('.icon-close');

    const loginLink = document.querySelector('.login-link');

          if(registerLink !== null)
          {

            registerLink.addEventListener('click', ()=> {
        
              if (wrapper !== null)
              {

                wrapper.classList.add('active');
              }
                
            
              });
          }
    

        if (loginLink !== null)
        {

          loginLink.addEventListener('click', ()=> {
      
            if (wrapper !== null)
            {

              wrapper.classList.remove('active');
            }
             
          
            });
        }
       

      if (btnPopup !== null)
      {

        btnPopup.addEventListener('click', ()=> {
      
          if (wrapper !== null)
          {

            wrapper.classList.add('active-popup');
          }
           
        
          });
      }
	

      if (iconClose !== null)
      {

        iconClose.addEventListener('click', ()=> {
  
          if (wrapper !== null)
          {

            wrapper.classList.remove('active-popup');
          }
            
        
           });
        
      }
	 

  });


  return (

    <Grid
      justify="center"
      align="center"
      gutter={5}
      gutterXs="md"
      gutterMd="md"
      gutterXl={50}
    >
       <Grid.Col style={{ minHeight: rem(80) }} span={10}>
        <Layout>


        <header>

        <div>

      <AdvertBanner />


      </div>


        <nav className="navigation">

        
              <div className="btnLogin-popup-1">
              <Link to={''} >
              HOME
            </Link>
            

            <Link to={''}>
              ABOUT
            </Link>


            <Link to={''} >
              SERVICES
            </Link>


                <Link to={''}>
                    CONTACT
                </Link>

               

                <Link to={''}>

                <button  className="btnLogin-popup" type="button"  >

                  LOGIN

                  </button>
                </Link>
            
                </div>

        </nav>

      
        </header>

        <div className= "products-heading">

<br/>
<h2>Best Selling Books</h2>

<br></br>

<div className="wrapper">

{/* <span className="icon-close"><ion-icon name="close-outline"></ion-icon></span>  		     */}

<div className="form-box-login">

<p className="beats-solo">LOGIN</p>
<br></br>
<form action="#">

<div className="input-box-num1">

{/* <span className="icon"><ion-icon name="mail-outline" title="title" ></ion-icon></span> */}

  
  <label htmlFor="email">EMAIL</label> <input type="email" id="email"></input>
  

</div>


<div className="input-box-num2">
  {/* <span className="icon"><ion-icon name="lock-closed-outline" title="title" ></ion-icon></span> */}

  <label htmlFor="password">PASSWORD</label> <input type="password" id="password"></input>

</div>

<div className="remember-forgot">

<label><input type="checkbox"></input>
Remember me</label>

<a href="#" className="unknown-password"> Forgot Password?  </a>

</div>
<br/>
<button type="button" className="sign-in">SIGN IN</button>

<div className="login-register">
<p>Not a registered member?<a href="#" className="register-link" >Register</a></p>
</div>
</form>

</div>


<div className="form-box register">

{/* <p className="beats-solo">Register</p> */}

<h1>Register new account</h1>
<br></br>
<form action="#">

<div className="input-box-num1">

{/* <span className="icon"><ion-icon name="person-circle-outline"></ion-icon></span> */}


  <label htmlFor="username">Username</label> <input type="username" id="username"></input>
  

</div>

<div className="input-box-num1">

{/* <span className="icon"><ion-icon name="mail-outline" title="title" ></ion-icon></span> */}


  <label htmlFor="register-email">EMAIL</label> <input type="register-email" id="register-email"></input>
  

</div>


<div className="input-box-num2">
  {/* <span className="icon"><ion-icon name="lock-closed-outline" title="title" ></ion-icon></span> */}

  <label htmlFor="rwegister">PASSWORD</label> <input type="rwegister" id="rwegister"></input>

</div>

<div className="remember-forgot">

<label><input type="checkbox"></input>
Agree to the conditions</label>


</div>

{/* <br/> */}


<button type="submit" className="rgesr">Register</button>

<div className="login-register">
<p>Have a membership?<a href="#" className="login-link" >Login</a></p>
</div>
</form>

</div>

</div>

<p>Other book titles</p>
</div>


          {/* <div className="text-3xl">Login</div>
          <EmailWithSuggestions />
          <br />
          <InputPassword />
          <Button mt={'sm'}>Login</Button>
          <p
            onClick={() => changeToLoginPage(true)}
            style={{ cursor: 'pointer' }}
          >
            Not a user yet? Register Now
          </p> */}



        </Layout>
        </Grid.Col>
        <Grid.Col span={11}>
          {/* <img */}
           {/* src="./signUpCover.jpg" */}
           {/* style={{ objectFit: 'cover', height: '100vh', width: '100%' }} */}
           {/* alt="" */}
         {/* />  */}

         <div className="products-container">

         <Products />
         </div>

         <FooterBanner /> 

        </Grid.Col>
        
     </Grid>
     

  );
};

export default Login;
