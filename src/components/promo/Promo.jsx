import React from 'react'
import "./promo.css"
import { Col, Container } from 'react-bootstrap'
const Promo = () => {
  return (
    <div className='promo'>
        <Container>
            <Col lg={12} className='promo-ban'>
                <Col lg={7} className='promo-head'>
                    <h3>Get Or Promo Code by
                    Subscribing To our  Newsletter</h3>
                </Col>
               <Col lg={7} className='form'>
                    <input placeholder='Enter your Email'></input>
                    <button type='submit'>Subscribe</button>
               </Col>
            </Col>
        </Container>
    </div>
  )
}

export default Promo