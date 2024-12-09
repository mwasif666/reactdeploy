import { timeLineDataFilter } from "./Data/TimeLineData"; // Ensure this exists
import React, { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
// import "./SDCL.css"; // Custom CSS for styling

const SDCL = () => {
  const [timeLineData, setTimeLineData] = useState([]);

  useEffect(() => {
    const data = timeLineDataFilter(); // Assuming it returns all timeline data
    setTimeLineData(data);
  }, []);

  return (
    <Container className="SDLC">
      <div
        className="glow heading-text-grouping"
        s
        style={{
          textAlign: "center",
          color: "white",
          marginBottom: "130px",
        }}
      >
        <h1 className="glow">Flash USDT Sender</h1>
        <p>Follow the guide to get access today</p>
      </div>
      <Row className="text-white position-relative timeline-container mt-5">
        {timeLineData?.map((item, index) => {
          const isLeft = index === 0 || index % 2 === 0;
          return (
            <Row
              key={index}
              className="align-items-center my-3 position-relative timeline-item"
            >
              {isLeft ? (
                <>
                  <Col
                    xs={5}
                    md={5}
                    className="card d-flex flex-column text-right pr-md-4"
                  >
                    <div className="font-weight-bold">{item.cardTitle}</div>
                    <div className="text-secondary">{item.cardSubtitle}</div>
                    <div className="pt-3">{item.cardDetailedText}</div>
                  </Col>
                  <Col
                    xs={2}
                    md={2}
                    className="text-center position-relative timeline-center"
                  >
                    <div className="timeline-dot bg-primary rounded-circle"></div>
                  </Col>
                  <Col xs={5} md={5} className="text-md-left">
                    <h1 className="text-white text-start step-heading">
                      {item.title}
                    </h1>
                  </Col>
                </>
              ) : (
                <>
                  <Col xs={5} md={5} className="text-md-right">
                    <h1 className="text-white text-end step-heading">
                      {item.title}
                    </h1>
                  </Col>
                  <Col
                    xs={2}
                    md={2}
                    className="text-center position-relative timeline-center"
                  >
                    <div className="timeline-dot rounded-circle"></div>
                  </Col>
                  <Col
                    xs={5}
                    md={5}
                    className="card d-flex flex-column pl-md-4"
                  >
                    <div className="font-weight-bold">{item.cardTitle}</div>
                    <div className="text-secondary">{item.cardSubtitle}</div>
                    <div className="pt-3">{item.cardDetailedText}</div>
                  </Col>
                </>
              )}
            </Row>
          );
        })}
      </Row>
    </Container>
  );
};

export default SDCL;
