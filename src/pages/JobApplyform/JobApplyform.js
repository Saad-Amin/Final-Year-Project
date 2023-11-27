import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
//import "../../stylesheets/jobPostingform.css";

function JobApplyform() {
  return (
    <>
      <Form
        style={{
          width: "50%",
          margin: "0 auto",
        }}
      >
        <h3
          style={{
            textAlign: "left",
            marginTop: '10px',
            marginBottom: '20px'
          }}
        >
          Apply Now
        </h3>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Enter Full Name" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="email" placeholder="Enter Email Address" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="text" placeholder="Enter Phone Number" />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control type="file"/>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control as="textarea" rows={3} placeholder="Enter Your Skills"/>
        </Form.Group>
        <Button>Apply Now</Button>
      </Form>
    </>
  );
}

export default JobApplyform;
