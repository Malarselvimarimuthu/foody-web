import "jquery";
import "popper.js";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export function Header() {
  return (
    <div>
      <Navbar
        expand="lg"
        className="bg-body-tertiary"
        style={{ height: "100px" }}
      >
        <Container fluid>
          <Navbar.Brand href="#">
            <h1>Foody Go</h1>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Form className="d-flex justify-content-center justify-content-lg-start">
              {" "}
              {/* Center search bar */}
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-lg-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {" "}
              {/* Move Home link to the right */}
              <Nav.Link href="/" className="mx-lg-4">
                <h2>Home</h2>
              </Nav.Link>
              <Nav.Link href="/onlineorder" className="mx-lg-4">
                <h2>Logout</h2>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
}
