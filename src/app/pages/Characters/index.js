import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Grid, Row, Col} from 'react-bootstrap'

// components
import CharacterList from './character-list'
import FavouriteList from './favourite-list'

// actions
import {getCharacters, charactersFilter} from '../../actions/characters'
import {getCharacterProfile} from '../../actions/character-profile'
import {favouritesRemove} from '../../actions/favourites'
import {goTo} from '../../actions/helpers'

class Characters extends Component {

  constructor(props) {
    super(props)
    this.getNewPage = this.getNewPage.bind(this)
  }

  componentWillMount() {
    if (!this.props.characters.areCached) {
      this.props.getCharacters()
    }
  }

  getNewPage(page, limit) {
    const offset = (page - 1) * limit
    let nameStartsWith = this.props.characters.filters.word
    nameStartsWith = nameStartsWith === '' ? {} : {nameStartsWith}
    this.props.getCharacters({offset, ...nameStartsWith})
  }

  render() {
    return (
      <div className="characters-page">
        <Grid>
          <Row>
            <Col className="character-list padding-20" xs={12} md={8}>
              <CharacterList
                getNewPage={this.getNewPage}
                getCharacterProfile={this.props.getCharacterProfile}
                {...this.props.characters}/>
            </Col>
            <Col className="favourite-list padding-20 hidden-xs hidden-sm" md={4}>
              <FavouriteList
                goTo={this.props.goTo}
                favourites={this.props.favourites.data}
                favouritesRemove={this.props.favouritesRemove}/>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps({characters, favourites}) {
  return {characters, favourites}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    getCharacters, getCharacterProfile, charactersFilter, favouritesRemove, goTo
  }, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Characters)