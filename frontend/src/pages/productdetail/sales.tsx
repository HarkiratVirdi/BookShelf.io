import React from 'react';

import {AiOutlineMinus, AiOutlinePlus, AiFillStar, AiOutlineStar} from 'react-icons/ai';

import Imagegallery from '../../components/Products/photolist';

import { MouseEvent } from 'react';


const Sale = (props: { img: any; name: any; author: any; price: any; seller:any}) => {

    const { img, name, author, price, seller} = props ;

  return (
    <div>

		  <div className="product-detail-container">
          
             
		   <div>

 		<div className="image-container">
		
			{/* <img src={img} className="product-detail-image" /> */}

            <img src={img} className="" />
          </div>


	 {/* <div className="small-images-container">
	
 		{image?.map((loopvar, dq_file) => ( <img src= {urlFor(item)} className={dq_file == loopvar ? 'small-image selected-image' : 'small-image'} onMouseEnter={() => setqp(dq_file)} /> ))}
 	 </div> */}

	    <div className="product-detail-desc">
		<h1>{name} </h1>
		<div className="reviews" >
		
 			<div className="listprd"> 
             <AiFillStar />

 			</div>

            <div className="listprd2">
            <AiFillStar />
            </div>

            <div className="listprd3">
            <AiFillStar />
            </div>

            <div className="listprd4">
            <AiFillStar />
            </div>

            <div className="listprd4">
            <AiOutlineStar />
            </div>

 			<p>
 			(20)
 			</p>
		
 		</div>

 		<h4>Author: <span>{author}</span></h4>

 		
 		<p className="price">${price}</p>

         <div className="quantity">
		
 			<h3>Quantity:</h3>
 			<p className="quantity-desc">

 				{/* <span className="minus" onClick=""><AiOutlineMinus /></span> */}
                 {/* <span className="minus" ><AiOutlineMinus /></span> */}

 				{/* <span className="num" onClick="">0</span> */}
                 {/* <span className="num" >0</span> */}

 				{/* <span className="plus" onClick=""><AiOutlinePlus /></span> */}
                 {/* <span className="plus" ><AiOutlinePlus /></span> */}
 			</p>
 	      </div>

              	     {/* <div className="buttons"> 
                     <button type="button" className="add-to-cart" onClick="">Add to Cart</button>
 		            <button type="button" className="buy-now" onClick="">Purchase Now</button>

 		            </div> */}

            <span>Sold By: {seller}</span>
 	   </div>	
      </div>

 		<div className="maylike-products-wrapper"> 

 			{/* <h2>Other survey liked products </h2> */}
 			<div className="marquee">
{/* 
 				<div className="maylike-products-container track">
				
 					{products.map((item) => (<Product key={item._id} product={item} />))}
 				</div> */}

 			 </div>
 		</div>
    </div>
    </div>
  )
  }

export default Sale
