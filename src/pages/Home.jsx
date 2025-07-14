import React from 'react'
import Lizon from '../layout/Lizon'
import Banner from '../layout/Banner'
import Navber from '../layout/Navbar'
import About from '../layout/About'
import Expreance from '../layout/Expreance'
import Footer from '../layout/Footer'
import Contact from '../layout/Contact'
import Project from '../layout/Project'






const Home = () => {
  return (
    <div>
        <Lizon/>
        <Navber/>
        <Banner/>
        <About/>
      
        <Expreance/>
<Project/>
     <Contact/>
        <Footer/>
   

    </div>
  )
}

export default Home