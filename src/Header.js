import React from "react";
import "./App.css";
import { Container } from "react-bootstrap";

const Header = () => {
  return (
    <div className="header">
      <Container className="my-auto ">
        <div className="glow">
          <h1 className="minor">RELIABLE. TRANSFERABLE. SECURE.</h1>
          <p>
            Flash USDT is a simulated digital currency that behaves just like
            real USDT. Use it for practice trading, <br /> product testing, or
            simply showing off your wealth without any real-world financial
            risk.
          </p>
          <div className="btn-headers">
            <span className="btn-learn">Learn More</span>
            <span className="btn-1">Buy Now</span>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default Header;
