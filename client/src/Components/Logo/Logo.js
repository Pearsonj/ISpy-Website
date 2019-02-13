import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom"
import './logo.css'

const Logo = props => {
      return (
        <div className="logoContainer">
            <h1 className="logo">ISpy Home Inspections</h1>
            <p className="mission">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Nullam non nisi est sit amet facilisis magna etiam. Ornare massa eget egestas purus. Tortor condimentum lacinia quis vel eros donec. Risus commodo viverra maecenas accumsan lacus.</p>
        </div>
      );
    }
  
  
  export default Logo;