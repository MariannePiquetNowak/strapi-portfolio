import React from 'react'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div className="flex justify-center md:flex md:justify-end md:w-full lg:mt-16">
      <div className="wrapper pt-16 md:py-[0]">
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default Layout