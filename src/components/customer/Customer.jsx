import React from 'react'
import "./customer.css"
import { Col } from 'react-bootstrap'
import search from "../../assets/search.png"
import ama from "../../assets/Ama.png"
const Customer = () => {
  return (
    <div className='customer'>
        <img className='search' src={search}></img>
        <h3 className='customer-head'>Our Happy Customers</h3>
        <Col className='para-head' lg={4}>
        <p className='customer-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt </p>
        </Col>
        <Col className='custom-box' lg={6}>
          <img className='ama' src={ama}></img>
          <Col className='box-para' lg={8}>
            <p>Lorem ipsum dolor sit amet consectetur. Tortor massa nisl quam sit. Vitae congue ultrices neque penatibus mi in quisque. Leo in cursus enim magnis ante. Proin iaculis platea ipsum sagittis ac eu aliquam quis. Ornare tincidunt tempus semper</p>
          </Col>
          <h4>Ama Ampomah</h4>
          <h5>CEO & Founder Inc </h5>
        </Col>
    </div>
  )
}

export default Customer