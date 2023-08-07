import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { MdOutlineArrowBackIosNew } from 'react-icons/md';
import { Link } from 'react-router-dom';

import Stack from 'react-bootstrap/Stack';
import { BsFillSignpostSplitFill } from 'react-icons/bs';



const SelectAccount = () => {

  const [visible, setVisible] = useState(false)

  return (

    <>
    <style type="text/css">
      {`
  .btn-flat {
    
    color: white;
    width: 160px;
    height: 56px;
    margin-top:86px;
    margin-left: 417px;
  }
  .new_sgment {
    margin-top:46px;
    background-color:#fff;
    color: black;
    width: 2px;
    height: 46px;
    margin-left:46px;
    box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
  }
  .new_sgment_1 {
    background-color: #e6e6e6;
    opacity:1
    color: white;
    width: 402px;
    height: 46px;
    box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
    margin-top:22px;
    margin-left:-12px;
  }
  .new_sgment_2 {
    background-color: #fff;
    opacity:1
    color: black;
    width: 2px;
    height: 46px;
    margin-left:430px;
    box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
    margin-top:72px;
    
  }
  .new_sgment_3 {
    background-color: #e6e6e6;
    opacity:1
    color: black;
    width: 388px;
    height: 46px;
    margin-left:-12px;
    box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
     margin-top:22px;
    padding: 1px 1px;
  }
  .new_sgment_4{
    background-color: #fff;
    opacity:1
    color: black;
    width: 2px;
    height: 46px;
    margin-left:46px;
    box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
    margin-top:108px;
  }
  .new_strt {
    background-color: #e6e6e6;
    opacity:1
    color: white;
    width: 402px;
    height: 46px;
    margin-left:-12px;
    box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
    margin-top:22px;
  }
  .new_sgment_5 {
    background-color: #fff;
    opacity:1
    color: black;
    width: 2px;
    height: 46px;
    margin-left:430px;
    box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
    margin-top:108px;
    
  }
  .new_sgment_tt {
    background-color: #e6e6e6;
    opacity:1
    color: black;
    width: 388px;
    height: 46px;
    margin-left:-12px;
    box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
    margin-top:21px;
    padding: 1px 1px;
  }
  .new_sgment_6 {
    background-color: #fff;
    opacity:1
    color: black;
    width: 2px;
    height: 46px;
    margin-left:46px;
    box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
    margin-top:126px;
  }
  .new_sp {
    background-color: #e6e6e6;
    opacity:1
    color: black;
    width: 402px;
    height: 46px;
    margin-left:-12px;
    box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
    margin-top:22px;
  }
  .new_sgment_7 {
    background-color: #fff;
    opacity:1
    color: black;
    width: 336px;
    height: 46px;
    margin-left:430px;
    box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
    margin-top:126px;
  }
  .new_7_dt {
    background-color:#e6e6e6;
    opacity:1
    color: black;
    width: 388px;
    height: 46px;
    margin-left:-12px;
    box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
    margin-top:22px;
  }
  .etk{

    background-color:#a94442
  
  }
  .accountdata{

    color:white;
    width:147px;
    height: 40px;
    padding: 10px 12px;
    border-radius: 15px;
    margin-top:205px;
    background-color: #f02d34;
    margin-left:596px;
    cursor: pointer;
  }
  

  .ttmtr {
    padding: 1rem 1.5rem;
    font-size: 1.5rem;
    margin-top:-65px;
    margin-left: -58px;
    cursor: pointer;
  }

  
  .ttmtr_f{
    
    padding: 1px;
    margin-top:15px;
    margin-left:1236px;
   color: black;
    font-size: 1.5rem;
  }
  .ttmtr_f:hover{

    color: blue;
  }
  
  `}

    

    </style>

    <Link to="/">
    
    <div className="ttmtr_f"><BsFillSignpostSplitFill />

    </div>

    </Link>
             
    <Container className="" fluid="md">

   
    
      <Row className="etk">

        <Col className='navbar-container'>    
        
          <p className="font-bold">PERSONAL ACCOUNT</p>
        
      
           <div>Welcome, <a href="#login">Anonymous Character</a></div> 
         
        </Col>

      </Row>

          <Row>
            <Col className="new_sgment" >
          

            <label htmlFor="firstName">First Name</label>
            
            <input className="new_sgment_1" id="firstName" name="firstName" type={"text"} />
            
            
            </Col>

            <Col className="new_sgment_2">
            
            <label htmlFor="lastName">Last Name</label>

              <input className="new_sgment_3" id="lastName" name="lastName" />              

            </Col>
          </Row>

          <Row>

        <Col className="new_sgment_4">
          
             <label htmlFor="addressStreet">Address (Street)</label>
                    
                    <input className="new_strt" id="addressStreet" name="addressStreet" type={"text"}  />
        </Col>

        <Col className="new_sgment_5">
        
            <label htmlFor="addressCity">Address (City):</label>
                
                <input className="new_sgment_tt" id="addressCity" name="addressCity" type={"text"}  />
        </Col>

        </Row>

        <Row>

        <Col className="new_sgment_6">

        <label htmlFor="addressState">Address (State):</label>

                    <input className="new_sp" id="addressState" name="addressState" type={"text"}  />
        
        </Col>

        <Col className="new_sgment_7">

        <label htmlFor="addressPostal">Address (Postal Code):</label>
                    <input className="new_7_dt" id="addressPostal" name="addressPostal" type="text" />
        
        </Col>

       
        </Row>
      
          </Container>

        
                    <Stack gap={0} >
    
         {/* <Link to="/"><button className="accountdata">Save changes</button></Link> */}
    
      <button className="accountdata">Save changes </button>

     </Stack>
        
  </>


  );
}

export default SelectAccount