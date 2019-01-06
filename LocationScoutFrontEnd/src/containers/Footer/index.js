import React from "react";
import Backtotop from "../Backtotop/";
class Footer extends React.Component {
  render() {
    return (
      <div>
        <div id="footer" class="sticky-footer">
          <div class="container">
            <div class="row">
              <div class="col-md-5 col-sm-6">
                <img class="footer-logo" src="images/logo.png" alt="" />
                <br />
                <p>
                  Morbi convallis bibendum urna ut viverra. Maecenas quis
                  consequat libero, a feugiat eros. Nunc ut lacinia tortor morbi
                  ultricies laoreet ullamcorper phasellus semper.
                </p>
              </div>

              <div class="col-md-4 col-sm-6 ">
                <h4>Helpful Links</h4>
                <ul class="footer-links">
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

                <ul class="footer-links">
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
                <div class="clearfix" />
              </div>

              <div class="col-md-3  col-sm-12">
                <h4>Contact Us</h4>
                <div class="text-widget">
                  <span>12345 Little Lonsdale St, Melbourne</span> <br />
                  Phone: <span>(123) 123-456 </span>
                  <br />
                  E-Mail:
                  <span>
                    {" "}
                    <a href="#">
                      <span
                        class="__cf_email__"
                        data-cfemail="365950505f555376534e575b465a531855595b"
                      >
                        [email&#160;protected]
                      </span>
                    </a>{" "}
                  </span>
                  <br />
                </div>

                <ul class="social-icons margin-top-20">
                  <li>
                    <a class="facebook" href="#">
                      <i class="icon-facebook" />
                    </a>
                  </li>
                  <li>
                    <a class="twitter" href="#">
                      <i class="icon-twitter" />
                    </a>
                  </li>
                  <li>
                    <a class="gplus" href="#">
                      <i class="icon-gplus" />
                    </a>
                  </li>
                  <li>
                    <a class="vimeo" href="#">
                      <i class="icon-vimeo" />
                    </a>
                  </li>
                </ul>
              </div>
            </div>

            <div class="row">
              <div class="col-md-12">
                <div class="copyrights">
                  © 2019 Justshoot. All Rights Reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
        <Backtotop />
      </div>
    );
  }
}

export default Footer;
