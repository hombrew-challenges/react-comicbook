import React, {Component, PropTypes} from 'react'
import {Modal, Button, Col, Row} from 'react-bootstrap'

// img
import addToFavourites from '../../../assets/images/icons/btn-favourites-default.png'
import addedToFavourites from '../../../assets/images/icons/btn-favourites-primary.png'
import buyComic from '../../../assets/images/icons/shopping-cart-primary.png'

export default class AddToFavouritesModal extends Component {
  render() {
    const {id, title, img} = this.props
    const favourite = {id, title, img}
    const added = this.props.list.some((favourite) => favourite.id === id)
    return (
      <Modal
        bsSize="lg"
        show={this.props.show}
        onHide={this.props.onHide}
        className="add-to-favourites-modal">

        <Modal.Header closeButton></Modal.Header>

        <Modal.Body>
          <Col sm={4} xs={12}>
            <img src={img} alt="Comic Cover"/>
          </Col>
          <Col sm={8} xs={12}>
            <Row>
              <Col xs={12}>
                <h4 className="title">{title}</h4>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <p className="description">{this.props.description}</p>
              </Col>
            </Row>
          </Col>
        </Modal.Body>

        <Modal.Footer className="no-padding">
          <Col className="no-padding" sm={6} xs={12}>
            {added ? (
              <Button block className="padding-30 added">
                <img className="margin-right-10" src={addedToFavourites} alt="added comics"/>Added to Favourites
              </Button>
            ) : (
              <Button
                block
                className="padding-30 add"
                onClick={() => {
                  this.props.onAdd(favourite)
                  this.props.onHide()
                }}>
                <img className="margin-right-10" src={addToFavourites} alt="added comics"/>Add to Favourites
              </Button>
            )}
          </Col>
          <Col className="no-padding" sm={6} xs={12}>
            <Button block className="padding-30 buy">
              <img className="margin-right-10" src={buyComic} alt="buy comics"/>Buy for $3.99
            </Button>
          </Col>
        </Modal.Footer>

      </Modal>
    )
  }
}

AddToFavouritesModal.propTypes = {
  show: PropTypes.bool.isRequired,
  onHide: PropTypes.func.isRequired,
  img: PropTypes.string,
  title: PropTypes.string,
  id: PropTypes.number,
  description: PropTypes.string,
  onAdd: PropTypes.func.isRequired
}