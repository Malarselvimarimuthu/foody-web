import { Link } from "react-router-dom";
import React from 'react';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ".//style.css";
export default function HomePage() {
    return <div>
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
    </div>;
};

