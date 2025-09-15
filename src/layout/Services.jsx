import React from 'react'
import Heading from '../component/Heading'
import Box from '../component/box'
const Services = ({id}) => {
  return (
    <div id={id}>

<Heading className='pb-[50px]' text='Services '/>

     {/* <p className='text-[20px] text-black font-dm font-norma pb-[20px] text-center'>







      I am Toufiq Lizon, a passionate Front-End Developer with specialized expertise in building professional portfolio websites using React.js and Tailwind CSS. My goal is to create websites that beautifully represent an individual’s or brand’s identity in the digital world.
        </p> */}
        
       <div className='flex flex-wrap gap-x-[20px] justify-center'>
        <Box text='Front-End Devlopment'/> 
        <Box text='Responsive Desing'/>
        <Box text='Figma to react'/>
       </div>
      

   </div>
  )
}

export default Services