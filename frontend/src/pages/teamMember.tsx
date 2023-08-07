import React from 'react'



const TeamMembers = (props:{name:string; }) => {

  return (
    
    

    <div className='bg-slate-200 p-2 flex gap-4'>

     
      
      <div className='p-3 bg-white rounded overflow-hidden'>

      <p>{props.name}</p>

      </div>
      
      
      </div>

      
  )
}

export default TeamMembers