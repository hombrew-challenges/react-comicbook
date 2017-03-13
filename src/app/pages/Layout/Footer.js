import React from 'react'
import {Navbar} from 'react-bootstrap'

// img
import grabilityLogo from '../../../assets/images/logos/grability-logo.png'

export default function Footer() {
  return (
    <Navbar className="cb-footer no-margin" inverse>
      <Navbar.Header className="no-margin">
        <Navbar.Brand>
          <span className="absolute-vertical-centered margin-left-50">
            Grability 2016 - Todos los derechos reservados
          </span>
        </Navbar.Brand>
        <div className="grability-logo-wrapper pull-right margin-right-50">
          <img className="margin-20" src={grabilityLogo} alt="grability logo"/>
        </div>
      </Navbar.Header>
    </Navbar>
  )
}

// Footer.propTypes = {
// }