import React from 'react'
import {Navbar, FormGroup, InputGroup, FormControl, Button} from 'react-bootstrap'

// img
import marvelLogo from '../../../assets/images/logos/marvel-logo.png'
import searchIcon from '../../../assets/images/icons/search.png'

export default function Header() {
  return (
    <Navbar className="cb-header" inverse fixedTop>
      <Navbar.Header>
        <Navbar.Brand>
          <a className='margin-right-15' href="#"><img src={marvelLogo} alt="marvel logo"/></a>
        </Navbar.Brand>
        <Navbar.Form className="searchbar">
          <FormGroup>
            <InputGroup>
              <FormControl placeholder="Search character..." type="text"/>
              <InputGroup.Button>
                <Button block className="search-button padding-5">
                  <img src={searchIcon} alt="search icon"/>
                </Button>
              </InputGroup.Button>
            </InputGroup>
          </FormGroup>
        </Navbar.Form>
      </Navbar.Header>
    </Navbar>
  )
}

// Header.propTypes = {
// }