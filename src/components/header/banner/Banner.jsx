import React, { useRef } from 'react'
import "./banner.css"
import { Col, Container } from 'react-bootstrap'
import banLogo from "../../../assets/ban-img.png"
import facebook from "../../../assets/facebook.png"
import insta from "../../../assets/insta.png"
import twitter from "../../../assets/twitter.png"



const Banner = () => {
    
    function abc(){
        document.body.style.backgroundColor = "black";
        let boxes = document.querySelector(".boxes")
        boxes.style.border = "1px solid #FF5F1F"
        boxes.style.color = "#FF5F1F"
        let boxes2 = document.querySelector(".boxes2")
        boxes2.style.backgroundColor = "wheat"
        boxes2.style.color = "black"
        let head = document.querySelector(".head");
        let one = document.querySelector(".one")
        let two = document.querySelector(".two")
        let special = document.querySelector(".special")
        let navi = document.querySelectorAll("nav a")
        let naviArr = Array.from(navi)
        naviArr.map((item)=>{
            item.style.color = "#FF5F1F"
            
        })
        let sHead = document.querySelectorAll(".special h3")
        let sHeadArr = Array.from(sHead)
        sHeadArr.map((head)=>{
            head.style.color = "#FF5F1F"
        })

        let sPara = document.querySelectorAll(".special p")
        let sParaArr = Array.from(sPara)
        sParaArr.map((para)=>{
            para.style.color = "#FFDEAD"
        })
        
        let banP = document.querySelector(".s-h-para")
        let welcome = document.querySelector(".welcome")
        let wH = document.querySelector(".wlc-text h3")
        let wP = document.querySelector (".wlc-text p")
        let cH = document.querySelector(".chef-text h3")
        let cP = document.querySelector(".chef-text p")
        let customer = document.querySelector(".customer")
        let customH = document.querySelector(".customer .customer-head")
        let customP = document.querySelector(".customer .customer-para")
        let customBoxP = document.querySelector(".custom-box p")
        let customBoxName = document.querySelector(".custom-box h4")
        let customBoxWork = document.querySelector(".custom-box h5")
     


        customer.style.backgroundColor = "black"
        customBoxP.style.color = "#FFDEAD"
        customBoxName.style.color = "#FF5F1F"
        customBoxWork.style.color = "#FFDEAD"
        customH.style.color = "#FF5F1F"
        customP.style.color = "#FFDEAD"
        wH.style.color = "#FF5F1F"
        wP.style.color = "#FFDEAD"
        cH.style.color = "#FF5F1F"
        cP.style.color = "#FFDEAD"

        welcome.style.backgroundColor = "black"
        banP.style.color = "#FFDEAD"
        special.style.backgroundColor = "black"
        head.style.color = "#FF5F1F"

    }

    function light () {
        document.body.style.backgroundColor = "white";
        let boxes2 = document.querySelector(".boxes2")
        boxes2.style.border = "1px solid black"
        boxes2.style.backgroundColor = "white"
        boxes2.style.color = "black"
        let boxes = document.querySelector(".boxes")
        boxes.style.border = "none"
        boxes.style.color = "white"
        let head = document.querySelector(".head");
        let one = document.querySelector(".one")
        let two = document.querySelector(".two")
        let special = document.querySelector(".special")
        let navi = document.querySelectorAll("nav a")
        let naviArr = Array.from(navi)
        naviArr.map((item)=>{
            item.style.color = "#101A24"
            
        })
        let sHead = document.querySelectorAll(".special h3")
        let sHeadArr = Array.from(sHead)
        sHeadArr.map((head)=>{
            head.style.color = "#101A24"
        })
        let sPara = document.querySelectorAll(".special p")
        let sParaArr = Array.from(sPara)
        sParaArr.map((para)=>{
            para.style.color = "#5C6574"
        })



        let banP = document.querySelector(".s-h-para")
        let welcome = document.querySelector(".welcome")
        let wH = document.querySelector(".wlc-text h3")
        let wP = document.querySelector (".wlc-text p")
        let cH = document.querySelector(".chef-text h3")
        let cP = document.querySelector(".chef-text p")
        let customer = document.querySelector(".customer")
        let customH = document.querySelector(".customer .customer-head")
        let customP = document.querySelector(".customer .customer-para")
        let customBoxP = document.querySelector(".custom-box p")
        let customBoxName = document.querySelector(".custom-box h4")
        let customBoxWork = document.querySelector(".custom-box h5")





        welcome.style.backgroundColor = "#c0c3c95c"
        wH.style.color = "#101A24"
        wP.style.color = "#5C6574"
        banP.style.color = "#5C6574"
        special.style.backgroundColor = "#c0c3c95c"
        head.style.color = "#101A24"

        cH.style.color = "#101A24"
        cP.style.color = "#5C6574"




        customer.style.backgroundColor = "#c0c3c95c"
        customBoxP.style.color = "#5C6574"
        customBoxName.style.color = "#101A24"
        customBoxWork.style.color = "#5C6574"
        customH.style.color = "#101A24"
        customP.style.color = "#5C6574"
    }




   

  return (
    <div className='banner'>
        <div className='boxes' onClick={abc}>DARK</div>
        <div className='boxes2' onClick={light}>LIGHT</div>
        <img className='ban-img' src={banLogo}></img>
        <Container>
            <Col lg={5}>
                <h1 className='head'>We provide the 
                best food for you</h1>
            </Col>
            <Col lg={3}>
                <p className='s-h-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
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