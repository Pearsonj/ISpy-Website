import React, { Component } from "react";
import NavLinks from './Components/NavLinks/NavLinks'
import Logo from './Components/Logo/Logo'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

class App extends Component {
  render() {
    return (
      <div>
      <NavLinks/>
      <Logo/>
      </div>
    );
  }
}

export default App;
