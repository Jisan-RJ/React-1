import React from 'react'
import "./chef.css"
import { Col, Container, Row } from 'react-bootstrap'
import chef from "../../assets/chef.png"
import sign from "../../assets/sign.png"
const Chef = () => {
  return (
    <div className='chef'>
        <Container>
            <Row className='justify-content-between'>
                <Col className='chef-text' lg={6}>
                    <Col lg={10}>
                        <h3>Our Expects Chef</h3>
                    </Col>
                    <Col lg={8}>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
                    </Col>
                    <Row className='justify-content-between'>
                        <Col lg={6}>
                            <div className='box'>
                                <img src={sign}></img>
                                <h5>Lorem ipsum dolor sit amet, consectetur </h5>
                            </div>
                            <div className='box'>
                                <img src={sign}></img>
                                <h5>Lorem ipsum dolor sit amet, consectetur </h5>
                            </div>
                            <div className='box'>
                                <img src={sign}></img>
                                <h5>Lorem ipsum dolor sit amet, consectetur </h5>
                            </div>
                        </Col>
                        <Col lg={6}>
                            <div className='box'>
                                <img src={sign}></img>
                                <h5>Lorem ipsum dolor sit amet, consectetur </h5>
                            </div>
                            <div className='box'>
                                <img src={sign}></img>
                                <h5>Lorem ipsum dolor sit amet, consectetur </h5>
                            </div>
                            <div className='box'>
                                <img src={sign}></img>
                                <h5>Lorem ipsum dolor sit amet, consectetur </h5>
                            </div>
                        </Col>
                    </Row>
                    <div className='ban-btn'>
                        <a className='menu'>Menu</a>
                        <a className='table'>Book a table </a>
                    </div>
                </Col>
                <Col className='chef-img' lg={6}>
                    <img src={chef}></img>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Chef