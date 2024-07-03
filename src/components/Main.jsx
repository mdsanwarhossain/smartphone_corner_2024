import React from 'react'
import Nav from './Nav'
import Footer from './Footer'
import { Outlet } from 'react-router-dom'
import { AuthProvider } from './AuthProvider'
// import Home from './Home'

const Main = () => {
  return (
    <div>
      <AuthProvider>
    <Nav/>
     <Outlet/>
     <Footer/>
     </AuthProvider>
    </div>
  )
}

export default Main;
