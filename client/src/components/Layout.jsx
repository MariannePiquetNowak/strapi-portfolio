import React from 'react'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div className="md:flex justify-end md:w-full">
      <div className="md:w-10/12 lg:w-11/12 py-16">
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout