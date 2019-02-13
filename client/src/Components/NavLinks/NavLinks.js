import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom"
import './NavLink.css'

const NavLinks = props => {
      return (
        <div className="navLinks">
          <ul>
            <li className="navItems"><Link to="/"><h6 contentEditable role='textbox' aria-multiline='true'>Meet Your Inspector</h6></Link></li>
            <li className="navItems"><Link to="/"><h6 contentEditable role='textbox' aria-multiline='true'>Set Up Consultation</h6></Link></li>
            <li className="navItems"><Link to="/"><h6 contentEditable role='textbox' aria-multiline='true'>Give Us A Call</h6></Link></li>
            <li className="navItems"><Link to="/"><h6 contentEditable role='textbox' aria-multiline='true'>Our Credentials</h6></Link></li>
          </ul>
        </div>
      );
    }
  
  
  export default NavLinks;
