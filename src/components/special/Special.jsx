import React from 'react'
import "./special.css"
import { Col, Container, Row } from 'react-bootstrap'
import one from "../../assets/one.png"
import two from "../../assets/two.png"
import three from "../../assets/three.png"
import four from "../../assets/four.png"
const Special = () => {
  return (
    <div className='special'>
        <Container>
            <h3 className='sp-head'>Our Special Dishes</h3>
            <Row className='justify-content-center'>
                <Col lg={4}>
                    <p className='sp-para'>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt 
                    </p>
                </Col>
            </Row>
            <Row className='justify-content-between'>
                <Col className='one' lg={3}>
                    <img className='sp-img' src={one}></img>
                    <h3>Lumpia with Suace</h3>
                    <p>Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor </p>
                </Col>
                <Col className='two' lg={3}>
                    <img className='sp-img' src={two}></img>
                    <h3>Fish and Veggie</h3>
                    <p>Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor </p>
                </Col>
                <Col className='three' lg={3}>
                    <img className='sp-img' src={three}></img>
                    <h3>Tofu Chili</h3>
                    <p>Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor </p>
                </Col>
                <Col className='four' lg={3}>
                    <img className='sp-img' src={four}></img>
                    <h3>Egg and Cocumber</h3>
                    <p>Lorem ipsum dolor sit , consectetur adipiscing elit, sed do eiusmod tempor </p>
                </Col>
            </Row>
        </Container>
    </div>
  )
}

export default Special