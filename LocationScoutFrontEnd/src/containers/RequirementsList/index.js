import React from "react";
import { Route, Link } from "react-router-dom";
import { connect } from "react-redux";

class RequirementsList extends React.Component {
  constructor(props) {
    super(props);
    console.log(this.props.requirements);
  }

  render() {
    var requirementsList = this.props.requirements.map(function(requirement) {
      return (
        <li key={requirement.id}>
          <div class="comments listing-reviews">
            <ul>
              <li>
                <div class="avatar">
                  <img
                    src="http://www.gravatar.com/avatar/00000000000000000000000000000000?d=mm&amp;s=70"
                    alt=""
                  />{" "}
                </div>
                <div class="comment-content">
                  <div class="arrow-comment" />
                  <div class="comment-by">
                    {requirement.requirementType} Required{" "}
                    <div class="comment-by-listing">
                      for <a href="#" />
                    </div>{" "}
                    {requirement.shortFilmName}
                  </div>
                  <p>{requirement.description}</p>
                  <a
                    href="#small-dialog"
                    class="rate-review popup-with-zoom-anim"
                  >
                    <i class="sl sl-icon-action-undo" /> Send Interest
                  </a>
                </div>
              </li>
            </ul>
          </div>
        </li>
      );
    });

    const emptyMessage = (
      <p>There are no requirements yet in your collection.</p>
    );
    return (
      <div>
        {this.props.requirements.length == 0 ? emptyMessage : requirementsList}
      </div>
    );
  }
}

export default RequirementsList;
