import React from "react";
import { Container } from "react-bootstrap";
import ServiceImg from "./images/services.png";

const Services = () => {
  return (
    <>
      <Container className="service">
        <div className="glow">
          <h1 className="services-text">
            SHOWS UP IN ALL YOUR <br /> FAVORITE WALLETS
          </h1>
          <p>
            Flash USDT is compatible with all major wallets, so you can
            practice, test or show off <br /> wherever you like, however you
            like.
          </p>
          <div className="mt-4">
            <span className="btn-1">Buy Now</span>
          </div>
        </div>
      </Container>
      <div className="image-service">
        <img src={ServiceImg} alt="" />
      </div>
    </>
  );
};

export default Services;
