import 'jquery';
import 'popper.js';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './style.css';

export default function OnlineOrder() {
  const imageFilenames = [
    'https://b.zmtcdn.com/data/o2_assets/37df381734b24f138af4a84fd7e4d4ec1716558578.jpeg',
    'https://b.zmtcdn.com/data/dish_images/197987b7ebcd1ee08f8c25ea4e77e20f1634731334.png',
    'https://b.zmtcdn.com/data/o2_assets/d0bd7c9405ac87f6aa65e31fe55800941632716575.png',
    'https://b.zmtcdn.com/data/o2_assets/e444ade83eb22360b6ca79e6e777955f1632716661.png',
    'https://b.zmtcdn.com/data/o2_assets/2b5a5b533473aada22015966f668e30e1633434990.png',
    'https://b.zmtcdn.com/data/dish_images/ccb7dc2ba2b054419f805da7f05704471634886169.png'
  ];

  return (
    <div>
      {/* Food -Order List */}
      <Container>
        <h1>Inspiration to the First Order</h1>
        <br />
        <div className="d-flex align-items-center">
          <div className="flex-grow-1" style={{ overflow: 'hidden' }}>
            <Row className="flex-nowrap custom-gap">
              {imageFilenames.map((filename, index) => (
                <Col key={index} sm="auto" className="d-flex justify-content-center">
                  <div className="text-center">
                    <img src={filename} alt={`Image ${index + 1}`} className="img-fluid small-img" />
                    <p>Image {index + 1}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Container>
      <br /><br />

      {/* Top Brands Scroll View */}
      {/* <Container>
        <h1>Inspiration with Top Brands</h1>
        <br />
        <div className="d-flex align-items-center">
          <div className="flex-grow-1" style={{ overflow: 'hidden' }}>
            <Row className="flex-nowrap custom-gap">
              {topBrandImages.map((filename, index) => (
                <Col key={index} sm="auto" className="d-flex justify-content-center">
                  <div className="text-center">
                    <img src={filename} alt={`Brand Image ${index + 1}`} className="img-fluid" />
                    <p>Brand {index + 1}</p>
                  </div>
                </Col>
              ))}
            </Row>
          </div>
        </div>
      </Container>
      <br /><br /> */}

      {/* Foody List */}
      {/* <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src="holder.js/100px180" />
        <Card.Body>
          <Card.Title>Card Title</Card.Title>
          <Card.Text>
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </Card.Text>
          <Button variant="primary">Go somewhere</Button>
        </Card.Body>
      </Card> */}
    </div>
  );
}
