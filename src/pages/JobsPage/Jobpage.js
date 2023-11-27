import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Jobcard from "../../components/Jobcard/Jobcard";
import SearchBar from "../../components/SearchBar/SearchBar";
import JobDescription from "../../components/JobDescription/JobDescription";

const Jobpage = () => {
  return (
    <div>
      <Container className="mt-5">
        <h1>Jobs Available</h1>
        <SearchBar />
        <br/>
        <Row>
          <Col xs={6}>
            <Jobcard jobtitle={'Frontend Developer'} companyName={'Google'} jobLocation={'Karachi'} jobSalaryRange={'30,000 - 45,000'} jobType={'Full-time'} />
            <Jobcard jobtitle={'Frontend Developer'} companyName={'Google'} jobLocation={'Karachi'} jobSalaryRange={'30,000 - 45,000'} jobType={'Full-time'} />
            <Jobcard jobtitle={'Frontend Developer'} companyName={'Google'} jobLocation={'Karachi'} jobSalaryRange={'30,000 - 45,000'} jobType={'Full-time'} />
            <Jobcard jobtitle={'Frontend Developer'} companyName={'Google'} jobLocation={'Karachi'} jobSalaryRange={'30,000 - 45,000'} jobType={'Full-time'} />
            <Jobcard jobtitle={'Frontend Developer'} companyName={'Google'} jobLocation={'Karachi'} jobSalaryRange={'30,000 - 45,000'} jobType={'Full-time'} />
            <Jobcard jobtitle={'Frontend Developer'} companyName={'Google'} jobLocation={'Karachi'} jobSalaryRange={'30,000 - 45,000'} jobType={'Full-time'} />
          </Col>
          <Col xs={6} style={{
            borderLeft: '1px solid #b3b0a8'
          }}>
          <JobDescription 
            jobtitle={'Frontend Developer'} companyName={'Google'} jobLocation={'Karachi'} jobSalaryRange={'30,000 - 45,000'} jobType={'Full-time'}
          />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Jobpage;
