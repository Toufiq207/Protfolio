import React from 'react'
import Container from '../component/Container'
import SkillComponent from '../component/SkillComponent'

import Flex from '../component/Flex'

const Skill = () => {
  return (
    <section>
        <Container>






            <Flex className='flex-col gap-y-10'>
                <SkillComponent text='Education'para='BSc in CSE from daffodill international univesity'/>
            <SkillComponent text='Location'para='Dhaka, Bangladesh'/>
            <SkillComponent text='Languages'para='Bengali, English'/>
            </Flex>


        </Container>
    </section>
  )
}

export default Skill