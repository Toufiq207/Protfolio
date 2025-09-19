import React from 'react'
import Container from '../component/Container'
import Image from '../component/Image'
import BannerOne from '../assets/bannerOne.jpg'
import Button from '../component/Button'
import Heading from '../component/Heading'

const Banner = ({id}) => {
  return (
    <section id={id} className='group relative  md:pt-[100px] pt-[130px]'>
      <Container>




        <Image className='w-full ' src={BannerOne} />
        <div className=' w-full bg-[#4f4f5480] opacity-0 group-hover:opacity-100
absolute top-[40px]  md:top-1/2 left-1/2 transform -translate-x-1/2 md:-translate-y-1/2
z-10 duration-500 flex flex-col items-center justify-center py-[10px] md:py-[50px] '>
          <div className='bg-amber-800 w-[200px] h-[200px] rounded-full flex  items-center justify-center'>
            <div className='bg-black w-[180px] h-[180px] rounded-full flex items-center justify-center'>
              <h1 className='text-[70px] text-white font-dm font-bold'>TL</h1>

            </div>

          </div>
          <Heading className='!text-white' text='Toufiq Lizon' />
          <h1 className='text-[40px] text-white font-dm font-normal'>Protfolio Web Developer</h1>
          {/* <p className='text-[20px] text-amber-100 font-dm font-normal pb-[20px]'>Passionate about creating beautiful, responsive, and user-friendly web experiences. I specialize in React, JavaScript, and modern web technologies.</p> */}
          {/* <p className="text-base sm:text-lg md:text-xl text-amber-100 font-dm font-normal pb-5 leading-relaxed text-center max-w-3xl mx-auto">
  Passionate about creating beautiful, responsive, and user-friendly web experiences. I specialize in React, JavaScript, and modern web technologies.
</p> */}
          <p className="text-base sm:text-lg md:text-xl text-amber-100 font-dm font-normal pb-5 leading-relaxed text-center break-words px-4 max-w-3xl mx-auto">
            Passionate about creating beautiful, responsive, and user-friendly web experiences. I specialize in React, JavaScript, and modern web technologies.
          </p>



          <div className='flex gap-2'>
            <Button text='Get In Touch' />
            <Button text='View My Work' />
          </div>



        </div>
      </Container>
    </section>
  )
}

export default Banner
//reponsive


