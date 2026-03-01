// import React from 'react'
// import Heading from '../component/Heading'
// import Container from '../component/Container'
// import Discription from '../component/Discription'


// const About = () => {
//   return (
//     <section className='pb-[50px]'>
//       <Container>
//   {/* <h1 className='text-[50px] text-black font-dm font-bold'>About Me</h1> */}
//         <Heading text='About Me'/>
//         <p className='text-[20px] text-black font-dm font-norma pb-[20px]'>







//         I'm a passionate frontend developer who recently completed a comprehensive web development course. I love turning ideas into reality through clean, efficient code and beautiful user interfaces.

// My journey in web development started with curiosity about how websites work, and it has grown into a deep passion for creating digital experiences that users love. I'm constantly learning new technologies and staying up-to-date with the latest trends in web development.

// When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.
//         </p>



// <Discription text='Education' para='Bse in CSE from Daffodill International University'/>
// <Discription text='Location' para='Dhaka, Bangladesh'/>
// <Discription text='Languages' para='Bengali, English'/>




//       </Container>
//     </section>
//   )
// }

// export default About

// responsiv

import React from 'react'
import Heading from '../component/Heading'
import Container from '../component/Container'
import Discription from '../component/Discription'
import Daffodil from '../assets/daffodil.jpg'
import Toufiq from '../assets/toufiq .jpg'
import Image from '../component/Image'
const About = ({id}) => {
  
  
  return (
    <section id={id} className="pb-12 pt-10">
      <Container>
        <Heading  text="About Us" className="mb-6" />
    <div className="flex flex-col md:flex-row items-center gap-6">
  {/* Left Side - Image */}
  <div className="w-full md:w-1/2 flex justify-center md:justify-start">
    <Image className="rounded-full" src={Toufiq} />
  </div>

  {/* Right Side - Text */}
  <div className="w-full md:w-1/2">
    <p className="text-base sm:text-lg md:text-xl text-black font-dm font-normal pb-8 leading-relaxed">
      I am Toufiq Lizon, founder of Toufiq Web & Media. As a Full Stack Web Developer, I build modern, responsive, and high-performance web applications, delivering scalable and user-friendly solutions with expertise in both front-end and back-end development.

      Skills include React.js, JavaScript, HTML5, CSS3, Tailwind CSS (Front-end), Node.js, Express.js (Back-end), and MongoDB. I also utilize Git, GitHub, and REST APIs to create clean, high-quality web solutions.

      Focused on on-time delivery, clean code practices, and long-term client satisfaction, I am ready to bring your business or personal project ideas to life.

      Let’s discuss your project!
    </p>
  </div>
</div>

      
          

        <Discription
          text="Education"
          para="BSc in CSE from Daffodil International University"
          className="mb-6"
        />
        <Image  className='w-full mb-2' src={Daffodil}/>
        <Discription text="Location" para="Barguna, Bangladesh" className="mb-6" />
        <iframe className='w-full h-[300px] mb-2' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3849.8470528273074!2d90.1074093295246!3d22.16321237161023!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x30aa999c769d1e1f%3A0x955bd9771fc8268f!2sBarguna!5e1!3m2!1sen!2sbd!4v1772360527976!5m2!1sen!2sbd" ></iframe>
        <Discription text="Languages" para="Bengali, English" />
      </Container>
    </section>
  )
}

export default About
