import { Button, Row, Col, Container } from "react-bootstrap";
import Form from "react-bootstrap/Form";

function SearchBar() {
  return (
    <Container>
      <Row className="justify-content-md-center">
        <Col xs={6}>
          <Form.Control
            type="text"
            placeholder="Find your Dream Job..."
            aria-label="Disabled input example"
          />
        </Col>
        <Col xs="auto">
          <Button type="submit" className="mb-2" >
            Search Now
          </Button>
        </Col>
      </Row>
    </Container>
  );
}

export default SearchBar;
