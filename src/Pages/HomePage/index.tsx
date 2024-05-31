import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Form from 'react-bootstrap/Form';
import FormControl from 'react-bootstrap/FormControl';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBBtn,
  
} from 'mdb-react-ui-kit';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { Carousel } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './style.css';

const HomePage: React.FC = () => {
  const handleCardClick = (url: string) => {
    window.location.href = url; // Redirect to the specified URL
  };


  
  return (
    <div>
     <div className="card text-center mt-4" style={{
        backgroundImage: 'url(https://images.pexels.com/photos/958545/pexels-photo-958545.jpeg?cs=srgb&dl=pexels-chanwalrus-958545.jpg&fm=jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        color: 'white',
         opacity:0.9
      }}>
        <Container>
          <Navbar expand="lg" className="custom-navbar">
            <Navbar.Brand href="#" className="custom-navbar-text" style={{ color: '#f51247',fontSize:55,fontFamily: "'Times New Roman', Times, serif" }}><b>Foodie Go</b></Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                <Nav.Link href="#" className="custom-navbar-text" style={{ color: 'white',fontSize:25,fontFamily: "'Times New Roman', Times, serif"}}>Home</Nav.Link>
                <Nav.Link href="#" className="custom-navbar-text" style={{ color: 'white',fontSize:25 ,fontFamily: "'Times New Roman', Times, serif"}}>Log in</Nav.Link>
                <Nav.Link href="#" disabled className="custom-navbar-text" style={{ color: 'white',fontSize:25,fontFamily: "'Times New Roman', Times, serif" }}>Sign up</Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>

        <div className="card-body">
        <h5 className="card-title animate-title" style={{ fontSize: 50, fontFamily: "'Times New Roman', Times, serif" }}><b>Foodie Go</b></h5>
          <p className="card-text" style={{ fontSize:25,fontFamily: "'Times New Roman', Times, serif"}}>Discover the best food & drinks in Foodie Go.</p>
          <nav className="navbar navbar-light navbar-custom">
            <Form className="form-inline mx-auto" style={{ width: '40%' }}>
              <FormControl type="search" placeholder="Craving something delicious? Search here!" aria-label="Search" className="mr-sm-2" /><br />
              <Button variant="outline-success" type="submit">Search</Button>
            </Form>
          </nav>
        </div>
      </div>

      <div className="card2">
        <div className="sc-bke1zw-0 fIuLDK">
          <Row xs={1} md={2} className="g-6" style={{ marginLeft: '20px' }}>
           
            <Col>
              <a href="https://www.example.com" onClick={() => handleCardClick('http://localhost:5173/onlineorder')} className="card-link">
                <Card className="hover-card" style={{ 
                  width: '40rem', 
                  height: '440px', 
                  marginBottom: '20px', 
                  border: '1px solid #ddd', 
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
                  transition: 'transform 0.2s, box-shadow 0.2s'
                }}>
                  <Card.Img variant="top" src="https://d2rdhxfof4qmbb.cloudfront.net/wp-content/uploads/20180821150600/Indian-Breakfast.jpg" style={{ height: '350px' }} />
                  <Card.Body>
                    
                    <Card.Text style={{ color: 'black' }}>
                      View the city's favorite dining venues. Explore a variety of cuisines and dining experiences.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
            <Col>
              <a href="http://localhost:5173/onlineorder" onClick={() => handleCardClick('http://localhost:5173/onlineorder')} className="card-link">
                <Card className="hover-card" style={{ 
                  width: '40rem', 
                  height: '440px', 
                  marginBottom: '20px', 
                  border: '1px solid #ddd', 
                  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', 
                  transition: 'transform 0.2s, box-shadow 0.2s'
                }}>
                  <Card.Img variant="top" src="https://www.kolhapurtourism.org/wp-content/uploads/2021/09/non-veg-thali-kolhapur.jpg" style={{ height: '350px' }} />
                  <Card.Body>
                    
                    <Card.Text style={{ color: 'black' }}>
                      View the city's favorite dining venues. Explore a variety of cuisines and dining experiences.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </a>
            </Col>
          </Row>
        </div>
      </div><br></br>
    <div>
      <Carousel interval={2000}>
      <Carousel.Item>
        <div className="d-flex justify-content-around">
          <Card style={{ width: '80rem',height:'35rem'}}>
            <Card.Img variant="top" src="https://aastitvastore.com/wp-content/uploads/2020/10/Traditional-Seatingg-20-1211x800.jpg" style={{ width: '80rem',height:'30rem'}}/>
            <Card.Body>
              <Card.Title>Hostel Name </Card.Title>
              <Card.Text>
                Description of the hostel ...
              </Card.Text>
             
            </Card.Body>
          </Card>
         </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-around">
          <Card style={{ width: '80rem',height:'35rem'}}>
            <Card.Img variant="top" src="https://restaurantindia.s3.ap-south-1.amazonaws.com/s3fs-public/content9442.jpg" style={{ width: '80rem',height:'30rem'}}/>
            <Card.Body>
              <Card.Title>Hostel Name 1</Card.Title>
              <Card.Text>
                Description of the hostel 1...
              </Card.Text>
             
            </Card.Body>
          </Card>
         </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-around">
          <Card style={{ width: '80rem',height:'35rem'}}>
            <Card.Img variant="top" src="https://assets.cntraveller.in/photos/6517a5aa2f98f695fe4e5cdc/4:3/w_5232,h_3924,c_limit/GIGI%20001.jpg" style={{ width: '80rem',height:'30rem'}}/>
            <Card.Body>
              <Card.Title>Hostel Name 2</Card.Title>
              <Card.Text>
                Description of the hostel 2...
              </Card.Text>
              
            </Card.Body>
          </Card>
         </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-around">
          <Card style={{ width: '80rem',height:'35rem'}}>
            <Card.Img variant="top" src="https://thearchitectsdiary.com/wp-content/uploads/2018/09/restaurant-interiors-11.jpg" style={{ width: '80rem',height:'30rem'}}/>
            <Card.Body>
              <Card.Title>Hostel Name 3</Card.Title>
              <Card.Text>
                Description of the hostel 3...
              </Card.Text>
              
            </Card.Body>
          </Card>
         </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-around">
          <Card style={{ width: '80rem',height:'35rem'}}>
            <Card.Img variant="top" src="https://assets.cntraveller.in/photos/63d8e5103d7229d4cf308f01/16:9/w_1024%2Cc_limit/Prequel-lead.jpg" style={{ width: '80rem',height:'30rem'}}/>
            <Card.Body>
              <Card.Title>Hostel Name 4</Card.Title>
              <Card.Text>
                Description of the hostel 4...
              </Card.Text>
              
            </Card.Body>
          </Card>
         </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-around">
          <Card style={{ width: '80rem',height:'35rem'}}>
            <Card.Img variant="top" src="https://sapanarestaurant.com/wp-content/uploads/2019/11/authentic-chicken-biryani-900x601.jpg" style={{ width: '80rem',height:'30rem'}}/>
            <Card.Body>
              <Card.Title>Hostel Name 5</Card.Title>
              <Card.Text>
                Description of the hostel 5...
              </Card.Text>
              
            </Card.Body>
          </Card>
         </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-around">
          <Card style={{ width: '80rem',height:'35rem'}}>
            <Card.Img variant="top" src="https://i.ytimg.com/vi/fS9o6q8zCZk/maxresdefault.jpg" style={{ width: '80rem',height:'30rem'}}/>
            <Card.Body>
              <Card.Title>Hostel Name 6</Card.Title>
              <Card.Text>
                Description of the hostel 6...
              </Card.Text>
              
            </Card.Body>
          </Card>
         </div>
      </Carousel.Item>
      <Carousel.Item>
        <div className="d-flex justify-content-around">
          <Card style={{ width: '80rem',height:'35rem'}}>
            <Card.Img variant="top" src="https://b.zmtcdn.com/data/collections/21650cff91a2be578aca3a09325fe694_1690789343.png" style={{ width: '80rem',height:'30rem'}}/>
            <Card.Body>
              <Card.Title>Hostel Name 7</Card.Title>
              <Card.Text>
                Description of the hostel 7...
              </Card.Text>
              
            </Card.Body>
          </Card>
         </div>
      </Carousel.Item>
      </Carousel>
    </div>
    <br></br>
       <div style={{ backgroundColor: '#e2e7e5', padding: '20px' }}>
      <Container className="mt-4">
        <Row>
          <Col md={6}>
            <img src="https://b.zmtcdn.com/data/o2_assets/f773629053b24263e69f601925790f301680693809.png" alt="Get Zomato App" style={{ width: '70%', height: '80%' }} />
          </Col>
          <Col md={6}>
            <Form>
              <Form.Text style={{color:'red',fontFamily:"'Times New Roman', Times, serif",fontSize:50}}><b>Get the Foodie Go app</b></Form.Text><br></br>
              <Form.Text style={{color:'black',fontFamily:"'Times New Roman', Times, serif",fontSize:25}}>We will send you a link, open it on your phone to download the app</Form.Text>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email" />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
                </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Phone number</Form.Label>
                <Form.Control type="password" placeholder="Enter phone number" />
              </Form.Group>
              <Form.Group className="mb-3" controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Check me out" />
              </Form.Group>
              <Button variant="primary" type="submit">
                Share app link
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
      </div> 
       
      <div>
      <MDBFooter className='bg-light text-center text-white'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='https://www.facebook.com/zomato'
            role='button'
          >
            <MDBIcon fab icon='facebook-f' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='https://x.com/zomato'
            role='button'
          >
            <MDBIcon fab icon='twitter' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#7edb32' }}
            href='https://www.zomato.com/'
            role='button'
          >
            <MDBIcon fab icon='google' />
          </MDBBtn>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#ac2bac' }}
            href='https://www.instagram.com/zomato/?hl=en'
            role='button'
          >
            <MDBIcon fab icon='instagram' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#0082ca' }}
            href='https://www.linkedin.com/company/zomato/?originalSubdomain=in'
            role='button'
          >
            <MDBIcon fab icon='linkedin-in' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#52574e' }}
            href='https://github.com/Zomato'
            role='button'
          >
            <MDBIcon fab icon='github' />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#db3232' }}
            href='https://www.youtube.com/zomato'
            role='button'
          >
            <MDBIcon fab icon='youtube' />
          </MDBBtn>
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: '#454340' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
      </div>
    </div>
    
  );
};

export default HomePage;