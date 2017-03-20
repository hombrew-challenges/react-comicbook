import React, {Component} from 'react'
import {Modal, Button, Col, Row} from 'react-bootstrap'

// img
import addToFavourites from '../../../assets/images/icons/btn-favourites-default.png'
import addedToFavourites from '../../../assets/images/icons/btn-favourites-primary.png'
import buyComic from '../../../assets/images/icons/shopping-cart-primary.png'

export default class AddToFavouritesModal extends Component {
  render() {
    return (
      <Modal
        bsSize="lg"
        show={this.props.show}
        onHide={this.props.onHide}
        className="add-to-favourites-modal">

        <Modal.Header closeButton></Modal.Header>

        <Modal.Body>
          <Col xs={4}>
            <img src={this.props.img} alt="Comic Cover"/>
          </Col>
          <Col xs={8}>
            <Row>
              <Col xs={12}>
                <h4 className="title">{this.props.title}</h4>
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
          <Col className="no-padding" xs={6}>
            <Button block className="padding-30 add">
              <img className="margin-right-10" src={addToFavourites} alt="added comics"/>Add to Favourites
            </Button>
          </Col>
          <Col className="no-padding" xs={6}>
            <Button block className="padding-30 buy" onClick={this.props.onHide}>
              <img className="margin-right-10" src={buyComic} alt="buy comics"/>Buy for $3.99
            </Button>
          </Col>
        </Modal.Footer>

      </Modal>
    )
  }
}