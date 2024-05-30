import { Link } from "react-router-dom";
import React from 'react';
import Card from 'react-bootstrap/Card'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export default function HomePage() {
  return <div >
    <div className="homepage-container" style={{ backgroundImage: `url('https://e0.pxfuel.com/wallpapers/120/1024/desktop-wallpaper-fast-food-junk-food.jpg')`, backgroundRepeat: 'no-repeat', backgroundPosition: 'fixed', backgroundSize: 'cover' }}>
      <h1 className="text-primary">FOOD GO</h1>
      <div className="row">
        <div className="col-sm-4 d-flex justify-content-center">
          <div className="card" style={{ width: '20rem' }}>
            <img className="card-img-top" src="https://thumbs.dreamstime.com/b/go-food-logo-isolated-white-background-your-web-mobile-app-design-go-food-logo-isolated-white-background-your-133875597.jpg" />
            <div className="card-body">
              <h5 className="card-title">ABOUT FOOD GO</h5>
              <p className="card-text">
                <div>
                  <ul>
                    <li><a href="#who-we-are">Who We Are</a></li>
                    <li><a href="#blog">Blog</a></li>
                    <li><a href="#work-with-us">Work With Us</a></li>
                    <li><a href="#investor-relations">Investor Relations</a></li>
                    <li><a href="#report-fraud">Report Fraud</a></li>
                    <li><a href="#press-kit">Press Kit</a></li>
                    <li><a href="#contact-us">Contact Us</a></li>
                  </ul></div>
              </p>

            </div>
          </div> </div>

        <div className="col-sm-4 d-flex justify-content-center">
          <div className="card" style={{ width: '20rem' }}>
            <img className="card-img-top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqm8PZMtXtW1-VuzfKpZIIl8isXrxSBXtT0w&s" />
            <div className="card-body">
              <h5 className="card-title"><h2>ZOMAVERSE</h2></h5>
              <p className="card-text">
                <ul>
                  <li><a href="#Food Go">Food Go</a></li>
                  <li><a href="#Blinkit">Blinkit</a></li>
                  <li><a href="#Feeding India">Feeding India</a></li>
                  <li><a href="#Hyperpurue">Hyperpuru</a></li>

                </ul>
              </p>

            </div>
          </div>
        </div>

        <div className="col-sm-4 d-flex justify-content-center">
          <div className="card" style={{ width: '20rem' }}>
            <img className="card-img-top" src="https://img.freepik.com/premium-vector/restaurant-logo-icon-symbol-design-menu-eatery-canteen-cafe-lettering-vector-illustration_110338-870.jpg?w=360" />
            <div className="card-body">
              <h5 className="card-title"><h2>FOR RESTAURANTS</h2></h5>
              <p className="card-text">
                <ul>
                  <li><a href="#partner-with-us">Partner With Us</a></li>
                  <li><a href="#apps-for-you">Apps For You</a></li>
                </ul>
              </p>

            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-sm-4 d-flex justify-content-center">
          <div className="card" style={{ width: '20rem' }}>
            <img className="card-img-top" src="https://st.depositphotos.com/1152339/2984/i/450/depositphotos_29842115-stock-photo-education-concept-learn-more-on.jpg" />
            <div className="card-body">
              <h5 className="card-title"><h2>LEARN MORE</h2></h5>
              <p className="card-text">
                <ul>
                  <li><a href="#privacy">Privacy</a></li>
                  <li><a href="#security">Security</a></li>
                  <li><a href="#terms">Terms</a></li>
                  <li><a href="#sitemap">Sitemap</a></li>
                </ul>
              </p>

            </div>
          </div>
        </div>


        <div className="col-sm-4 d-flex justify-content-center">
          <div className="card" style={{ width: '20rem' }}>
            <img className="card-img-top" src="https://t4.ftcdn.net/jpg/05/48/62/95/360_F_548629586_cDOlrTXotOkYIENXcXBQ1CaGg5W4yK00.jpg" />
            <div className="card-body">
              <h5 className="card-title"><h2>We Deliver To</h2></h5>
              <p className="card-text">
                <ul>
                  <li><a href="#privacy">Bangalore</a></li>
                  <li><a href="#security">Chennai</a></li>
                  <li><a href="#terms">Coimbatore</a></li>
                  <li><a href="#sitemap">Kerala</a></li>
                </ul>
              </p>

            </div>
          </div>
        </div>

        <div className="col-sm-4 d-flex justify-content-center">
          <div className="card" style={{ width: '20rem' }}>
            <img className="card-img-top" src="https://blog.tbhcreative.com/wp-content/uploads/1_social-media-links.png" />
            <div className="card-body">
              <h5 className="card-title"><h2>SOCIAL LINKS</h2></h5>
              <p className="card-text">
                <div className="container mt-4">
                  <h5>Follow Us</h5>
                  <div className="d-flex justify-content-center">

                    <a href="https://www.linkedin.com" className="btn btn-outline-primary mx-1" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-linkedin"></i><img src="https://play-lh.googleusercontent.com/kMofEFLjobZy_bCuaiDogzBcUT-dz3BBbOrIEjJ-hqOabjK8ieuevGe6wlTD15QzOqw" alt="LinkedIn" style={{ width: '50px', height: '50px' }} />
                    </a>
                    <a href="https://www.instagram.com" className="btn btn-outline-danger mx-1" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-instagram"></i><img src="https://png.pngtree.com/png-vector/20221018/ourmid/pngtree-instagram-icon-png-image_6315974.png" alt="Instagram" style={{ width: '50px', height: '50px' }} />
                    </a>
                    <a href="https://www.twitter.com" className="btn btn-outline-info mx-1" target="_blank" rel="noopener noreferrer">
                      <i className="fab fa-twitter"></i>
                      <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTI-h-e2hgz8mwGfCt4gvj4IgMG_wAUolVM6w&s" alt="Twitter" style={{ width: '50px', height: '50px' }} />
                    </a>
                  </div>
                </div>
              </p>

            </div>
          </div>
        </div>
      </div>
    </div>

  </div >;
};

