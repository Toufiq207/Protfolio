import React from 'react'

import Container from '../component/Container'
import Navberlist from '../component/Navberlist'
import Flex from '../component/Flex'
// import { FaGithub } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const Navber = () => {
  return (
    <section className='bg-primary py-4'>
        <Container>

<Flex className='justify-between pl-[40px] pr-[40px] items-center'>

<Link to="/">    <Navberlist text='Home '/></Link>
<Link to="/about"><Navberlist text='About'/></Link>
<Link to="/skills"><Navberlist text='Skills'/></Link>
<Link to="/projects"><Navberlist text='Projects'/></Link>
<Link to="/service"><Navberlist text='Services'/></Link>
<Link to="/contact"><Navberlist text='Contact'/></Link>













{/* <FaGithub /> */}
</Flex>
        </Container>
        
    </section>
  )
}

export default Navber