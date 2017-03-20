import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Grid, Row, Col} from 'react-bootstrap'

// components
import {SectionTitle} from '../components/sections'
import ComicBook from '../components/comicbook'
import Paginator from '../components/paginator'
import AddToFavouritesModal from './add-to-favourites-modal'

// actions
import {getCharacterProfile, getCharacterComics} from '../../actions/character-profile'
import {favouritesAdd} from '../../actions/favourites'

// img
import charactersIcon from '../../../assets/images/icons/characters.png'
import favouritesIcon from '../../../assets/images/icons/favourites.png'

class CharacterProfile extends Component {

  state = {showModal: false, modalContent: {}}

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

  close() {
    this.setState({ showModal: false })
  }

  open(id, title, description, img) {
    
    this.setState({ showModal: true, modalContent: {id, title, description, img} })
  }

  render() {
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
                    {characterComics.map(comic => {
                      const {id, title, description} = comic
                      const thumbnail = `${comic.thumbnail.path}.${comic.thumbnail.extension}`
                      return (
                        <Col className="margin-bottom-10 text-center" key={id} md={4} xs={12}>
                          <ComicBook
                            img={thumbnail}
                            label={title}
                            onClick={() => this.open(id, title, description, thumbnail)}/>
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
        <AddToFavouritesModal
          show={this.state.showModal}
          onHide={this.close.bind(this)}
          onAdd={this.props.favouritesAdd}
          list={this.props.favourites.data}
          {...this.state.modalContent}/>
      </div>
    )
  }
}

function mapStateToProps({characterProfile, favourites}) {
    return {characterProfile, favourites}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({getCharacterProfile, getCharacterComics, favouritesAdd}, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(CharacterProfile)