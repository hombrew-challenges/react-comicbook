import React, {PropTypes} from 'react'

// components
import Header from './Header'
import Footer from './Footer'

export default function App({children}) {
  return (
    <div>
      <Header/>
      <div className="cb-content margin-top-50">{children}</div>
      <Footer/>
    </div>
  )
}

App.propTypes = {
  children: PropTypes.object.isRequired
}