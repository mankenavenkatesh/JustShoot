import React from "react";
class ListingsTitleBar extends React.Component {
  constructor(props) {
    super(props);
    console.log("sdf");
    console.log(props.listing);
  }

  render() {
    return (
      <div id="titlebar" class="gradient">
        <div class="container">
          <div class="row">
            <div class="col-md-12">
              <h2>Listings</h2>
              <span>{this.props.listing}</span>

              <nav id="breadcrumbs">
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>Listings</li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ListingsTitleBar;
