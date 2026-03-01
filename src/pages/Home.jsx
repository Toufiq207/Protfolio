import React from 'react'

import Banner from '../layout/Banner'
// import Navber from '../layout/Navbar'
import About from '../layout/About'
import Expreance from '../layout/Expreance'

import Contact from '../layout/Contact'
import Project from '../layout/Project'
import Services from '../layout/Services'
import Container from '../component/Container'
import AnalogClock from './AnalogClock'







const Home = () => {
  return (
   <Container>
     <div>
      <Banner id="banner" />
      <AnalogClock/>
      <About id="about" />
      <Expreance id="experience" />
      <Project id="projects" />
      <Services id = "services"/>
      <Contact id="contact" />
    </div>
   </Container>
  );
};


export default Home