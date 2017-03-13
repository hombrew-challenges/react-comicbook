import React from 'react'
import {Row, Col, Button} from 'react-bootstrap'

// components
import {SectionTitle} from '../Components/sections'

// img
import charactersIcon from '../../../assets/images/icons/characters.png'
import spidermanAvatar from '../../../assets/images/avatars/spiderman-avatar.jpg'

export default function CharacterList() {
  return (
    <div>
      <Row>
        <Col xs={12}><SectionTitle img={charactersIcon} label="Characters"/></Col>
      </Row>
      <Row>
        {[0, 1, 2, 3, 4, 5, 6, 7, 8, 9].map((e) => {
          return (
            <Col className="margin-bottom-30" key={e} xs={12} sm={6}>
              <Character/>
            </Col>
          )
        })}
      </Row>
    </div>
  )
}

function Character() {
  return (
    <div className="character responsive-square">
      <div className="character-content">
        <Col xs={12}>

          <Row>
            <Col className="responsive-square no-padding" xs={6}>
              <div
                className="avatar responsive-square"
                style={{backgroundImage: `url(${spidermanAvatar})`}}/>
            </Col>

            <Col className="responsive-square no-padding" xs={6}>
              <div className="character-info-wrapper responsive-square-content padding-left-10 padding-right-10">
                <div className="title">Spider Man</div>
                <div className="content padding-bottom-10">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt, necessitatibus molestiae nemo eius, obcaecati laboriosam iusto placeat voluptas consequatur saepe corrupti ad, qui nulla? Nisi laudantium quos eius possimus, in.
                </div>
                <Button bsStyle="danger" className="margin-left-10">View more</Button>
              </div>
            </Col>
          </Row>

          <Row>

          </Row>

        </Col>
      </div>
    </div>
  )
}