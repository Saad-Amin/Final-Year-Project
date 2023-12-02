import React, { useState } from "react";
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const pressed = (e) => {
    e.preventDefault();
    console.log("Email is: ",email);
    console.log("Password is: ",password);
    axios
      .post("http://127.0.0.1:5000/login", {email,password})
      .then(function (response) {
        if (response.status === 250) {
          alert("Login Susscess");
          navigate('/applyjob');
        }
        else if (response.status === 200) {
          alert("Invalid Email or Password");
        }
      })
      .catch(function (error) {
        console.log(error, "error");
        if (error.response.status === 401) {
          alert("Invalid Email or Password");
        }
      });
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };
  return (
    <Container fluid className="p-0" style={{ backgroundColor: 'white', minHeight: '100vh' , marginTop: '50px', fontWeight:'bold'}}>
      <Row className="justify-content-center">
        <Col xs={10} sm={8} md={6} lg={4}>
          <h1 className="text-center">Login</h1>

          <Form>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control value={email} onChange={handleEmailChange} type="email" placeholder="name@example.com" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Password</Form.Label>
                  <Form.Control value={password} onChange={handlePassChange} type="password" placeholder="Password" />
                </Form.Group>
                <Button variant="primary" type="submit" className="w-100 mt-3" 
            onClick={pressed}>
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