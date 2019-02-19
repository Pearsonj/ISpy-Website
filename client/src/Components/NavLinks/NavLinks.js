import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom"
import './NavLink.css'

const NavLinks = props => {
      return (
        <div className="navLinks">
          <ul>
            <li className="navItems"><Link to="/" onClick={() =>{props.changeModal('About')}}><h6>Meet Your Inspector</h6></Link></li>
            <li className="navItems"><Link to="/" onClick={() =>{props.changeModal('Email')}}><h6>Set Up Consultation</h6></Link></li>
            <li className="navItems"><Link to="/" onClick={() =>{props.changeModal('Credentials')}}><h6>Give Us A Call</h6></Link></li>
            <li className="navItems"><Link to="/" onClick={() =>{props.changeModal('Credentials')}}><h6>Our Credentials</h6></Link></li>
          </ul>
        </div>
      );
    }
  
  
  export default NavLinks;
