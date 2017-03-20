import React, {Component} from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import {Grid, Row, Col} from 'react-bootstrap'

// components
import {SectionTitle} from '../components/sections'
import ComicBook from '../components/comicbook'

// actions
import {favouritesRemove} from '../../actions/favourites'

// img
import favouritesIcon from '../../../assets/images/icons/favourites.png'

class MyFavourites extends Component {

  render() {
    const {favourites} = this.props
    return (
      <div className="character-profile-page">
        <Grid className="padding-20">
          <Row>
            <Col xs={12} className="margin-bottom-20">
              <SectionTitle img={favouritesIcon} label="My Favourites"/>
            </Col>
          </Row>

          <Row>
            {favourites.data.length === 0 ? (
              <div>
                <h4 className="no-results">You have no favourite comics. :(</h4>
              </div>
            ) : (
              <div>
                {favourites.data.map(comic => {
                  const {id, img, title} = comic
                  return (
                    <Col className="margin-bottom-10 text-center" key={id} md={4} xs={12}>
                      <ComicBook
                        id={id}
                        img={img}
                        label={title}
                        onRemove={this.props.favouritesRemove}/>
                    </Col>
                  )
                })}
              </div>

            )}
          </Row>
        </Grid>
      </div>
    )
  }
}

function mapStateToProps({favourites}) {
    return {favourites}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({favouritesRemove}, dispatch)
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(MyFavourites)