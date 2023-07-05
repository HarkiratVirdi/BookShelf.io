import React from 'react';
import { Link } from 'react-router-dom';     


const Products = () => {
    return (

        <div>
        <Link to={`/product/:num`}>
          <div className="product-card">


            <img src="./product_adsize.jpg"
                 width={250}
                 height={250}
                 className="product-image"
                 alt="singleproduct"
                 />

                 <p className="product-name">Analysis of Electric Machinery</p>
                 <p className="product-name">$88</p>
          </div>
        </Link>
      </div>
    )
  }
  
  export default Products