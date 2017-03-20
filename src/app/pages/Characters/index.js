import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Grid, Row, Col} from 'react-bootstrap'

// components
import CharacterList from './character-list'
import FavouriteList from './favourite-list'

// actions
import {getCharacters} from '../../actions/characters'

class Characters extends Component {

  constructor(props) {
    super(props)
    this.getNewPage = this.getNewPage.bind(this)
  }

  componentWillMount() {
    this.props.getCharacters()
  }

  getNewPage(page, limit) {
    const offset = (page - 1) * limit
    const {nameStartsWith} = this.props.characters.params
    this.props.getCharacters({offset, nameStartsWith})
  }

  render() {
    return (
      <div className="characters-page">
        <Grid>
          <Row>
            <Col className="character-list padding-20" xs={12} md={8}>
              <CharacterList getNewPage={this.getNewPage} {...this.props.characters}/>
            </Col>
            <Col className="favourite-list padding-20 hidden-xs hidden-sm" md={4}>
              <FavouriteList/>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps({characters}) {
    return {characters}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getCharacters}, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Characters)