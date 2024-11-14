import React, { useState } from "react";
import "./booking.css";
import { Col, Container, Row } from "react-bootstrap";

const Booking = () => {
  let [book, setBook] = useState(false);

  let handleBook = () => {
    console.log("ami");
    setBook(!book);
  };
  return (
    <Container>
      <div className="booking">
        <Col lg={12}>
          <div className="book">
            <a onClick={handleBook}>Book My Table</a>
          </div>
          {book && (
            <Row className="justify-content-center field">
              <Col lg={6}>
                <div className="form">
                  <input
                    className="input"
                    type="text"
                    placeholder="Enter Your Name"
                  ></input>
                  <Row className="justify-content-between">
                    <Col lg={6}>
                      <input
                        className="input2"
                        type="text"
                        placeholder="Enter Your email"
                      ></input>
                    </Col>
                    <Col lg={6}>
                      <input
                        className="input2"
                        type="text"
                        placeholder="Enter Your Promo Code"
                      ></input>
                    </Col>
                  </Row>
                </div>
              </Col>
              <Col lg={4}>
                <div className="form">
                  <input className="date" type="date"></input>
                  {/* <Row className="justify-content-center">
                  <Col lg={4}>
                  <form>
                    <input type="radio" className="radio" value="Single"></input>
                    <label>Single</label>
                    <input type="radio" className="radio" value="double"></input>
                    <label>double</label>
                  </form>
                  </Col>
                  </Row> */}
                </div>
              </Col>
            </Row>
          )}
        </Col>
      </div>
    </Container>
  );
};

export default Booking;
