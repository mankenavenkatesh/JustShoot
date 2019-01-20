import React from "react";
import Backtotop from "../Backtotop/";
class Footer extends React.Component {
  render() {
    return (
      <div id="footer" className="dark">
        {/* Main */}
        <div className="container">
          <div className="row">
            <div className="col-md-5 col-sm-6">
              <h4>Just Shoot</h4>
              <p>
                Justshoot is a marketplace for Shooting locations, Costumes
                ,Equipment,Crew etc to make shooting easy. we believe creators
                should only focus on creativity. Rest all should be taken care.
              </p>
            </div>
            <div className="col-md-4 col-sm-6 ">
              <h4>Helpful Links</h4>
              <ul className="footer-links">
                <li>
                  <a href="#">Login</a>
                </li>
                <li>
                  <a href="#">Sign Up</a>
                </li>
                <li>
                  <a href="#">My Account</a>
                </li>
                <li>
                  <a href="#">Add Listing</a>
                </li>
                <li>
                  <a href="#">Pricing</a>
                </li>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
              </ul>
              <ul className="footer-links">
                <li>
                  <a href="#">FAQ</a>
                </li>
                <li>
                  <a href="#">Blog</a>
                </li>
                <li>
                  <a href="#">Our Partners</a>
                </li>
                <li>
                  <a href="#">How It Works</a>
                </li>
                <li>
                  <a href="#">Contact</a>
                </li>
              </ul>
              <div className="clearfix" />
            </div>
            <div className="col-md-3  col-sm-12">
              <h4>Contact Us</h4>
              <div className="text-widget">
                <span>Kondapur, Hyderabad</span> <br />
                Phone: <span>8880746896 </span>
                <br />
                E-Mail:
                <span>
                  {" "}
                  <a href="#">
                    <span
                      className="__cf_email__"
                      data-cfemail="137c75757a707653766b727e637f763d707c7e"
                    >
                      [email&nbsp;protected]
                    </span>
                  </a>{" "}
                </span>
                <br />
              </div>
              <ul className="social-icons margin-top-20">
                <li>
                  <a className="facebook" href="#">
                    <i className="icon-facebook" />
                  </a>
                </li>
                <li>
                  <a className="twitter" href="#">
                    <i className="icon-twitter" />
                  </a>
                </li>
                <li>
                  <a className="gplus" href="#">
                    <i className="icon-gplus" />
                  </a>
                </li>
                <li>
                  <a className="vimeo" href="#">
                    <i className="icon-vimeo" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Copyright */}
          <div className="row">
            <div className="col-md-12">
              <div className="copyrights">
                © 2017 Listeo. All Rights Reserved.
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Footer;
