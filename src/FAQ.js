import React from "react";
import { Accordion, Container } from "react-bootstrap";

const FAQ = () => {
  return (
    <Container className="faq-container py-4">
      <h1 className="FAQ-heading">FREQUENTLY ASKED QUESTIONS</h1>
      <Accordion flush>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <h3>What is Flash USDT?</h3>
          </Accordion.Header>
          <Accordion.Body>
            Flash USDT is a cryptocurrency that can be transferred and traded on
            supported platforms.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <h3>How do I transfer Flash USDT?</h3>
          </Accordion.Header>
          <Accordion.Body>
            You can transfer Flash USDT via supported wallets like TrustWallet
            or Binance.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <h3>Can I use Flash USDT on Binance?</h3>
          </Accordion.Header>
          <Accordion.Body>
            Yes, Flash USDT is compatible with Binance for trading and
            transfers.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <h3>How long is my Flash USDT valid?</h3>
          </Accordion.Header>
          <Accordion.Body>
            Flash USDT does not expire and remains valid in your wallet until
            used.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <h3>Can I trade Flash USDT?</h3>
          </Accordion.Header>
          <Accordion.Body>
            Yes, you can trade Flash USDT on supported exchanges like Binance
            and Kucoin.
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <h3>Is Flash USDT Legal?</h3>
          </Accordion.Header>
          <Accordion.Body>
            Flash USDT is legal in countries where cryptocurrency trading is
            allowed.
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
    </Container>
  );
};

export default FAQ;
