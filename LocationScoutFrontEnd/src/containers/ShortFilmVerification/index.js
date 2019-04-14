import React from "react";

import shortFilmsApi from "../../api/ShortFilmsApi";
import { history } from "../../store";

class ShortFilmVerification extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shortfilms: []
    };
  }

  filterShortFilms() {
    shortFilmsApi
      .filterShortFilms()
      .then(response => {
        if (response.status == "200") {
          console.log(response.data);
          this.setState({ shortfilms: response.data });
        }
      })
      .catch(error => {
        console.log(error);
      });
  }

  componentDidMount() {
    this.filterShortFilms();
  }

  verifyContestant(shortFilmId) {
    debugger;
    shortFilmsApi.verifyContestant(shortFilmId);
    history.push("/contests/shortfilms/mgit/videos");
  }

  render() {
    const opts = {
      height: "390",
      width: "440",
      playerVars: {
        // https://developers.google.com/youtube/player_parameters
        autoplay: 1
      }
    };

    var shortFilmsList = this.state.shortfilms.map(function(shortfilm) {
      const divStyle = {
        color: "brown"
      };
      return (
        <div
          key={shortfilm.id}
          class="col-lg-12 col-md-12"
          class="row margin-bottom-15"
        >
          <div class="listing-item" class="col-lg-6 col-md-6">
            <img src={shortfilm.paymentImageUrl} />
            {/* {shortfilm.verified === "true" ? 
              <div class="listing-badge now-open">Verified </div> : 
              <div class="listing-badge now-closed">Not Verified</div>
              }           */}
          </div>
          <div class="col-lg-6 col-md-6">
            <h4>Short Film Title - {shortfilm.shortFilmTitle}</h4>
            <h4>Short Film Genre - {shortfilm.genre}</h4>
            <h4>Contestant Name - {shortfilm.contestantName} </h4>
            <h4>College Name - {shortfilm.collegeName}</h4>
            <h4>
              Branch,Year - {shortfilm.branch} - {shortfilm.yearOfStudy}
            </h4>
            <h4>Email - {shortfilm.email} </h4>
            <h4>Phone Number - {shortfilm.phoneNumber}</h4>
            <div>Crew & Cast - {shortfilm.crewcast}</div>
            <div style={divStyle}>
              <a href={shortfilm.youtubeUrl} target="_blank">
                {" "}
                Click Here To See Video
              </a>
            </div>
            {shortfilm.verified === "true" ? (
              <a class="button green">
                <i class="sl sl-icon-open" /> Already Verified
              </a>
            ) : (
              <a
                onClick={this.verifyContestant.bind(this, shortfilm.id)}
                class="button gray"
              >
                <i class="sl sl-icon-close" /> Verify
              </a>
            )}
          </div>
        </div>
      );
    }, this);

    const emptyMessage = <p>There are no Shortfilms yet</p>;
    return (
      <div class="container">
        <div class="row">
          <div class="col-lg-9 col-md-8 padding-right-30">
            <div class="row margin-bottom-25" />
            <div class="row">
              {this.state.shortfilms.length == 0
                ? emptyMessage
                : shortFilmsList}
            </div>
            <div class="clearfix" />
          </div>
        </div>
      </div>
    );
  }
}

export default ShortFilmVerification;
