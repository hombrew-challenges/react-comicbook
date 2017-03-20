import React from 'react'
import {Row, Col} from 'react-bootstrap'

// components
import {SectionTitle} from '../Components/sections'
import Character from './character'
import Paginator from '../Components/paginator'

// img
import charactersIcon from '../../../assets/images/icons/characters.png'

export default function CharacterList({areLoading, areCached, data, getNewPage}) {
  const {results: characters, total, limit, offset} = data
  return (
    <div>
      <Row>
        <Col className="margin-bottom-30" xs={12}>
          <SectionTitle img={charactersIcon} label="Characters"/>
        </Col>
      </Row>
      <Row>
        {(areCached) && (characters.length === 0 ? (
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
            <Col className="text-center" xs={12}>
              <Paginator
                total={total}
                limit={limit}
                offset={offset}
                onSelect={(page) => getNewPage(page, limit)}/>
            </Col>
          </div>
        ))}
      </Row>
    </div>
  )
}

