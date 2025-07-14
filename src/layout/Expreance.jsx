import React, { Component, useState } from 'react'
import SkillsComp from '../component/SkillsComp'
import Container from '../component/Container'
import Heading from '../component/Heading'
import Html from '../assets/html .png'
import Css from '../assets/css.webp'
import JavaScript from '../assets/javaScript.png'
import Tailwind from '../assets/tailwind.PNG'


// import Css from '../assets/css.png'
// import JavaScript from '../assets/javaScript.png'


import Flex from '../component/Flex'
import { IoIosArrowDown, IoIosArrowForward, } from 'react-icons/io'
const Expreance = () => {
  let [show, setShow] = useState(false)

  let handleshow = () => {
    setShow(!show)
  }

  return (
    <div>
      <Container>
        <Heading  text='Skills' />
      <div 
  className=' flex justify-center items-center h-12 cursor-pointer'
  onClick={handleshow}
>
  {show ? <IoIosArrowDown className=' text-2xl' /> : <IoIosArrowForward className=' text-2xl' />}
</div>
        {
          show ?

            <Flex className='flex-col gap-y-[50px] '>
              <SkillsComp text='95%' img={Html} />
              <SkillsComp text='90%' img={Css} />
              <SkillsComp text='85%' img={JavaScript} />
              <SkillsComp text='80%' img={Tailwind} />

              {/* <SkillsComp text='95%' img={Css}/> */}
              {/* <SkillsComp text='95%' img={JavaScript}/> */}



            </Flex> : ""
        }
      </Container>

    </div>
  )
}

export default Expreance