import React from "react";
import locationsApi from "../../api/LocationsApi";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { Map, GoogleApiWrapper } from "google-maps-react";

const mapStyles = {
  width: "100%",
  height: "40%"
};

class ShootingLocationContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: { locationCategory: {}, photos: [], amenities: [] }
    };
  }

  componentDidMount() {
    // debugger;
    var locationId = this.props.locationId;
    locationsApi
      .getLocationById(locationId)
      .then(response => {
        if (response.status == "200") {
          console.log(response.data);
          this.setState({ location: response.data });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }
  render() {
    var locationAmenities = this.state.location.amenities.map(function(
      locationAmenity
    ) {
      return <li key={locationAmenity.id}>{locationAmenity.amenityName}</li>;
    });

    var locationPhotos = this.state.location.photos.map(function(photo, index) {
      return (
        // <a key={photo.id} href="./images/single-listing-02.jpg" data-background-image="./images/single-listing-02.jpg" class="item mfp-gallery slick-slide slick-cloned" title="Title 3" data-slick-index="-3" styles="background-image: url(&quot;./images/single-listing-02.jpg&quot;); width: 432px;" aria-hidden="true" tabindex="-1"></a>
        // <a key={photo.id}  data-background-image={`/images/${photo.filename}`}></a>
        // <a key={photo.id} class="item mfp-gallery slick-slide slick-cloned" href={`/images/${photo.filename}`} title={photo.filename} class="item mfp-gallery"><img src={`/images/${photo.filename}`} alt="syz" /></a>

        // <div key={photo.id} class="carousel-item">
        //       <img src={`/images/${photo.filename}`} class="d-block w-100" alt={photo.filename} />
        //     </div>
        <div key={photo.id}>
          <img src={`/images/${photo.filename}`} />
          <p className="legend">{photo.filename}</p>
        </div>
      );
    });

    let center = {
      margin: "auto",
      width: "60%",
      border: "2px solid grey",
      padding: "2px"
    };

    return (
      <div>
        {/* <div class="listing-slider mfp-gallery-container margin-bottom-0">
          <ul>
            {locationPhotos}
          </ul>
        </div> */}
        <div style={center}>
          <Carousel>{locationPhotos}</Carousel>
        </div>
        <div class="container">
          <div class="row sticky-wrapper">
            <div class="col-lg-8 col-md-8 padding-right-30">
              <div id="titlebar" class="listing-titlebar">
                <div class="listing-titlebar-title">
                  <h2>
                    {this.state.location.locationName}{" "}
                    <span class="listing-tag">
                      {this.state.location.locationCategory.title}
                    </span>
                  </h2>
                  <span>
                    <a href="#listing-location" class="listing-address">
                      <i class="fa fa-map-marker" />
                      {this.state.location.city},{this.state.location.state}
                    </a>
                  </span>
                  <div class="star-rating" data-rating="5">
                    <div class="rating-counter">
                      <a href="#listing-reviews">(31 reviews)</a>
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
                    <a href="#listing-amenities">Amenities</a>
                  </li>

                  <li>
                    <a href="#listing-pricing-list">Pricing</a>
                  </li>
                  <li>
                    <a href="#listing-address">Address</a>
                  </li>
                  <li>
                    <a href="#listing-map">Map</a>
                  </li>
                  {/* <li>
                  <a href="#listing-reviews">Reviews</a>
                </li>
                <li>
                  <a href="#add-review">Add Review</a>
                </li> */}
                </ul>
              </div>
              <div id="listing-overview" class="listing-section">
                <p>{this.state.location.description}</p>
              </div>
              <div id="listing-amenities" class="listing-section">
                <h3 class="listing-desc-headline">Amenities</h3>
                <ul class="listing-features checkboxes margin-top-0">
                  {locationAmenities}
                </ul>
              </div>
              <div id="listing-pricing-list" class="listing-section">
                <h3 class="listing-desc-headline margin-top-70 margin-bottom-30">
                  Price - <span>{this.state.location.price} rs/day</span>
                </h3>
              </div>

              <div id="listing-address" class="listing-section">
                <h3 class="listing-desc-headline margin-top-60 margin-bottom-30">
                  Address
                </h3>
                <p>
                  {this.state.location.addressdesc} ,{this.state.location.city}{" "}
                  ,{this.state.location.state} ,{this.state.location.zipCode}
                </p>
              </div>

              {/* <div id="listing-map" class="listing-section">
              <h3 class="listing-desc-headline margin-top-70 margin-bottom-30">
               Map
              </h3>
              <Map google={this.props.google} zoom={14} style={mapStyles}
initialCenter={{
         lat: -1.2884,
         lng: 36.8233
        }}
      />
            </div> */}

              <div id="listing-map" class="listing-section">
                <h3 class="listing-desc-headline margin-top-60 margin-bottom-30">
                  Map
                </h3>
                <Map
                  google={this.props.google}
                  zoom={14}
                  style={mapStyles}
                  initialCenter={{
                    lat: -1.2884,
                    lng: 36.8233
                  }}
                />
              </div>
            </div>
            <div class="col-lg-4 col-md-4 margin-top-75 sticky">
              <div
                class="verified-badge with-tip"
                data-tip-content="Listing has been verified and belongs the business owner or manager."
              >
                <i class="sl sl-icon-check" /> Verified Listing
              </div>
              <div class="boxed-widget booking-widget margin-top-35">
                <h3>
                  <i class="fa fa-calendar-check-o " /> Book a Table
                </h3>
                <div class="row with-forms  margin-top-0">
                  <div class="col-lg-6 col-md-12">
                    <input
                      type="text"
                      id="booking-date"
                      data-lang="en"
                      data-large-mode="true"
                      data-large-default="true"
                      data-min-year="2017"
                      data-max-year="2020"
                      data-lock="from"
                    />
                  </div>
                  <div class="col-lg-6 col-md-12">
                    <input type="text" id="booking-time" value="9:00 am" />
                  </div>
                  <div class="col-lg-12">
                    <div class="panel-dropdown">
                      <a href="#">
                        Guests{" "}
                        <span class="qtyTotal" name="qtyTotal">
                          1
                        </span>
                      </a>
                      <div class="panel-dropdown-content">
                        <div class="qtyButtons">
                          <div class="qtyTitle">Adults</div>
                          <input type="text" name="qtyInput" value="1" />
                        </div>

                        <div class="qtyButtons">
                          <div class="qtyTitle">Childrens</div>
                          <input type="text" name="qtyInput" value="0" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <a
                  href="pages-booking.html"
                  class="button book-now fullwidth margin-top-5"
                >
                  Book Now
                </a>
              </div>
              <div class="boxed-widget opening-hours margin-top-35">
                <div class="listing-badge now-open">Now Open</div>
                <h3>
                  <i class="sl sl-icon-clock" /> Opening Hours
                </h3>
                <ul>
                  <li>
                    Monday <span>9 AM - 5 PM</span>
                  </li>
                  <li>
                    Tuesday <span>9 AM - 5 PM</span>
                  </li>
                  <li>
                    Wednesday <span>9 AM - 5 PM</span>
                  </li>
                  <li>
                    Thursday <span>9 AM - 5 PM</span>
                  </li>
                  <li>
                    Friday <span>9 AM - 5 PM</span>
                  </li>
                  <li>
                    Saturday <span>9 AM - 3 PM</span>
                  </li>
                  <li>
                    Sunday <span>Closed</span>
                  </li>
                </ul>
              </div>
              <div class="boxed-widget margin-top-35">
                <div class="hosted-by-title">
                  <h4>
                    <span>Hosted by</span>{" "}
                    <a href="pages-user-profile.html">
                      {this.state.location.locationOwner}
                    </a>
                  </h4>
                  <a href="pages-user-profile.html" class="hosted-by-avatar">
                    <img src="images/dashboard-avatar.jpg" alt="" />
                  </a>
                </div>
                <ul class="listing-details-sidebar">
                  <li>
                    <i class="sl sl-icon-phone" />{" "}
                    {this.state.location.phoneNumber}
                  </li>
                  <li>
                    <i class="sl sl-icon-globe" />{" "}
                    <a href="#">{this.state.location.website}</a>
                  </li>
                  <li>
                    <i class="fa fa-envelope-o" />{" "}
                    <a href="#">
                      <span
                        class="__cf_email__"
                        data-cfemail="4e3a21230e2b362f233e222b602d2123"
                      >
                        {this.state.location.email}
                      </span>
                    </a>
                  </li>
                </ul>

                <ul class="listing-details-sidebar social-profiles">
                  <li>
                    <a href="#" class="facebook-profile">
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
                <div id="small-dialog" class="zoom-anim-dialog mfp-hide">
                  <div class="small-dialog-header">
                    <h3>Send Message</h3>
                  </div>
                  <div class="message-reply margin-top-0">
                    <textarea
                      cols="40"
                      rows="3"
                      placeholder="Your message to Tom"
                    />
                    <button class="button">Send Message</button>
                  </div>
                </div>

                <a
                  href="#small-dialog"
                  class="send-message-to-owner button popup-with-zoom-anim"
                >
                  <i class="sl sl-icon-envelope-open" /> Send Message
                </a>
              </div>
              <div class="listing-share margin-top-40 margin-bottom-40 no-border">
                <button class="like-button">
                  <span class="like-icon" /> Bookmark this listing
                </button>
                <span>159 people bookmarked this place</span>
                <ul class="share-buttons margin-top-40 margin-bottom-0">
                  <li>
                    <a class="fb-share" href="#">
                      <i class="fa fa-facebook" /> Share
                    </a>
                  </li>
                  <li>
                    <a class="twitter-share" href="#">
                      <i class="fa fa-twitter" /> Tweet
                    </a>
                  </li>
                  <li>
                    <a class="gplus-share" href="#">
                      <i class="fa fa-google-plus" /> Share
                    </a>
                  </li>
                  <li>
                    <a class="pinterest-share" href="#">
                      <i class="fa fa-pinterest-p" /> Pin
                    </a>
                  </li>
                </ul>
                <div class="clearfix" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: "AIzaSyBp-Mp06UNLMEPqUWROgRolleb6GAx3flA"
})(ShootingLocationContent);

// export default ShootingLocationContent;
