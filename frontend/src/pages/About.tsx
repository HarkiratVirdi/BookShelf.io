import React, { useState } from 'react'
import TeamMembers from './teamMember'

import {PiUserFocusBold} from 'react-icons/pi'

import { MdVerifiedUser} from 'react-icons/md'
import {GiShoppingBag} from 'react-icons/gi'
import {MdOutlineScanner} from 'react-icons/md'
import { Link } from 'react-router-dom'
import { Button } from 'react-bootstrap'
import {Toaster, toast} from 'react-hot-toast'

import Stack from 'react-bootstrap/Stack';

import  { BsFillSignpostSplitFill} from 'react-icons/bs';

import Login from '../components/SignUp/Login/index.comp'

const About = () => {
 
  const [printMr, setprintMr] = useState(true);

  
	const hqqprintMr = () => {


		setprintMr(!printMr );		
								
	}

//   const [foundData, setFounddata] = useState({					

      
//    email : "",
//    login_access : "",

//  });

  // const {email, login_access} = foundData;

  const notify = () => toast('Account credentials verified.');

 
  
      return (
        
     
    <div className="px-5">
             
             <style type="text/css">
              {`
          .btn-flat {
            background-color:#d9534f;
            color: white;
            width: 168px;
            height: 56px;
            margin-top:56px;
            margin-left: 142px;
          }
            .ttmtr {
              padding: 1rem 1.5rem;
              font-size: 1.5rem;
              margin-top:-45px;
              margin-left: -58px;
              cursor: pointer;
              color:black;
            }
            .ttmtr:hover{

              color: blue;
            }
            body{

              background-color: linen;
              opacity: 1.0;
              border: 17px solid black;
              
              border-image: url(page_about_design_brdr.png) 30 round;
            }
            
           
                    
                    `}
            </style>

          <div className="sgment ">

            <p className=" py-14 font-bold">  MEMBERSHIP VERIFICATION</p>

          </div>

           
   
        
        <Link to={"/"}>

        <div className="ttmtr" >
        
        <BsFillSignpostSplitFill />

        </div>

        </Link>      

    
                  
        
          
          <Stack direction="horizontal" gap={3}>
           
          <Link to={"/useraccount"} className="whitespace-nowrap cursor-pointer">
          
            <div className="p-2">NEW ACCOUNT</div>
            
            {/* <div className="p-2">Second item</div>
            <div className="p-2">Third item</div> */}
        
        
        </Link>	 

        </Stack>

          {/* <Button variant="">NEW ACCOUNT</Button> */}
 

       <div className="sgment_envelop" >
     
           <div className="sgment_s2" >

            
            <div className="ml-56 py-12 text-3xl cursor-pointer w-8 h-8 rounded-full overflow-hidden drop-shadow-md " >
            

  
            <Link to={"/selectaccount"} className="whitespace-nowrap cursor-pointer">
              
              {/* <MdManageAccounts/> */}

              <PiUserFocusBold className="txl"/>
            
              </Link>	  

           
                </div>


                

           <div className="sgment_psac">         

              <TeamMembers 
              
              name={'PERSONAL ACCOUNT'} />

            </div>

           
           

          <div className="sgment_s4">
            
              <TeamMembers name={'LOGIN MANAGEMENT'} />
         
          </div>

      
          <div className="sgment_lgnmg">
         
                  
                  <MdVerifiedUser className="txl" onClick={notify}/>

                  <Toaster />

          </div>

        </div>
      


          <div className="sgment_s3">


          
                       
               <div className="py-7">
       
               <TeamMembers name={"PURCHASES MANAGEMENT"} />
        
                 </div>

                 
            
                 

             <div className="sgment_s1">
        
                <TeamMembers name={'ADVERTISE MANAGEMENT'} />

                <div className="sgment_advert">

                <MdOutlineScanner className="txl"/>

                </div>
      
              </div>


                 <div className="sgment_symble ">

              
                   <GiShoppingBag className="txl"/>

                 </div>


              </div>
       
          </div>
       
      </div>


  

      )

}

export default About