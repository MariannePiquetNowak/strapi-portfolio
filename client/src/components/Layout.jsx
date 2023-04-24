import React from 'react'
import Footer from './Footer'

const Layout = ({children}) => {
  return (
    <div className="container">
        {children}
        <Footer />
    </div>
  )
}

export default Layout