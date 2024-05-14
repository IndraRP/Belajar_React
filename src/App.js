import React, { Component } from "react";
import Utama from "./Utama";
import Header from "./page/Header";

class App extends Component {
  render() {
    return (
      <>
        <Header />
        <Utama />
      </>
    );
  }
}

export default App;
