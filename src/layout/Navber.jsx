import React from 'react'

import Container from '../component/Container'
import Navberlist from '../component/Navberlist'
import Flex from '../component/Flex'
import { FaGithub } from 'react-icons/fa'

const Navber = () => {
  return (
    <section className='bg-primary py-4'>
        <Container>

<Flex className='justify-between pl-[40px] pr-[40px] items-center'>
    <Navberlist text='Home '/>
<Navberlist text='About'/>
<Navberlist text='Skills'/>
<Navberlist text='Projects'/>
<Navberlist text='Services'/>
<Navberlist text='Contact'/>
<FaGithub />
</Flex>
        </Container>
        
    </section>
  )
}

export default Navber