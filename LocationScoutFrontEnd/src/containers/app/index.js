import React, { Component } from "react";

import Main from "../Main";
import Header from "../Header/";
import Footer from "../Footer/";
import FlashMessagesList from "../flash/FlashMessagesList";

class App extends Component {
  render() {
    console.log("inside app");
    console.log(this.props.location.pathname);
    return (
      <div>
        <Header pathname={this.props.location.pathname} />
        <FlashMessagesList />
        <Main />
        {this.props.location.pathname.includes("dashboard") ? "" : <Footer />}
      </div>
    );
  }
}

export default App;
