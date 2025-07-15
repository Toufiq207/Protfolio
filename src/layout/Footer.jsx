// import React from 'react'
// import Container from '../component/Container'

// const Footer = () => {
//   return (
//   <footer className='bg-secondary py-3'>
// <Container>
//      <p className='text-[20px] text-amber-100 font-dm font-norma py-[20px] text-center'>© 2025 Toufiq Lizon. Built with React and Tailwind CSS.</p>
// </Container>


//   </footer>
//   )
// }

// export default Footer


import React from 'react'
import Container from '../component/Container'

const Footer = () => {
  return (
    <footer className="bg-secondary py-6">
      <Container>
        <p className="text-base sm:text-lg md:text-xl text-amber-100 font-dm font-normal text-center leading-relaxed">
          © 2025 Toufiq Lizon. Built with <span className="font-bold">React</span> and <span className="font-bold">Tailwind CSS</span>.
        </p>
      </Container>
    </footer>
  )
}

export default Footer
