import React from 'react'
import Heading from './Heading'

const Box = ({text}) => {
  return (
    <div className=' relative'>
        <div className='w-[400px] h-[400px]  flex justify-center items-center border border-black'>
          <Heading  text={text}/>
        
        </div>
        <div className='w-[400px] h-[400px]  flex justify-center items-center bg-[#0707ecbf] absolute top-0 hover:bg-transparent duration-500'>
          
        
        </div>
        
    </div>
  )
}

export default Box