import React, { useState } from "react";
import { Container, Row, Col, Form, Button} from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';
import axios from "axios";

const navigate = useNavigate;

const Signup = () => {
  var [role_id,setRole] = useState('');
  const [company_name,setcompanyName] = useState('');
  const [name,setName] = useState('');
  const [cnic,setCnic] = useState('');
  const [email,setEmail] = useState('');
  const [password,setPassword] = useState('');
  const dob = "1122";

  const pressed = (e) => {
    e.preventDefault();
    if(role_id !== null && company_name !== null && name !== null && cnic !== null && email !== null && password){
      console.log("Role is: ",role_id);
      console.log("Company Name is: ",company_name);
      console.log("Name is : ",name);
      console.log("CNIC is: ",cnic);
      console.log("Email is: ",email);
      console.log("Password is: ",password);
      axios
        .post("http://127.0.0.1:5000/register", {role_id,name,email,password,cnic,company_name,dob})
        .then(function (response) {
          console.log(response)
          if (response.status === 200) {
            alert("Register Susscess");
          }
          else if (response.status === 201) {
            alert("EMAIL Already Exists");
          }
          else if (response.status === 202) {
            alert("CNIC EXISTS");
          }
        })
        .catch(function (error) {
          console.log(error, "error");
          if (error.response.status === 401) {
            alert("Invalid Email or Password");
          }
        });
    }
    else{
      alert("Kindly Fill All Fields")
    }
    
  };

  const handlecompanyChange = (e) => {
    setcompanyName(e.target.value);
  };

  const handlenameChange = (e) => {
    setName(e.target.value);
  };
  const handlecnicChange = (e) => {
    setCnic(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePassChange = (e) => {
    setPassword(e.target.value);
  };

  const handleroleChange = (e) => {
    const selectedValue = e.target.value;
    setRole(selectedValue);
    role_id = selectedValue
    // console.log('Selected role:', choice);
  };

  return (
    <Container fluid className="p-0" style={{ backgroundColor: 'white', minHeight: '80vh' , marginTop: '10px', fontWeight:'bold'}}>
      <Row className="justify-content-center">
        <Col xs={10} sm={8} md={6} lg={5}>
          <h1 className="text-center">Post a Job</h1>

          <Form>
          <Form.Group className="mb-3">
          <Form.Label>Register As</Form.Label>
          <Form.Select value={role_id} onChange={handleroleChange} aria-label="Default select example">
            <option>Select</option>
            <option value="1">Admin</option>
            <option value="2">HR</option>
            <option value="3">Applicant</option>
          </Form.Select>
        </Form.Group>
                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Company Name</Form.Label>
                  <Form.Control value={company_name} onChange={handlecompanyChange} type="text" placeholder="Company Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Name</Form.Label>
                  <Form.Control value={name} onChange={handlenameChange} type="text" placeholder="Name" />
                </Form.Group>

                <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                  <Form.Label>Cnic Number</Form.Label>
                  <Form.Control value={cnic} onChange={handlecnicChange} type="text" placeholder="Cnic Number" />
                </Form.Group>

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
              Sign Up
            </Button>
          </Form>

          
        </Col>
      </Row>
    </Container>
  );
};

export default Signup;
