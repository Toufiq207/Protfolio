import React from 'react'
import Container from '../component/Container'
import Flex from '../component/Flex'
import { FaFacebook, FaLinkedin } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'

const Contact = () => {
  return (
    <section className='pt-10'>
        <Container>
            <Flex className='justify-center text-2xl gap-x-5 py-10 '>
              <a href="https://web.facebook.com/toufiq.lizon.barguna" target='_blank'>  <FaFacebook /></a>
             <a href="https://www.linkedin.com/in/toufiq-elahi-lizon-164139345/" target='_blank'>   <FaLinkedin /></a>
           <a href="https://mail.google.com/mail/?view=cm&fs=1&to=lijonlijon30@gmail.com" target="_blank" rel="noopener noreferrer">
      <MdEmail />
    </a>
              

            </Flex>
        </Container>
    </section>
  )
}

export default Contact