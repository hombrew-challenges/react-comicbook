import React, {Component, PropTypes} from 'react'
import {Row, Col} from 'react-bootstrap'

// components
import {SectionTitle} from '../components/sections'
import ComicBook from '../components/comicbook'

// img
import favouritesIcon from '../../../assets/images/icons/favourites.png'

// constants
import {MY_FAVOURITES} from '../../config/constants/routes'

export default class FavouriteList extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs={12} className="text-center margin-bottom-20">
            <SectionTitle img={favouritesIcon} label="My favourites"/>
          </Col>
        </Row>
        {this.props.favourites.filter((f, i) => i < 4).map((f) => {
          return (
            <Row key={f.id}>
              <Col className="margin-bottom-10 text-center" xs={12}>
                <ComicBook
                  id={f.id}
                  img={f.img}
                  label={f.title}
                  onClick={() => this.props.goTo(MY_FAVOURITES)}
                  onRemove={this.props.favouritesRemove}/>
              </Col>
            </Row>
          )
        })}
      </div>
    )
  }
}


FavouriteList.propTypes = {
  favourites: PropTypes.array.isRequired,
  favouritesRemove: PropTypes.func.isRequired
}