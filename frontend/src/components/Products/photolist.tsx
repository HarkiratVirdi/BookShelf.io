
        function Imagegallery() {
        
      let photolst = [
  
       
        {src:"./In_Pursuit_of_the_Unknown.jpg", title: "In pursuit of the Unknown"
        
        
        }];

        
        let photolst2 = [
        {

         src:"./product_adsize.jpg", title: "Analysis of Electric Machinery"
        }];
        
        let photolst3 = [
        {

            src:"./envyronmnt.jpg", title: "Introudction to Environment Assessment"
        }];

        let photolst4 = [
        {

            src:"./modern_ph.jpg", title: "Modern Physics"
        }];
        
        let photolst5 = [
        {

            src:"./fndm_Inv.jpg", title: "Fundamentals of Investments"
        }];

        let photolst6 = [
        {

            src:"./archt.jpg", title: "Architectural Graphic Standards"
        }];
        
        let photolst7 = [
        {

            src:"./txt_eng_drw.jpg", title: "Interpreting Engineering Drawing"
        }];
      

    
    return( 
    
        <>

       
         <div className="product-card-photolst">
        {
               photolst.map((index) => <img src={index.src} title={index.title} alt="acadtext" width={250}  height={170} style={{ borderRadius:'6px' ,width: '8rem' }}  />)
        }  
        </div>
        
       
          
        <div className="product-card-photolst2 ">
       {

 
               photolst2.map((index) => <img src={index.src} title={index.title} alt="acad" width={250}  height={250} style={{ borderRadius:'6px' ,width: '8rem' }}  />)
       }   
        </div>

    
       
        <div className="product-card-photolst3">
       {
              
               photolst3.map((index) => <img src={index.src} title={index.title} alt="acad" width={250}  height={250} style={{ borderRadius:'6px' ,width: '8rem' }}  />)
       }
       </div>


       <div className="product-card-photolst4">
       {

               photolst4.map((index) => <img src={index.src} title={index.title} alt="acad" width={250}  height={250} style={{ borderRadius:'6px' ,width: '8rem' }}  />)
       }  
        </div>

        <div className="product-card-photolst5">
       {

               photolst5.map((index) => <img src={index.src} title={index.title} alt="acad" width={250}  height={250} style={{ borderRadius:'6px' ,width: '8rem' }}  />)
       }  
        </div>

        <div className="product-card-photolst6">
       {

               photolst6.map((index) => <img src={index.src} title={index.title} alt="acad" width={250}  height={250} style={{ borderRadius:'6px' ,width: '8rem' }}  />)
       }  
        </div>

        <div className="product-card-photolst7">
       {

               photolst7.map((index) => <img src={index.src} title={index.title} alt="acad" width={250}  height={250} style={{ borderRadius:'6px' ,width: '8rem' }}  />)
       } 
        </div>

               
       </>
    
    
    )
        
  
    }
    export default Imagegallery
        
  