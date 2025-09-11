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

const About = ({id}) => {
  return (
    <section id={id} className="pb-12">
      <Container>
        <Heading text="About Me" className="mb-6" />

        <p className="text-base sm:text-lg md:text-xl text-black font-dm font-normal pb-8 leading-relaxed">
          I'm a passionate frontend developer who recently completed a comprehensive web development course. I love turning ideas into reality through clean, efficient code and beautiful user interfaces.

          My journey in web development started with curiosity about how websites work, and it has grown into a deep passion for creating digital experiences that users love. I'm constantly learning new technologies and staying up-to-date with the latest trends in web development.

          When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, or sharing my knowledge with the developer community.
        </p>

        <Discription
          text="Education"
          para="BSc in CSE from Daffodil International University"
          className="mb-6"
        />
        <Discription text="Location" para="Dhaka, Bangladesh" className="mb-6" />
        <Discription text="Languages" para="Bengali, English" />
      </Container>
    </section>
  )
}

export default About
