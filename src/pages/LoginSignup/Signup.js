
import React from 'react';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate;
const Signup = () => {
  return (
    <Container fluid className="p-0" style={{ backgroundColor: 'white', minHeight: '80vh' , marginTop: '10px', fontWeight:'bold'}}>
      <Row className="justify-content-center">
        <Col xs={10} sm={8} md={6} lg={5}>
          <h1 className="text-center">Post a Job</h1>

          <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control type="text" placeholder="Company Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>HR Name</Form.Label>
                  <Form.Control type="text" placeholder="HR Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Company Address</Form.Label>
                  <Form.Control type="text" placeholder="Company Address" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 mt-3" 
            onClick={() => navigate("/")}>
              Sign Up
            </Button>
          </Form>

          
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
