import React from "react";

import shortFilmsApi from "../../api/ShortFilmsApi";
import YouTube from "react-youtube";

class ShortFilms extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      shortfilms: []
    };

    this.onReady = this.onReady.bind(this);
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

  onReady(event) {
    // access to player in all event handlers via event.target
    debugger;
    event.target.pauseVideo();
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
        <div key={shortfilm.id} class="col-lg-4 col-md-4">
          <div class="listing-item">
            {/* <YouTube videoId={shortfilm.youtubeVideoId} onReady={this.onReady} opts={opts}/> */}
            {/* <iframe width="560" height="315" src="https://www.youtube.com/watch?v=xewrS7HwIzs"></iframe> */}
            {/* {this.props.authenticated ? userLinks : guestLinks} */}
            {shortfilm.verified === "true" ? (
              <div class="listing-badge now-open">Verified </div>
            ) : (
              <div class="listing-badge now-closed">Not Verified</div>
            )}
            <img src="/images/peachblue.png" />
            <div class="listing-item-content">
              <h4>ShortFilm Title - {shortfilm.shortFilmTitle}</h4>
              <h4>Contestant Name - {shortfilm.contestantName} </h4>
              <h4>College Name - {shortfilm.collegeName}</h4>
              <h4>
                Branch,Year - ({shortfilm.branch} , {shortfilm.yearOfStudy})
              </h4>
              <span class="tag">
                <a href={shortfilm.youtubeUrl} target="_blank">
                  {" "}
                  Click Here to See Video
                </a>
              </span>
              {/* <div >Crew & Cast - {shortfilm.crewcast}</div>
                <span class="tag">{shortfilm.contestantName}</span>
                <span class="tag">{shortfilm.collegeName}</span> 
                <span class="tag">{shortfilm.branch}</span>
                <span class="tag">{shortfilm.yearOfStudy}</span>                  
                                */}
            </div>
          </div>
          <div class="star-rating" data-rating="3.5">
            <div class="rating-counter" />
          </div>
        </div>
      );
    }, this);

    const emptyMessage = <p>There are no Shortfilms yet</p>;
    return (
      <div class="container">
        <h1>Submissions</h1>
        <div class="row">
          <div class="col-lg-12 col-md-12 padding-right-30">
            <div class="row margin-bottom-25" />
            <div class="row">
              {this.state.shortfilms.length == 0
                ? emptyMessage
                : shortFilmsList}
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
        </div>
      </div>
    );
  }
}

export default ShortFilms;
