

import React from 'react';
import { Link } from 'react-router-dom';          /* ````` */


const AdvertBanner = () => {
  return (

    
     <div className="hero-banner-container">

      <div>
        

        <p className="beats-solo">Practitioners approach</p>

       {/* <h3>MIDTEXT</h3> */}

       <h3>SAVE 10%</h3>

        <h1>QUANTITY LIMITED</h1>


       {/* <img
          src="./signUpCover.jpg"
          style={{ objectFit: 'cover', height: '100vh', width: '100%' }}
          alt=""
        /> */}

       <img 
            src="./advertbanner_adsize.jpg" 
            alt="acadtext" 
            className="hero-banner-image"
            
            />


       <div>
       <Link to={`/product/:num`}>
        <button type="button">PURCHASE
        </button>
       </Link>
       
       <div className="desc">
        {/* <h5></h5> */}
        {/* <p>DETAILS</p> */}
        <p>a comprehensive not to mention multi-purpose academia textbook </p>
       </div>
      </div>
      </div>
     
       </div>
  )
}

export default AdvertBanner