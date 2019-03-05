import React, { Component } from "react";
import "./App.css";
import { Record } from "./views/pages/record";

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Record />
        </header>
      </div>
    );
  }
}

export default App;
