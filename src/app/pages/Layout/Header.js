import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Navbar, FormGroup, InputGroup, FormControl, Button} from 'react-bootstrap'

// actions
import {getCharacters} from '../../actions/characters'

// img
import marvelLogo from '../../../assets/images/logos/marvel-logo.png'
import searchIcon from '../../../assets/images/icons/search.png'

class Header extends Component {

  handleSubmit(e) {
    e.preventDefault()
    this.props.getCharacters({nameStartsWith: this.input.value})
  }

  render() {
    return (
      <Navbar className="cb-header" inverse fixedTop>
        <Navbar.Header>
          <Navbar.Brand>
            <a className='margin-right-15' href="#"><img src={marvelLogo} alt="marvel logo"/></a>
          </Navbar.Brand>
          <Navbar.Form className="searchbar">
            <form onSubmit={this.handleSubmit.bind(this)}>
              <FormGroup>
                <InputGroup>
                  <FormControl
                    disabled={this.props.characters.areLoading}
                    inputRef={ref => this.input = ref}
                    placeholder="Search character..."
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