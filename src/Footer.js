import React from "react";
import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer>
      <Container
        style={{
          color: "#ffffff",
          padding: "20px 120px",
        }}
      >
        <Row>
          <Col xs={6} md={3}>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>
                <a
                  href="#about"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Contact
                </a>
              </li>
              <li>
                <a
                  href="#guarantee"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Guarantee
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={6} md={3}>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>
                <a
                  href="#refunds"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Refunds Policy
                </a>
              </li>
              <li>
                <a
                  href="#terms"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Terms of Service
                </a>
              </li>
              <li>
                <a
                  href="#faq"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  FAQ
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={6} md={3}>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>
                <a
                  href="#wallets"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Supported Wallets
                </a>
              </li>
              <li>
                <a
                  href="#learn"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Learn FlashUSDT
                </a>
              </li>
              <li>
                <a
                  href="#sitemap"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Sitemap
                </a>
              </li>
            </ul>
          </Col>
          <Col xs={6} md={3}>
            <ul style={{ listStyle: "none", padding: 0 }}>
              <li>
                <a
                  href="#telegram"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Telegram
                </a>
              </li>
              <li>
                <a
                  href="#discord"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Discord
                </a>
              </li>
              <li>
                <a
                  href="#instagram"
                  style={{ color: "white", textDecoration: "none" }}
                >
                  Instagram
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
      <div className="text-last">
        <h1>FLASHUSDTVAULT</h1>
      </div>
    </footer>
  );
};

export default Footer;
