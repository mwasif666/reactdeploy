import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import img1 from "./images/cardone/1.png";
import img2 from "./images/cardone/2.png";
import img3 from "./images/cardone/3.png";
import img4 from "./images/cardone/4.png";
import img5 from "./images/cardone/5.png";
import img6 from "./images/cardone/6.png";
import img7 from "./images/cardone/7.png";
import img8 from "./images/cardone/8.png";
import img9 from "./images/cardone/9.png";

const CardGrid = () => {
  const cardData = [
    {
      title: (
        <>
          Authentic Like USDT, <br /> But Risk-Free
        </>
      ),
      content:
        "It mimics real USDT in your wallet but holds no actual value—perfect for practice or to show off.",
      image: img1, // Use imported image
    },
    {
      title: (
        <>
          Fully Wallet, <br /> Transferable
        </>
      ),
      content:
        "Seamlessly transfer Flash USDT between wallets just like real crypto.",
      image: img2, // Use imported image
    },
    {
      title: (
        <>
          Accepted on Binance <br /> & Most Popular Wallets
        </>
      ),
      content:
        "You can trade, showcase, or practice on Binance & most top wallets with Flash USDT.",
      image: img3, // Use imported image
    },
    {
      title: (
        <>
          P-2-P Trading <br /> Enabled
        </>
      ),
      content:
        "Engage in peer-to-peer trading with other users using Flash USDT.",
      image: img4, // Use imported image
    },
    {
      title: (
        <>
          Futures & Spot <br /> Trading Options
        </>
      ),
      content:
        "Simulate trading on both futures and spot markets to improve your skills.",
      image: img5, // Use imported image
    },
    {
      title: (
        <>
          Up to a Year of <br /> Wallet Validity
        </>
      ),
      content:
        "All your Flash USDT can stay valid for up to one year in your wallet.",
      image: img6, // Use imported image
    },
    {
      title: (
        <>
          Valid Growth <br /> Metrics
        </>
      ),
      content:
        "Demonstrate growth and potential profits without real-world risk.",
      image: img7, // Use imported image
    },
    {
      title: (
        <>
          Fully Guaranteed <br /> Results
        </>
      ),
      content:
        "Realistic outcomes with each transaction, great for product testing or practice trading.",
      image: img8, // Use imported image
    },
    {
      title: (
        <>
          Safe for Testing <br /> and Learning
        </>
      ),
      content:
        "Experiment with trading strategies and test platforms without any financial risk.",
      image: img9, // Use imported image
    },
  ];

  return (
    <Container>
      <Row>
        <div className="glow pb-5">
          <h1 className="class-grid-heading">WHY USE FLASH USDT?</h1>
          <p>
            Flash USDT offers a safe, risk-free way to practice, test, and
            experiment in the world of cryptocurrency. <br /> Whether you’re
            testing your strategies or just demonstrating wealth, Flash USDT
            gives you all the <br /> benefits of real USDT without the financial
            risks.
          </p>
        </div>
        {cardData.map((card, index) => (
          <Col key={index} md={4} className="mb-4 card-grid">
            <Card className="h-100 card-one">
              <Card.Img
                variant="top"
                className="card-image-one"
                src={card.image}
                alt={`Image for ${card.title}`}
              />
              <Card.Body className="glow">
                <h1>{card.title}</h1>
                <p>{card.content}</p>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default CardGrid;
