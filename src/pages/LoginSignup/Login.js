import React from 'react';
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const navigate = useNavigate;
const Login = () => {
  return (
    <Container fluid className="p-0" style={{ backgroundColor: 'white', minHeight: '100vh' , marginTop: '100px', fontWeight:'bold'}}>
      <Row className="justify-content-center">
        <Col xs={10} sm={8} md={6} lg={4}>
          <h1 className="text-center">Post a Job</h1>

          <Form>
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
              Login
            </Button>

          </Form>

          <div className="mt-3 text-center">
            <a href="/Signup">Sign Up</a>
          </div>
          <div className="mt-3 text-center">
            <a href="/">Forgot Password?</a>
          </div>
        </Col>
      </Row>
    </Container>
  );
};

export default Login;