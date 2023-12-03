import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "../../stylesheets/mainNavbar.css";

function MainNavbar() {
  return (
    <>
      <Navbar bg="dark" sticky="top" data-bs-theme="dark">
        <Container>
          <Navbar.Brand>
            <Link to={"/"}>Hire Vue</Link>
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav>
              <Link to={"/"}>Job Page</Link>
            </Nav>
            <Nav>
              <Link to={"http://localhost:3001/"}>Post a Job</Link>
            </Nav>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default MainNavbar;
