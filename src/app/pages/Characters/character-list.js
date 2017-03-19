import React from 'react'
import {Row, Col} from 'react-bootstrap'

// components
import {SectionTitle} from '../Components/sections'
import Character from './character'

// img
import charactersIcon from '../../../assets/images/icons/characters.png'

export default function CharacterList({areLoading, areCached, data}) {
  const {results: characters} = data
  return (
    <div>
      <Row>
        <Col className="margin-bottom-30" xs={12}>
          <SectionTitle img={charactersIcon} label="Characters"/>
        </Col>
      </Row>
      <Row>
        {(areCached && !areLoading) && (characters.length === 0 ? (
          <div>
            <h4 className="no-character">Your search didn't match any character.</h4>
          </div>
        ) : (
          <div>
            {characters.map((character) => {
              return (
                <Col className="margin-bottom-30" key={character.id} xs={12} sm={6}>
                  <Character {...character}/>
                </Col>
              )
            })}
          </div>
        ))}
      </Row>
    </div>
  )
}
