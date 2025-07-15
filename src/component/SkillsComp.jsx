import React from 'react'
import Image from './Image'


import Flex from './Flex'
const SkillsComp = ({img,text,className}) => {
  return (
    <div className='mx-auto'>


<Image className='w-[200px]' src={img}/>
<Flex className='items-center mt-[50px] gap-x-4'>
    <div className='w-[1200px] h-[20px]  border border-black  shadow-xl rounded-2xl md:block hidden'>

      <div className={` bg-amber-700 h-full  rounded-2xl ${className}`}></div>
 
  
</div>
<p className='text-[20px] text-black font-dm font-normal '>{text} </p>
</Flex>
    </div>
  )
}

export default SkillsComp

// responsiv


// import React from 'react'
// import Image from './Image'
// import Flex from './Flex'

// const SkillsComp = ({ img, text, className }) => {
//   return (
//     <div className='mx-auto w-full max-w-xl px-4 sm:px-6'>

//       <Image src={img} alt={text} className="w-16 h-16 sm:w-20 sm:h-20 mx-auto" />

//       <Flex className='items-center mt-8 gap-x-4'>

//         <div className='flex-1 h-5 border border-black shadow-xl rounded-2xl overflow-hidden'>

//           <div className={`bg-amber-700 h-full rounded-2xl transition-all duration-500 ${className}`}></div>

//         </div>

//         <p className='text-base sm:text-lg text-black font-dm font-normal whitespace-nowrap'>
//           {text}
//         </p>

//       </Flex>

//     </div>
//   )
// }

// export default SkillsComp
