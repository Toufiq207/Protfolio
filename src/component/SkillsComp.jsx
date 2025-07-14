import React from 'react'
import Image from './Image'


import Flex from './Flex'
const SkillsComp = ({img,text,className}) => {
  return (
    <div className='mx-auto'>


<Image src={img}/>
<Flex className='items-center mt-[50px] gap-x-4'>
    <div className='w-[1200px] h-[20px]  border border-black  shadow-xl rounded-2xl '>

      <div className={` bg-amber-700 h-full  rounded-2xl ${className}`}></div>
 
  
</div>
<p className='text-[20px] text-black font-dm font-normal '>{text} </p>
</Flex>
    </div>
  )
}

export default SkillsComp