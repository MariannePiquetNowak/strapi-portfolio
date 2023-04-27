import React from 'react'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div className="md:flex justify-end md:w-full lg:my-16">
      <div className="md:w-10/12 lg:w-11/12 py-16 md:py-[0]">
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout