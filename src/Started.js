import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import IMG1 from "./images/1.png";
import IMG2 from "./images/2.png";

const Started = () => {
  return (
    <>
      <div className="started2">
        <Container className="my-auto ">
          <div className="glow">
            <h1 className="minor">GET STARTED NOW</h1>
            <p>
              Ready to practice your trading, show off your virtual wealth, or
              test your crypto products? <br /> Start using Flash USDT today and
              get familiar with the crypto market without any financial risk{" "}
              <br /> in only a couple of simple steps
            </p>
            <Row className="align-items-center mt-4 justify-content-center">
              <Col xs={12} md={5} className="text-center">
                <div className="step">
                  <img src={IMG1} alt="Step 1" />

                  <p>Share Your Wallet Address With Us</p>
                </div>
              </Col>
              <Col xs={1} className="d-none d-md-flex">
                <div className="divider"></div>
              </Col>
              <Col xs={12} md={5} className="text-center">
                <div className="step">
                  <img src={IMG2} alt="Step 2" />

                  <p>Receive Your FlashUSDT Within 24 Hours</p>
                </div>
              </Col>
            </Row>
            <div>
              <span className="btn-1 mt-5">Buy Now</span>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
};

export default Started;
