import React from "react";
import ShootingLocationContent from "../ShootingLocationContent";
import ShootingLocationImageSlider from "../ShootingLocationImageSlider";

class ShootingLocationPage extends React.Component {
  render() {
    console.log(this.props.match.params.locationId);
    return (
      <div>
        {/* <ShootingLocationImageSlider /> */}
        <ShootingLocationContent
          locationId={this.props.match.params.locationId}
        />
      </div>
    );
  }
}

export default ShootingLocationPage;
