import React from 'react'
import "./banner.css"
import { Col, Container } from 'react-bootstrap'
import banLogo from "../../../assets/ban-img.png"
import facebook from "../../../assets/facebook.png"
import insta from "../../../assets/insta.png"
import twitter from "../../../assets/twitter.png"

const Banner = () => {
  return (
    <div className='banner'>
        <img className='ban-img' src={banLogo}></img>
        <Container>
            <Col lg={5}>
                <h1>We provide the 
                best food for you</h1>
            </Col>
            <Col lg={3}>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
            </Col>
            <div className='ban-btn'>
                <a className='menu'>Menu</a>
                <a className='table'>Book a table </a>
            </div>
            <div className='links'>
                <a className='fb'>
                    <img src={facebook}></img>
                </a>
                <a className='ins'>
                    <img src={insta}></img>
                </a>
                <a className='twi'>
                    <img src={twitter}></img>
                </a>
            </div>
        </Container>
    </div>
  )
}

export default Banner