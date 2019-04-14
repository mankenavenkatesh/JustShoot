import React from "react";
import FlashMessage from "./FlashMessage";
import { connect } from "react-redux";
import { deleteFlashMessage } from "../../actions/flashMessageAction";

class FlashMessagesList extends React.Component {
  render() {
    const messages = this.props.messages.map(message => (
      <FlashMessage
        key={message.id}
        message={message}
        deleteFlashMessage={this.props.deleteFlashMessage}
      />
    ));
    return (
      <div>
        {" "}
        <font color="green">{messages}</font>{" "}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    messages: state.flashMessages
  };
}

export default connect(
  mapStateToProps,
  { deleteFlashMessage }
)(FlashMessagesList);
