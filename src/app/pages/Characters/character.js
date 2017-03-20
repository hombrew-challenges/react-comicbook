import React from 'react'
import {Row, Col, Button} from 'react-bootstrap'

export default function Character({name, description = 'No description.', thumbnail, comics, onClick}) {
  description = description.trim() === '' ? 'No description.' : description
  const avatar = `${thumbnail.path}.${thumbnail.extension}`
  if (comics.items.length === 0) comics.items.push({name: 'No related comics.'})

  return (
    <div className="character responsive-square">
      <div className="character-content">
        <Col xs={12}>

          <Row>
            <Col className="responsive-square no-padding" xs={6}>
              <div
                className="avatar responsive-square"
                style={{backgroundImage: `url(${avatar})`}}/>
            </Col>

            <Col className="responsive-square no-padding" xs={6}>
              <div className="character-info-wrapper responsive-square-content padding-left-10 padding-right-10">
                <div className="title">{name}</div>
                <div className="content padding-bottom-10">
                  {description}
                </div>
                <Button bsStyle="danger" className="margin-left-10" onClick={onClick}>View more</Button>
              </div>
            </Col>
          </Row>

          <Row>
            <Col xs={12}>
            <div className="subtitle margin-top-20 margin-bottom-20">Related Comics</div>
            </Col>
          </Row>

          <Row>
            {comics.items.filter((comic, i) => i < 4).map((comic, i) => {
              const {name} = comic
              return (
                <Col className="margin-bottom-10" key={i} xs={6}>
                  <div className="comic">
                    {name}
                  </div>
                </Col>
              )
            })}
          </Row>

        </Col>
      </div>
    </div>
  )
}