import React from "react";
import locationsApi from "../../api/LocationsApi";

class ListingsGridContent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      locations: []
    };
  }

  filterLocations() {
    locationsApi
      .filterLocations(this.props.categoryId, this.props.city)
      .then(response => {
        if (response.status == "200") {
          console.log(response.data);
          this.setState({ locations: response.data });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.filterLocations();
  }

  render() {
    var myLocationsList = this.state.locations.map(function(location) {
      return (
        <div key={location.id} class="col-lg-6 col-md-12">
          <a
            href={"/listings/locations/" + location.id}
            class="listing-item-container"
          >
            <div class="listing-item">
              <img
                src={location.photos[0].filepath}
                alt={location.locationName}
              />
              <div class="listing-badge now-open">Now Available</div>

              <div class="listing-item-content">
                <span class="tag">{location.locationCategory.title}</span>
                <span class="tag">{location.locationType}</span>
                <h3>
                  {location.locationName} <i class="verified-icon" />
                </h3>
                <span>
                  {location.city}, {location.state}
                </span>
              </div>
              <span class="like-icon" />
            </div>
            <div class="star-rating" data-rating="3.5">
              <div class="rating-counter">(0 reviews)</div>
            </div>
          </a>
        </div>
      );
    });

    const emptyMessage = <p>There are no Locations yet</p>;
    return (
      <div class="container">
        <div class="row">
          <div class="col-lg-9 col-md-8 padding-right-30">
            <div class="row margin-bottom-25">
              <div class="col-md-6 col-xs-6">
                <div class="layout-switcher">
                  <a href="#" class="grid active">
                    <i class="fa fa-th" />
                  </a>
                  <a href="listings-list-with-sidebar.html" class="list">
                    <i class="fa fa-align-justify" />
                  </a>
                </div>
              </div>
              <div class="col-md-6 col-xs-6">
                <div class="sort-by">
                  <div class="sort-by-select">
                    <select
                      data-placeholder="Default order"
                      class="chosen-select-no-single"
                    >
                      <option>Default Order</option>
                      <option>Highest Rated</option>
                      <option>Most Reviewed</option>
                      <option>Newest Listings</option>
                      <option>Oldest Listings</option>
                    </select>
                  </div>
                </div>
              </div>
            </div>
            <div class="row">
              {this.state.locations.length == 0
                ? emptyMessage
                : myLocationsList}
            </div>
            <div class="clearfix" />
            <div class="row">
              <div class="col-md-12">
                <div class="pagination-container margin-top-20 margin-bottom-40">
                  <nav class="pagination">
                    <ul>
                      <li>
                        <a href="#" class="current-page">
                          1
                        </a>
                      </li>
                      <li>
                        <a href="#">2</a>
                      </li>
                      <li>
                        <a href="#">3</a>
                      </li>
                      <li>
                        <a href="#">
                          <i class="sl sl-icon-arrow-right" />
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-3 col-md-4">
            <div class="sidebar">
              <div class="widget margin-bottom-40">
                <h3 class="margin-top-0 margin-bottom-30">Filters</h3>
                <div class="row with-forms">
                  <div class="col-md-12">
                    <input
                      type="text"
                      placeholder="What are you looking for?"
                      value=""
                    />
                  </div>
                </div>
                <div class="row with-forms">
                  <div class="col-md-12">
                    <select
                      data-placeholder="All Categories"
                      class="chosen-select"
                    >
                      <option>All Categories</option>
                      <option>Shops</option>
                      <option>Hotels</option>
                      <option>Restaurants</option>
                      <option>Fitness</option>
                      <option>Events</option>
                    </select>
                  </div>
                </div>
                <div class="row with-forms">
                  <div class="col-md-12">
                    <div class="input-with-icon location">
                      <input
                        type="text"
                        placeholder="Destination, city, address"
                        value=""
                      />
                      <a href="#">
                        <i class="fa fa-dot-circle-o" />
                      </a>
                    </div>
                  </div>
                </div>
                <br />
                <div class="range-slider">
                  <input
                    class="distance-radius"
                    type="range"
                    min="1"
                    max="100"
                    step="1"
                    value="50"
                    data-title="Radius around selected destination"
                  />
                </div>
                <a
                  href="#"
                  class="more-search-options-trigger margin-bottom-5 margin-top-20"
                  data-open-title="More Filters"
                  data-close-title="More Filters"
                />

                <div class="more-search-options relative">
                  <div class="checkboxes one-in-row margin-bottom-15">
                    <input id="check-a" type="checkbox" name="check" />
                    <label for="check-a">Elevator in building</label>

                    <input id="check-b" type="checkbox" name="check" />
                    <label for="check-b">Friendly workspace</label>

                    <input id="check-c" type="checkbox" name="check" />
                    <label for="check-c">Instant Book</label>

                    <input id="check-d" type="checkbox" name="check" />
                    <label for="check-d">Wireless Internet</label>

                    <input id="check-e" type="checkbox" name="check" />
                    <label for="check-e">Free parking on premises</label>

                    <input id="check-f" type="checkbox" name="check" />
                    <label for="check-f">Free parking on street</label>

                    <input id="check-g" type="checkbox" name="check" />
                    <label for="check-g">Smoking allowed</label>

                    <input id="check-h" type="checkbox" name="check" />
                    <label for="check-h">Events</label>
                  </div>
                </div>
                <button class="button fullwidth margin-top-25">Update</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListingsGridContent;
