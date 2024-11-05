import React from 'react'
import "./welcome.css"
import { Col, Container, Row } from 'react-bootstrap'
import wlc from "../../assets/wlc.png"

const Welcome = () => {
  return (
    <div className='welcome'>
        <Container>
            <Row className='justify-content-between'>
                <Col lg={7}>
                    <img src={wlc}></img>
                </Col>
                <Col className='wlc-text' lg={5}>
                    <Col lg={10}>
                        <h3>Welcome to Our Restaurant</h3>
                    </Col>
                    <Col lg={8}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Col>
                    <div className='ban-btn'>
                        <a className='menu'>Menu</a>
                        <a className='table'>Book a table </a>
                    </div>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Welcome