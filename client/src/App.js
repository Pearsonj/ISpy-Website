import React, { Component } from "react";
import NavLinks from './Components/NavLinks/NavLinks'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <NavLinks/>
    );
  }
}

export default App;
