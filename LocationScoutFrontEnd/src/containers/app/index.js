import { Route, Link } from "react-router-dom";
import React, { Component } from "react";

import Main from "../Main";
import Header from "../Header/";
import Footer from "../Footer/";
import FlashMessagesList from "../flash/FlashMessagesList";

class App extends Component {
  render() {
    return (
      <div id="wrapper">
        <Header />
        <FlashMessagesList />
        <Main />
        <Footer />
      </div>
    );
  }
}

export default App;
