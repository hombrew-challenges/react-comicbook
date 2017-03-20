import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Grid, Row, Col} from 'react-bootstrap'

// components
import {SectionTitle} from '../components/sections'
import ComicBook from '../components/comicbook'
import Paginator from '../components/paginator'

// actions
import {getCharacterProfile, getCharacterComics} from '../../actions/character-profile'

// img
import charactersIcon from '../../../assets/images/icons/characters.png'
import favouritesIcon from '../../../assets/images/icons/favourites.png'

class CharacterProfile extends Component {

  componentWillMount() {
    if (this.props.characterProfile.data === null) {
      this.props.getCharacterProfile(this.props.params.id)
    }
  }

  getNewPage(id, page, limit) {
    const offset = (page - 1) * limit
    let nameStartsWith = this.props.characterProfile.filters.word
    nameStartsWith = nameStartsWith === '' ? {} : {nameStartsWith}
    this.props.getCharacterComics(id, {offset, ...nameStartsWith})
  }

  render() {
    console.log('character profile index', this.props.characterProfile)
    const {isCached, comics, data: character} = this.props.characterProfile
    let name = 'Character Profile'
    if (isCached && character) {
      name = character.results[0].name
    }
    const {results: characterComics, limit, offset, total} = comics
    return (
      <div className="character-profile-page">
        <Grid className="padding-20">
          {isCached && (
            <div>
              <Row>
                <Col className="margin-bottom-30" xs={12}>
                  <SectionTitle img={charactersIcon} label={name}/>
                </Col>
              </Row>
              <Row className="character-profile margin-bottom-20">

              </Row>

              <Row>
                <Col xs={12} className="margin-bottom-20">
                  <SectionTitle img={favouritesIcon} label="Comics"/>
                </Col>
              </Row>

              <Row>
                {characterComics.length === 0 ? (
                  <div>
                    <h4 className="no-results">This character has no comics.</h4>
                  </div>
                ) : (
                  <div>
                    {characterComics.map(c => {
                      const {id, title} = c
                      const thumbnail = `${c.thumbnail.path}.${c.thumbnail.extension}`
                      return (
                        <Col className="margin-bottom-10 text-center" key={id} md={4} xs={12}>
                          <ComicBook img={thumbnail} label={title}/>
                        </Col>
                      )
                    })}
                    <Col className="text-center" xs={12}>
                      <Paginator
                        total={total}
                        limit={limit}
                        offset={offset}
                        onSelect={(page) => this.getNewPage(this.props.params.id, page, limit)}/>
                    </Col>
                  </div>

                )}
              </Row>
            </div>
          )}
        </Grid>
      </div>
    )
  }
}

function mapStateToProps({characterProfile}) {
    return {characterProfile, getCharacterComics}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getCharacterProfile, getCharacterComics}, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CharacterProfile)