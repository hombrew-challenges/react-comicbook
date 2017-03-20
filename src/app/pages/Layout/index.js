import React, {PropTypes} from 'react'

// components
import Header from './header'
import Footer from './footer'

export default function Layout({children, ...props}) {
  console.log('all props', props)
  return (
    <div>
      <Header params={props.params}/>
      <div className="cb-content margin-top-50">
        {children}
      </div>
      <Footer/>
    </div>
  )
}

Layout.propTypes = {
  children: PropTypes.object.isRequired
}