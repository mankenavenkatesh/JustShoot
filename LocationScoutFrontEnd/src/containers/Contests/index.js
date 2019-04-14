import { Link } from "react-router-dom";
import React from "react";
import locationsApi from "../../api/LocationsApi";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "40%"
};

class Contests extends React.Component {
  render() {
    let center = {
      margin: "auto",
      width: "60%",
      border: "2px solid grey",
      padding: "2px"
    };

    return (
      <div>
        <div class="container">
          <div class="row sticky-wrapper">
            <div class="col-lg-8 col-md-8 padding-right-30 margin-top-75">
              <img src="/images/nirvana-poster1.png" alt="nirvana poster" />
              <div id="titlebar" class="listing-titlebar">
                <div class="listing-titlebar-title">
                  <h1>
                    ShortFilm Contest
                    <span class="listing-tag">MGIT – Nirvana 2019</span>
                    <span class="listing-tag">Spotlight Presets</span>
                  </h1>
                  {/* <h2>View Submissions</h2>    */}
                  <Link
                    class="send-message-to-owner button popup-with-zoom-anim"
                    to={`/contests/shortfilms/mgit/register`}
                  >
                    <i class="sl sl-icon-envelope-open" /> Click Here to
                    Register
                  </Link>

                  <Link
                    class="send-message-to-owner button popup-with-zoom-anim"
                    to={`/contests/shortfilms/mgit/videos`}
                  >
                    <i class="sl sl-icon-envelope-open" /> View Submissions
                  </Link>

                  <h4>Last date for submission is 14 th march 12:00 pm</h4>
                  <div class="star-rating" data-rating="5">
                    <div class="rating-counter">
                      {/* <a href="#listing-reviews">(0 reviews)</a> */}
                      <span>
                        {/* Price - {this.state.location.price} Rs/day */}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
              <div id="listing-nav" class="listing-nav-container">
                <ul class="listing-nav">
                  <li>
                    <a href="#listing-overview" class="active">
                      Overview
                    </a>
                  </li>
                  <li>
                    <a href="#listing-amenities">Terms</a>
                  </li>
                  <li>
                    <a href="#listing-judge">Judges</a>
                  </li>
                  <li>
                    <a href="#listing-pricing-list">Pricing</a>
                  </li>
                  <li>
                    <a href="#listing-address">Address</a>
                  </li>
                </ul>
              </div>
              <div
                id="listing-overview"
                class="listing-section"
                class="boxed-widget margin-top-2"
              >
                <h3 class="listing-desc-headline">Overview</h3>
                <h4>About Nirvana: </h4>
                <p>
                  Nirvana- one of the most reputable college events in the city,
                  is MGIT's cultural fest. Getting diverse celebrities on board,
                  to perform every year is hallmark of Team Nirvana. Nirvana
                  2018 saw a crowd of over 3000{" "}
                </p>
                <h4>About MGIT: </h4>
                <p>
                  Mahatma Gandhi Institute of Technology is one of the premier
                  Engineering Colleges in the Self-Financing category in
                  Telangana. MGIT is affiliated to Jawaharlal Nehru
                  Technological University, Hyderabad.
                </p>
                <h4>Event Details:</h4>
                <p>
                  Spotlight club of MGIT, Hyderabad as part of Nirvana 2019
                  proudly presenting you the Student Short film contest. this
                  promises to be a mouth watering prospect for every aspiring
                  Filmmaker. 
                </p>
                <h4>How to Apply </h4>
                <ul>
                  <li>
                    <Link to={`/contests/shortfilms/mgit/register`}>
                      {" "}
                      Click Here to Register
                    </Link>
                  </li>
                  <li>
                    All applicants must register with a fee of Rs.200/- via
                    PayTM or Google Pay to +91 8309556255 and a payment
                    confirmation screenshot must be uploaded while registration
                  </li>
                </ul>
              </div>
              <div
                id="listing-amenities"
                class="listing-section"
                class="boxed-widget margin-top-2"
              >
                <h3 class="listing-desc-headline">Terms</h3>
                <h2>Rules & regulations </h2>
                <ul>
                  <li>
                    Only students are allowed to participate in the competition{" "}
                  </li>
                  <li>
                    Short films will be considered for competition only if they
                    are of a total running time of 20 minutes or less including
                    titles, and were completed after January 1, 2018.{" "}
                  </li>
                  <li>
                    If the language of the film is other than Telugu, one must
                    furnish the subtitles in English.{" "}
                  </li>
                  <li>
                    The applicant will be responsible for all details he\she
                    furnishes with the application and must be the legal owner
                    of the film.{" "}
                  </li>
                  <li>
                    The decision of the jury will be final and no correspondence
                    or discussion will be entertained on the subject.
                  </li>
                  <li>
                    The Registration form with details once submitted cannot be
                    edited.
                  </li>
                  <li>
                    One contestant can submit more than 1 films. But he need to
                    pay registration fee seperatly for both
                  </li>
                  <li>
                    Contestant/s have read above rules and regulations carefully
                    and agreed to all above conditions.
                  </li>
                  <li>
                    <h3>Last date of submission is 14 th march 12:00 pm</h3>
                  </li>
                </ul>
                <br />
                <h4>Content Notice: </h4>
                <p>
                  It is the responsibility of the entrants to ensure that no
                  copyright laws are violated. Content with explicit sex &
                  violence and / or contrary to public decency/order will not be
                  permitted.
                </p>

                <ul class="listing-features checkboxes margin-top-0" />
              </div>
              <div
                id="listing-judge"
                class="listing-section"
                class="boxed-widget margin-top-2"
              >
                <h3 class="listing-desc-headline">Judges</h3>
                <p>To Be Finalized</p>
                {/* <img src="/images/judges.jpeg"></img>                   */}
              </div>
              <div
                id="listing-pricing-list"
                class="listing-section"
                class="boxed-widget margin-top-2"
              >
                <h3 class="listing-desc-headline ">Registration Fee</h3>
                <h3>200 rs</h3>
                <h4>Mode of Payment</h4>
                <h4>PayTM or Tez to +91 8309556255</h4>
              </div>

              <div
                id="listing-address"
                class="listing-section"
                class="boxed-widget margin-top-2"
              >
                <h3 class="listing-desc-headline">Address</h3>
                <address>
                  Road - Gandipet Main Rd,Kokapet, <br />
                  City - Hyderabad ,<br />
                  State - Telangana ,<br />
                  Postal Code - 500075
                  <br />
                  <h5>Phone Number - +91 9676147412, +91 9963995397 </h5>
                  <br />
                  <h4>
                    <a href="https://goo.gl/maps/cP6vcux9dMw" target="_blank">
                      {" "}
                      Google Maps - Click here
                    </a>
                  </h4>
                </address>
              </div>
            </div>
            <div class="col-lg-4 col-md-4 margin-top-75 sticky">
              {/* <div
                class="verified-badge with-tip"
                data-tip-content="Listing has been verified and belongs the business owner or manager."
              >
                <i class="sl sl-icon-check" /> <Link to={`/contests/shortfilms/mgit/videos`}>
        Click Here to View Submissions
      </Link>
              </div> */}

              <div class="boxed-widget ">
                <div class="hosted-by-title">
                  <h4 class="margin-left-80">Event Details</h4>
                  <a href="pages-user-profile.html" class="hosted-by-avatar">
                    <img src="images/dashboard-avatar.jpg" alt="" />
                  </a>
                </div>
                <ul class="listing-details-sidebar">
                  <li>
                    <i class="sl sl-icon-clock" /> March 14, 2019 - March 16,
                    2019
                  </li>

                  <li>
                    <i class="sl sl-icon-globe" /> Mahatma Gandhi Institute of
                    Technology,Gandipet Main Road,Kokapet, Hyderabad, Telangana,
                    India
                  </li>

                  <li>
                    <i class="sl sl-icon-map" />{" "}
                    <iframe
                      width="100%"
                      height="280"
                      src="https://maps.google.com/maps?width=100%&amp;height=280&amp;hl=en&amp;q=Mahatma+Gandhi+Institute+of+Technology%2CGandipet+Main+Road%2CKokapet%2C+Hyderabad%2C+Telangana%2C+India&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
                      frameborder="0"
                      scrolling="no"
                      marginheight="0"
                      marginwidth="0"
                    />
                  </li>
                  <li />
                </ul>

                <Link
                  class="send-message-to-owner button popup-with-zoom-anim margin-left-60 margin-top-40"
                  to={`/contests/shortfilms/mgit/register`}
                >
                  <i class="sl sl-icon-envelope-open" /> Click Here to Register
                </Link>
              </div>

              <div class="boxed-widget margin-top-35">
                <div class="hosted-by-title">
                  <h4 class="margin-left-80">Payment QR Code</h4>
                </div>
                <img src="/images/paytm.jpeg" />
              </div>

              <div class="boxed-widget margin-top-35">
                <div class="hosted-by-title">
                  <h4>
                    <span />{" "}
                    <a href="pages-user-profile.html">
                      Contact Info & Social Media
                    </a>
                  </h4>
                  <a href="pages-user-profile.html" class="hosted-by-avatar">
                    <img src="images/dashboard-avatar.jpg" alt="" />
                  </a>
                </div>
                <ul class="listing-details-sidebar">
                  <li>
                    <i class="sl sl-icon-phone" /> Rishi - +91 9676147412,{" "}
                    <br />
                    SuryaTeja - +91 9963995397
                  </li>
                  <li>
                    <i class="sl sl-icon-globe" />{" "}
                    <a href="http://nirvana.mgit.ac.in">
                      http://nirvana.mgit.ac.in
                    </a>
                  </li>
                  <li>
                    <i class="fa fa-envelope-o" />{" "}
                    <a href="#">
                      <span
                        class="__cf_email__"
                        data-cfemail="4e3a21230e2b362f233e222b602d2123"
                      >
                        nirvana2019@gmail.com
                      </span>
                    </a>
                  </li>
                </ul>
                <ul class="listing-details-sidebar social-profiles">
                  <li>
                    <a
                      href="https://www.facebook.com/justshootnow/"
                      class="facebook-profile"
                    >
                      <i class="fa fa-facebook-square" /> Facebook
                    </a>
                  </li>
                  <li>
                    <a href="#" class="twitter-profile">
                      <i class="fa fa-twitter" /> Twitter
                    </a>
                  </li>
                  <li>
                    <a href="#" class="gplus-profile">
                      <i class="fa fa-google-plus" /> Google Plus
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Contests;
