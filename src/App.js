import React, { Component } from "react";
import Header from "./Header.js";
import "./App.css";
import Tile from "./Tile.js";
class App extends Component {
  render() {
    return (
      <div>
        <Header></Header>
        <Tile></Tile>
      </div>
    );
  }
}

export default App;
