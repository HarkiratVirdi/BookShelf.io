import React from 'react';
import { Link } from 'react-router-dom';     


const FooterBanner = () => {
    return (

        <>
        <div className="footer-banner-container">
          
          <div><h2>  BEST SELLING BOOKS</h2></div>
    
          <div><h2>DEAL OF THE DAY</h2></div>
       
          <div className="banner-desc">
    
            <div className="left">
                      
    
            </div>
            <div className="right">
    
              <p>A programmers collectible</p>
                                                                              
              <h3>SAVE 10%</h3>
        
              <Link to={`/product/:num`}>
              
                <button type="button">ON SALE NOW</button>
              </Link>
    
              <img 
            src="./ftrbaner.jpg" 
            alt="acadtext" 
            className="footer-banner-image"
            
            />    
                        
            </div>
       
          </div>
        
        </div>
          
        </>
             
      )
    }
    
    
    export default FooterBanner