import React from 'react'
import Heading from '../component/Heading'
import Box from '../component/Box'
const Services = ({id}) => {
  return (
    <div id={id}>

<Heading className='pb-[50px] pt-12' text='Services '/>

  
        
       <div className='flex flex-wrap gap-[20px] justify-center'>
        <Box text='Web Desing'/> 
        <Box text='Web Devlopment'/>
        <Box text='Vedio Editting'/>
        
       </div>
      

   </div>
  )
}

export default Services