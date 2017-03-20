import React, {Component} from 'react'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import LoadingBar from 'react-redux-loading-bar'
import {Navbar, FormGroup, InputGroup, FormControl, Button} from 'react-bootstrap'
import {Link} from 'react-router'
import {CHARACTERS} from '../../config/constants/routes'

// actions
import {charactersFilter, getCharacters} from '../../actions/characters'

// img
import marvelLogo from '../../../assets/images/logos/marvel-logo.png'
import searchIcon from '../../../assets/images/icons/search.png'

class Header extends Component {

  searchBarConfiguration() {
    switch(location.pathname) {
      case CHARACTERS:
        this.word = this.props.characters.filters.word
        this.filter = this.props.charactersFilter
        this.getElements = this.props.getCharacters
        this.placeholder = 'Search a character...'
        break
      default:
        this.word = ''
        this.filter = () => {return}
        this.getElements = () => {return}
        this.placeholder = ''
        break
    }
  }


  handleSubmit(e) {
    e.preventDefault()
    const search = this.word === '' ? {} : {nameStartsWith: this.word}
    this.getElements(search)
  }

  handleChange(e) {
    this.filter({filter: 'word', value: e.target.value})
  }

  render() {
    this.searchBarConfiguration()
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
                    disabled={this.props.loadingBar > 0}
                    value={this.word}
                    onChange={this.handleChange.bind(this)}
                    placeholder={this.placeholder}
                    type="text"/>
                  <InputGroup.Button>
                    <Button
                      disabled={this.props.loadingBar > 0}
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
//   params: PropTypes.object.isRequired
// }

function mapStateToProps({loadingBar, characters}) {
    return {loadingBar, characters}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getCharacters, charactersFilter}, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header)