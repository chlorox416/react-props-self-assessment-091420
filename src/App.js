import React, { Component } from "react";
import "./App.css";
import Header from './Components/Header'

class App extends Component {
  render() {
    return (
      <div>
        <Header message = "Hello World"/>
      </div>
    )
  }
}

export default App;
