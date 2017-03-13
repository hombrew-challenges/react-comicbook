import React, { Component } from 'react'
import {Row, Col} from 'react-bootstrap'

// components
import {SectionTitle} from '../Components/sections'

// img
import favouritesIcon from '../../../assets/images/icons/favourites.png'

export default class FavouriteList extends Component {
  render() {
    return (
      <div>
        <Row>
          <Col xs={12} className="text-center">
            <SectionTitle img={favouritesIcon} label="My favourites"/>
          </Col>
        </Row>
      </div>
    )
  }
}