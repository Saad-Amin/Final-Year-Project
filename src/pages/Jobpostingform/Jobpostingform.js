import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import "../../stylesheets/jobPostingform.css";

function Jobpostingform() {
  return (
    <>
      <Form
        style={{
          width: "50%",
          margin: "0 auto",
          fontWeight: 'bold'
        }}
      >
        <Form.Group className="mb-3">
          <Form.Label
            style={{
              textAlign: "left",
            }}
          >
            Job Title
          </Form.Label>
          <Form.Control type="text" placeholder="Android Developer.." />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Company Name</Form.Label>
          <Form.Control type="text" placeholder="Android Developer.." />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Location</Form.Label>
          <Form.Control type="text" placeholder="Android Developer.." />
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Job Type</Form.Label>
          <Form.Select aria-label="Default select example">
            <option>Select</option>
            <option value="1">Part-Time</option>
            <option value="2">Full-Time</option>
            <option value="3">Remote</option>
            <option value="3">Hybrid</option>
          </Form.Select>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Label>Salary Range</Form.Label>
          <Form.Control type="text" placeholder="35,000 - 45,000" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Job Description</Form.Label>
          <Form.Control as="textarea" rows={2} />
        </Form.Group>
        <Button>Post Job</Button>
      </Form>
    </>
  );
}

export default Jobpostingform;
