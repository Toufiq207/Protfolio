import React from 'react'
import Footer from '../layout/Footer'
import { Outlet } from 'react-router-dom'
import Hero from '../layout/Hero'

const RootPage = () => {
  return (
    <div>
      <Hero/>
      <Outlet />

      <Footer />
    </div>
  )
}

export default RootPage