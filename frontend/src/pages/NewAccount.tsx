import React, { useState }  from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import 'bootstrap/dist/css/bootstrap.min.css';


const NewAccount = () => {
  return (

    <>

<style type="text/css">
      {`
  .btn-flat {
    
  border-radius: 6px;
  padding: 10px 16px;
  background-color: #f02d34;
  color: white;
  border: none;
 
  
    margin-top:68px;
    margin-left: 487px;
  }
  .new_sgment {
    margin-top:46px;
    background-color:#fff;
    color: black;
    width: 402px;
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
    
  }
  .new_sgment_2 {
    background-color: #fff;
    opacity:1
    color: black;
    width: 402px;
    height: 46px;
    margin-left:486px;
    box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
    margin-top:-45px;
    
  }
  .new_sgment_3 {
    background-color: #fff;
    opacity:1
    color: black;
    width: 402px;
    height: 46px;
    margin-left:39px;
    box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
    margin-top:86px;
    padding: 1px 1px;
  }
  .new_sgment_4 {
    background-color: #fff;
    opacity:1
    color: black;
    width: 402px;
    height: 46px;
    margin-left:486px;
    box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
    margin-top:-46px;
  }
  .new_sgment_5 {
    background-color: #fff;
    opacity:1
    color: black;
    width: 402px;
    height: 46px;
    margin-left:39px;
    box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
    margin-top:108px;
    padding: 1px 1px;
  }
  .new_sgment_6 {
    background-color: #fff;
    opacity:1
    color: black;
    width: 402px;
    height: 46px;
    margin-left:486px;
    box-shadow:inset 0 1px 1px rgba(0,0,0,.075),0 0 8px rgba(102,175,233,.6);
    margin-top:-46px;
  }
  .etk{

    width: 100%;
    max-width: 400px;
    padding: 10px 12px;
    border-radius: 15px;
    border: none;
    font-size: 20px;
    margin-top: 10px;
    margin-top: 40px;
    text-transform: uppercase;
    background-color: #f02d34;
    color: #fff;
    cursor: pointer;
    margin-left:486px;
    
  }
  .etk:hover{

    transition: .5s;
    transform: scale(1.1,1.1);
    background-color: #055851;
  }  
  
  `}
    </style>

<Form>
      <Row className="mb-3 px-6">
        {/* <h2 className='items-center'>NEW ACCOUNT</h2> */}
        <h2><p className="text-lg p-4  text-black ">NEW ACCOUNT</p></h2>
        <Form.Group as={Col} controlId="formGridEmail">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3 px-6" controlId="formGridAddress1">
        <Form.Label>Address</Form.Label>
        <Form.Control placeholder="1234 Main St" />
      </Form.Group>

      <Form.Group className="mb-3 px-6" controlId="formGridAddress2">
        <Form.Label>Address 2</Form.Label>
        <Form.Control placeholder="Apartment, studio, or floor" />
      </Form.Group>

      <Row className="mb-3 px-6">
        <Form.Group as={Col} controlId="formGridCity">
          <Form.Label>City</Form.Label>
          <Form.Control />
        </Form.Group>

        <Form.Group as={Col} controlId="formGridState">
          <Form.Label>State</Form.Label>
          <Form.Select defaultValue="Choose...">
            <option>Choose...</option>
            <option>Ontario</option>
            <option>British Columbia</option>
            <option>New Brunswick</option>
            <option>Alberta</option>
            <option>Manitoba</option>
            <option>Newfoundland and Labrador</option>
            <option>Saskatchewan</option>
            <option>Nova Scotia</option>
            <option>Prince Edward Island</option>

          </Form.Select>
        </Form.Group>

        <Form.Group as={Col} controlId="formGridZip">
          <Form.Label>Postal Code</Form.Label>
          <Form.Control />
        </Form.Group>
      </Row>

      <Form.Group className="mb-3 px-6" id="formGridCheckbox">
        <Form.Check type="checkbox" label="Not a robot" />
      </Form.Group>

      {/* <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form> */}

    <Button className="etk" type="submit">
        Submit
      </Button>

    </Form>
    
    </>
    
   
  )
}

export default NewAccount