import React from 'react'
import Image from './Image'
import Flex from './Flex'
import Button from './Button'

const ProjectComponent = ({img,text,web}) => {
  return (
    <>
    <Flex className='flex-col relative'>


        <div className='bg-red-500 w-[300px] h-[200px] shadow-2xl rounded-[20px] '>
<Image className='h-full ' src={img}/>

<p className='text-[20px] text-black font-dm font-bold pb-[20px] pt-4'>{text}</p>
    </div>
     <div className='z-10 w-[300px] h-[200px]  bg-[#4f4f5480] absolute hover:bg-transparent duration-500 flex items-center justify-center'>
   <a href={web} target='blank'> <Button text='view'/></a>
     </div>
    </Flex>
    
     
    </>
  )
}

export default ProjectComponent