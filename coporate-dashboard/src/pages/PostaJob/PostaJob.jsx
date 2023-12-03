import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./postajob.scss";
import { Button, Form } from "react-bootstrap";

const PostaJob = () => {

  return (
    <div className="container">
      <div className="row">
        <h3 className="col-6 col-md-12 fw-400 justify-content-center">
          Post a Job
        </h3>
      </div>
      <div className="row my-4 brandtable">
        <Form
          style={{
            width: "50%",
            margin: "0 auto",
            fontWeight: "bold",
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
            <Form.Control type="text" placeholder="Please Enter your Job Title" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Company Name</Form.Label>
            <Form.Control type="text" placeholder="Please Enter your Company Name" />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Location</Form.Label>
            <Form.Control type="text" placeholder="Please Enter Location" />
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
            <Form.Control as="textarea" rows={2} placeholder="Enter Job Description"/>
          </Form.Group>
          <Button>Post Job</Button>
        </Form>
        <ToastContainer />
      </div>
    </div>
  );
};

export default PostaJob;
