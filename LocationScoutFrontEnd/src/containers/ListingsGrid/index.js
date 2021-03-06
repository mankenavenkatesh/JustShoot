import React from "react";
import ListingsTitleBar from "../ListingsTitleBar/";
import ListingsGridContent from "../ListingsGridContent/";

class ListingsGrid extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
  }
  render() {
    console.log("Rendering Listings Grid");

    const params = new URLSearchParams(this.props.location.search);
    const categoryId = params.get("categoryId"); // bar
    const city = params.get("city");
    return (
      <div>
        <ListingsTitleBar listing={this.props.match.params.listingname} />
        <ListingsGridContent
          listing={this.props.match.params.listingname}
          categoryId={categoryId}
          city={city}
        />
      </div>
    );
  }
}

export default ListingsGrid;
