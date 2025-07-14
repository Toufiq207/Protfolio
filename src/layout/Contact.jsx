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
                <FaFacebook />
                <FaLinkedin />
                <MdEmail />

            </Flex>
        </Container>
    </section>
  )
}

export default Contact