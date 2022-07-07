import React from 'react'
import Skateboarding from '../assets/Skateboarding.gif'

function Loading() {
  return (
      <div className='w-100 mt-20'>
        <img 
            src={Skateboarding} 
            alt="Loading..."
            width={50}
            className="text-center mx-auto"    
        />   
      </div>
        )
}

export default Loading