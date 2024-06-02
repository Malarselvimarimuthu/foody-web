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

      {/* Special food List */}
      <div>
        <h1 style={{ textAlign: 'center' }}>ORDER SUMMARY</h1>

        <div className="row">
            <div className="col-sm-4 d-flex justify-content-center">
                <div className="card" style={{ width: '20rem' }}>
                    <img className="card-img-top" src="https://miro.medium.com/v2/resize:fit:1400/1*kGMoF0XfJsDZzlPG6NSFuQ.jpeg" />
                    <div className="card-body">
                        <h5 className="card-title">Order 1</h5>
                        <p className="card-text">
                            <div>
                                <div className="order-item">

                                    <div className="order-item-info ml-3">
                                        <h5 className="mb-0">ROAST</h5>
                                        <p className="text-muted mb-0">Combo Meal</p>
                                        <p className="text-muted mb-0">$8.00</p>
                                    </div>
                                    <div className="order-item-quantity ml-auto">
                                        <p className="mb-0">Quantity: 2</p>
                                    </div>
                                </div>
                            </div>
                        </p>
                    </div>
                </div>
            </div>



            <div className="col-sm-4 d-flex justify-content-center">
                <div className="card" style={{ width: '20rem' }}>
                    <img className="card-img-top" src="https://img.freepik.com/premium-photo/fish-biriyani-south-indian-style-fish-biriyani-arranged-traditionally-brass-vessel_527904-1689.jpg" />
                    <div className="card-body">
                        <h5 className="card-title">Order 2</h5>
                        <p className="card-text">
                            <div>
                                <div className="order-item">

                                    <div className="order-item-info ml-3">
                                        <h5 className="mb-0">BIRIYANI</h5>
                                        <p className="text-muted mb-0">Combo Meal</p>
                                        <p className="text-muted mb-0">$8.00</p>
                                    </div>
                                    <div className="order-item-quantity ml-auto">
                                        <p className="mb-0">Quantity: 2</p>
                                    </div>
                                </div>
                            </div>
                        </p>
                    </div>
                </div>
            </div>



            <div className="col-sm-4 d-flex justify-content-center">
                <div className="card" style={{ width: '20rem' }}>
                    <img className="card-img-top" src="https://m.economictimes.com/thumb/msid-99118050,width-1200,height-900,resizemode-4,imgsize-64776/idli_istock.jpg" />
                    <div className="card-body">
                        <h5 className="card-title">Order 3</h5>
                        <p className="card-text">
                            <div>
                                <div className="order-item">

                                    <div className="order-item-info ml-3">
                                        <h5 className="mb-0">IDLI</h5>
                                        <p className="text-muted mb-0">Combo Meal</p>
                                        <p className="text-muted mb-0">$8.00</p>
                                    </div>
                                    <div className="order-item-quantity ml-auto">
                                        <p className="mb-0">Quantity: 2</p>
                                    </div>
                                </div>
                            </div>
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div className="mt-4" style={{ textAlign: 'center' }}>
            <p >Roast       :  $16</p>
            <p>Biriyani     : $16</p>
            <p>Idli         :  $16</p>
            <h4>Total Price : $48</h4>
        </div>
        <div className="container mt-3">
            <div className="d-flex justify-content-center">
                <button className="btn btn-primary">
                    Proceed your payments
                </button>
            </div>
        </div>
        <br></br>
        <div className="d-flex justify-content-center align-items-center">
            <a href="https://pay.google.com/intl/en_in/about/" className="btn btn-outline-primary mx-3" target="_blank" rel="noopener noreferrer">
                <i className="fab fa-linkedin"></i><img src="https://static1.anpoimages.com/wordpress/wp-content/uploads/2020/11/05/Google-Pay-India-Tez-new-icon.jpg" alt="LinkedIn" style={{ width: '50px', height: '50px' }} />
            </a>

            <div className="d-flex justify-content-center align-items-center">
                <a href="https://business.paytm.com/payment-link" className="btn btn-outline-primary mx-3" target="_blank" rel="noopener noreferrer">
                    <i className="fab fa-linkedin"></i><img src="https://m.economictimes.com/thumb/msid-107312198,width-1200,height-900,resizemode-4,imgsize-6574/paytm-etonline.jpg" alt="LinkedIn" style={{ width: '50px', height: '50px' }} />
                </a>
            </div>
        </div>
    </div>
   
    </div>
  );
}
