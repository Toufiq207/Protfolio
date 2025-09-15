// import React, { Component, useState } from 'react'
// import SkillsComp from '../component/SkillsComp'
// import Container from '../component/Container'
// import Heading from '../component/Heading'
// import Html from '../assets/html .png'
// import Css from '../assets/css.webp'
// import JavaScript from '../assets/javaScript.png'
// import Tailwind from '../assets/tailwind.PNG'


// // import Css from '../assets/css.png'
// // import JavaScript from '../assets/javaScript.png'


// import Flex from '../component/Flex'
// import { IoIosArrowDown, IoIosArrowForward, } from 'react-icons/io'
// const Expreance = () => {
//   let [show, setShow] = useState(false)

//   let handleshow = () => {
//     setShow(!show)
//   }

//   return (
//     <div>
//       <Container>
//         <Heading  text='Skills' />
//       <div 
//   className=' flex justify-center items-center h-12 cursor-pointer'
//   onClick={handleshow}
// >
//   {show ? <IoIosArrowDown className=' text-2xl' /> : <IoIosArrowForward className=' text-2xl' />}
// </div>
//         {
//           show ?

//             <Flex className='flex-col gap-y-[50px] '>
//               <SkillsComp className='w-9/10' text='95%' img={Html} />
//               <SkillsComp className='w-9/10' text='90%' img={Css} />
//               <SkillsComp className='w-8/10' text='85%' img={JavaScript} />
//               <SkillsComp className='w-8/10' text='80%' img={Tailwind} />

//               {/* <SkillsComp text='95%' img={Css}/> */}
//               {/* <SkillsComp text='95%' img={JavaScript}/> */}



//             </Flex> : ""
//         }
//       </Container>

//     </div>
//   )
// }

// export default Expreance



import React, { useState } from 'react'
import SkillsComp from '../component/SkillsComp'
import Container from '../component/Container'
import Heading from '../component/Heading'
import Html from '../assets/html .png'
import Css from '../assets/css.webp'
import JavaScript from '../assets/javaScript.png'
import Tailwind from '../assets/tailwind.PNG'
import Reak from '../assets/react.PNG'
import Flex from '../component/Flex'
import { IoIosArrowDown, IoIosArrowForward } from 'react-icons/io'

const Expreance = ({id}) => {
  const [show, setShow] = useState(false)

  const handleShow = () => setShow(!show)

  return (
    <section id={id} className="py-12">
      <Container>
        <Heading text="Skills" className="mb-4 text-center" />

        <div
          onClick={handleShow}
          className="flex justify-center items-center h-12 cursor-pointer mb-6"
          aria-label="Toggle skills list"
        >
          {show ? (
            <IoIosArrowDown className="text-2xl" />
          ) : (
            <IoIosArrowForward className="text-2xl" />
          )}
        </div>

        {show && (
          <Flex className="flex-col gap-y-8">
            <SkillsComp className="w-[95%] sm:w-11/12" text="95%" img={Html} />
            <SkillsComp className="w-[90%] sm:w-10/12" text="90%" img={Css} />
            <SkillsComp className="w-[85%] sm:w-10/12" text="85%" img={JavaScript} />
            <SkillsComp className="w-[90%] sm:w-10/12" text="85%" img={Reak} />
            <SkillsComp className="w-[80%] sm:w-9/12" text="80%" img={Tailwind} />
          </Flex>
        )}
      </Container>
    </section>
  )
}

export default Expreance
