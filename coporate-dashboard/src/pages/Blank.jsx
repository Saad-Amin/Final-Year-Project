import React from "react";
import { Button, Col, Container, Image, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import NotFound from "../assets/images/404.gif";

const Blank = () => {
  return (
    <Container className="my-5" style={{
        height: "80vh",
        justifyContent: 'center',
        alignItems: 'center',
        display: 'flex',
        backgroundColor: "#FFFFFF",
        borderRadius: '4px',
        boxShadow: '0px 10px 50px -3px rgba(0,0,0,0.1)'
    }}>
      <Row>
        <Col className="text-center">
          <Image src={NotFound} className="img-fluid" style={{
            width: "80%",
            height: "80%"

          }} />
          <p>The page you are looking for does not exist.</p>
          <Link to="/">
            <Button
              size="lg"
              style={{
                color: "white",
                backgroundColor: "#FF265A",
                border: "3px solid black",
                borderRadius: "50px",
              }}
            >
              Go Back to Homepage
            </Button>
          </Link>
        </Col>
      </Row>
    </Container>
  );
};

export default Blank;
