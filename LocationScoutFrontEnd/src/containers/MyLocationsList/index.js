import React from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";
import { deleteLocation } from "./../../actions/shootingLocationActions";

class MyLocationsList extends React.Component {
  constructor(props) {
    super(props);
    console.log("In My Locations List");
    console.log(this.props.myLocations);
    //  this.delLocation = this.delLocation.bind(this);
  }

  // delLocation(locationId){
  //     this.props.deleteLocation(locationId);
  // }

  render() {
    const deleteLocation = this.props.deleteLocation;
    //  const delLocation = this.delLocation;
    var myLocationsList = this.props.myLocations.map(function(location) {
      return (
        <li key={location.id}>
          <div class="list-box-listing">
            <div class="list-box-listing-img">
              <a href="#">
                <img src={location.photos[0].filepath} alt="syz" />
              </a>
            </div>
            <div class="list-box-listing-content">
              <div class="inner">
                <h3>
                  <a href={"/listings/locations/" + location.id}>
                    {location.locationName}
                  </a>
                </h3>
                <span>
                  {location.city}, {location.state}
                </span>
                <div class="star-rating" data-rating="3.5">
                  <div class="rating-counter">(12 reviews)</div>
                </div>
              </div>
            </div>
          </div>
          <div class="buttons-to-right">
            <Link
              to={"/dashboard/editLocation/" + location.id}
              class="button gray"
            >
              <i class="sl sl-icon-note" /> Edit
            </Link>
            {/* <a href="#" class="button gray"><i class="sl sl-icon-close"></i> Delete</a> */}
            <button
              onClick={deleteLocation.bind(this, location.id)}
              class="button gray"
            >
              <i class="sl sl-icon-close" />
              Delete
            </button>
          </div>
        </li>
      );
    });

    const emptyMessage = <p>There are no Locations yet in your collection.</p>;
    // const myLocationsList = (<div className="ui four cards">hyiu</div>);

    return (
      <div>
        {this.props.myLocations.length == 0 ? emptyMessage : myLocationsList}
      </div>
    );
  }
}
// export default MyLocationsList;
export default connect(
  null,
  { deleteLocation }
)(MyLocationsList);
