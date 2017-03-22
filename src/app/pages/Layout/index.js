import React, {PropTypes} from 'react'

// components
import ReduxToastr from 'react-redux-toastr'
import Header from './header'
import Footer from './footer'

export default function Layout({children, ...props}) {
  return (
    <div>
      <ReduxToastr
        timeOut={4000}
        preventDuplicates={true}
        transitionIn="fadeIn"
        transitionOut="fadeOut"/>
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