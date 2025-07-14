import React from 'react'
import Container from '../component/Container'
import Flex from '../component/Flex'
import ProjectComponent from '../component/ProjectComponent'
import Heading from '../component/Heading'
import Oribi from '../assets/oribi.PNG'
import Innovat from '../assets/innovat.PNG'


const Project = () => {
  return (
   <section className='py-5'>
    <Container>

        <Heading className='pb-5' text='Projects '/>
        <Flex className='justify-center gap-x-5'>
<ProjectComponent img={Oribi} text='Oribi (Ecomarce website) ' web='https://eccomarce.vercel.app/'/>
<ProjectComponent img={Innovat} text='Innovat' web='https://innovet.vercel.app/'/>

        </Flex>
    </Container>
   </section>
  )
}

export default Project