import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'

// components
import {SectionTitle} from '../Components/sections'
import ComicBook from '../Components/comicbook'

// img
import favouritesIcon from '../../../assets/images/icons/favourites.png'
import spidermanComicbook from '../../../assets/images/comics/amazing-spider-man-316.jpg'

export default class FavouriteList extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs={12} className="text-center margin-bottom-20">
            <SectionTitle img={favouritesIcon} label="My favourites"/>
          </Col>
        </Row>
        {[0, 1, 2 ,3].map((e) => {
          return (
            <Row key={e}>
              <Col className="margin-bottom-10 text-center" key={e} xs={12}>
                <ComicBook img={spidermanComicbook} label={'Amazing Spiderman - 316'}/>
              </Col>
            </Row>
          )
        })}
      </div>
    )
  }
}