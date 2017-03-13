import React, { Component } from 'react'
import {Grid, Row, Col} from 'react-bootstrap'

// components
import CharacterList from './character-list'
import FavouriteList from './favourite-list'

export default class Characters extends Component {
  render() {
    return (
      <div className="characters-page">
        <Grid>
          <Row>
            <Col className="character-list padding-20" xs={12} md={8}>
              <CharacterList/>
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