import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import LoadingBar from 'react-redux-loading-bar'
import {Navbar, FormGroup, InputGroup, FormControl, Button} from 'react-bootstrap'
import {Link} from 'react-router'
import {CHARACTERS} from '../../config/constants/routes'

// actions
import {getCharacters} from '../../actions/characters'

// img
import marvelLogo from '../../../assets/images/logos/marvel-logo.png'
import searchIcon from '../../../assets/images/icons/search.png'

class Header extends Component {

  handleSubmit(e) {
    e.preventDefault()
    const search = this.input.value === '' ? {} : {nameStartsWith: this.input.value}
    this.props.getCharacters(search)
  }

  render() {
    return (
      <Navbar className="cb-header" inverse fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <Link className='margin-right-15' to={CHARACTERS}>
              <img src={marvelLogo} alt="marvel logo"/>
            </Link>
          </Navbar.Brand>
          <Navbar.Form className="searchbar">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <FormGroup>
                <InputGroup>
                  <FormControl
                    disabled={this.props.characters.areLoading}
                    inputRef={ref => this.input = ref}
                    placeholder="Search a character..."
                    type="text"/>
                  <InputGroup.Button>
                    <Button
                      disabled={this.props.characters.areLoading}
                      block
                      type="submit"
                      className="search-button padding-5">
                      <img src={searchIcon} alt="search icon"/>
                    </Button>
                  </InputGroup.Button>
                </InputGroup>
              </FormGroup>
            </form>
          </Navbar.Form>
        </Navbar.Header>
        <LoadingBar className="loading-bar"/>
      </Navbar>
    )
  }
}

// Header.propTypes = {
// }

function mapStateToProps({characters}) {
    return {characters}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getCharacters}, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)