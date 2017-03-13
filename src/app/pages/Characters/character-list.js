import React from 'react'
import {Row, Col} from 'react-bootstrap'

// components
import {SectionTitle} from '../Components/sections'

// img
import charactersIcon from '../../../assets/images/icons/characters.png'

export default function CharacterList() {
  return (
    <div>
      <Row>
        <Col xs={12}><SectionTitle img={charactersIcon} label="Characters"/></Col>
      </Row>
      <Row>
        <Col xs={12} sm={6}>
          <Character/>
        </Col>
      </Row>
    </div>
  )
}

function Character() {
  return (
    <div>
      Hola
    </div>
  )
}