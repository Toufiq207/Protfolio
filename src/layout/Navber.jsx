import React from 'react'

import Container from '../component/Container'
import Navberlist from '../component/Navberlist'
import Flex from '../component/Flex'
<Navberlist text='Contact'/>
import { Link } from 'react-router-dom'

const Navber = () => {
  return (
    <section className='bg-primary py-4'>
        <Container>

<Flex className='justify-between pl-[40px] pr-[40px] items-center'>

<Link to="/"><Navberlist text='Home '/> </Link>   
{/* <Link to="/about"></Link>
<Link to="/skills"></Link>
<Link to="/projects"></Link>
<Link to="/service"></Link>
<Link to="/contact"></Link> */}






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



// import React from 'react';
// import Container from '../component/Container';
// import Navberlist from '../component/Navberlist';
// import Flex from '../component/Flex';
// import { Link } from 'react-router-dom';

// const Navber = () => {
// return (
// <section className='bg-primary py-4'>
// <Container>
// <Flex className='justify-between px-[40px] items-center'>
// <div className="flex gap-6">
// <Link to="/"><Navberlist text='Home' /></Link>
// <Link to="/about"><Navberlist text='About' /></Link>
// <Link to="/skills"><Navberlist text='Skills' /></Link>
// <Link to="/projects"><Navberlist text='Projects' /></Link>
// <Link to="/service"><Navberlist text='Services' /></Link>
// <Link to="/contact"><Navberlist text='Contact' /></Link>
// </div>
// </Flex>
// </Container>
// </section>
// );
// };

// export default Navber;