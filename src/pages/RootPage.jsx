import React from 'react'
import Lizon from '../layout/Lizon'
import Navber from '../layout/Navber'
import Footer from '../layout/Footer'
import { Outlet } from 'react-router-dom'

const RootPage = () => {
  return (
    <div>
        <Lizon/>
        <Navber/>
<Outlet/>

        <Footer/>
    </div>
  )
}

export default RootPage