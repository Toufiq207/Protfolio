import React from 'react'
import Heading from '../component/Heading'
import Box from '../component/Box'
const Services = ({id}) => {
  return (
    <div id={id}>

<Heading className='pb-[50px]' text='Services '/>

  
        
       <div className='flex flex-wrap gap-[20px] justify-center'>
        <Box text='Front-End Devlopment'/> 
        <Box text='Responsive Desing'/>
        <Box text='Figma to react'/>
        
       </div>
      

   </div>
  )
}

export default Services