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
    <div style={{backgroundColor:'#FF4500'}}>
      <br></br>
      <Navbar
        expand="lg"
        
        style={{ height: "25px",backgroundColor:'#FF4500'}}
      >
        <Container fluid>
          <Navbar.Brand href="#">
            <h2 style={{color:"white",fontFamily:'open sans'}}><b>Foodie Go</b></h2>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            
            <Nav
              className="ms-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              {" "}
              {/* Move Home link to the right */}
              <Nav.Link href="/home" className="mx-lg-4">
                <h3 style={{color:"white"}}>Home</h3>
              </Nav.Link>
              <Nav.Link href="/" className="mx-lg-4">
                <h3 style={{color:"white"}}>Logout</h3>
              </Nav.Link>
              <Nav.Link href="/cart" className="mx-lg-4">
                <h3 style={{color:"white"}}>Cart</h3>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      <br></br>
    </div>
  );
}
