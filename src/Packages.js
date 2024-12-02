import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";

const PackageCards = () => {
  const packages = [
    {
      id: 1,
      title: "PACKAGE 01",
      details: [
        "Up to $1 Million Per Day",
        "30 Days Mining",
        "Transferable",
        "Kucoin/Bitget/TrustWallet",
        "Non-Tradeable",
        "Non-P2P",
        "60 Day Wallet Stay",
      ],
      price: "$100",
    },
    {
      id: 2,
      title: "PACKAGE 02",
      details: [
        "Up to $10 Million Per Day",
        "60 Days Mining",
        "Transferable To",
        "Binance",
        "Tradeable",
        "Non-P2P",
        "6 Months Wallet Stay",
      ],
      price: "$200",
    },
    {
      id: 3,
      title: "PACKAGE 03",
      details: [
        "Up to $50 Million Per Day",
        "1 Year Mining",
        "1 Year Wallet Stay",
        "Transferable To ",
        "All Exchanges ",
        "Tradeable",
        "P2P Sellable",
      ],
      price: "$500",
    },
  ];

  return (
    <Container className="pt-4 ">
      <div className="glow py-5">
        <h1 className="services-text">
          PACKAGES WHICH <br /> FIT EVERY NEED
        </h1>
        <p className="packages-paragraph">
          Get started with Flash USDT for your trading practice or product
          testing. <br /> Pick the right package and start simulating right away
        </p>
      </div>
      <Row className="justify-content-center">
        {packages.map((pkg) => (
          <Col
            key={pkg.id}
            xs={12}
            sm={6}
            md={6}
            lg={4}
            className="d-flex justify-content-center mb-4"
          >
            <Card className="text-center package-card ">
              <Card.Body>
                <div className="circle mx-auto mb-3"></div>
                <h2 className="mb-3">{pkg.title}</h2>
                <ul className="list-unstyled details-packages">
                  {pkg.details.map((detail, index) => (
                    <li key={index} className="mb-2">
                      {detail}
                    </li>
                  ))}
                </ul>
                <div className="price">
                  <h1>{pkg.price}</h1>
                </div>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default PackageCards;
