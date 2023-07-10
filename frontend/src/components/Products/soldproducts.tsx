

import { Link } from 'react-router-dom';     
import Imagegallery from './photolist';
// import ImgaleryComponent from './photolist';

const Products = () => {

  
    return (

        <div>
        {/* <Link to={`/pages/productdetail/}`}> */}
        
        <Link to="/productdetail">
          <div className="product-card">

         
        <Imagegallery />

            {/* <img src="./product_adsize.jpg"
                 width={250}
                 height={250}
                 className="product-image"
                 alt="singleproduct"
                 />

                 <p className="product-name">Analysis of Electric Machinery</p>
                 <p className="product-name">$88</p> */}

              {/* <img src="./pursuit_of_photo1.jpg"
                 width={250}
                 height={250}
                 className=""
                 alt="singleproduct"
                 />

                 <p className="photo1">In pursuit of the Unknown</p>
                 <p className="photo">$32</p>

               */}
                       

          </div>
        </Link>
      </div>
    )
  }

  
  export default Products