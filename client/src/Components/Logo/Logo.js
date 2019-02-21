import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom"
import './logo.css'

const Logo = props => {
      return (
        <div className="logoContainer">
            <h1 className="logo">I Spy Home Inspections</h1>
            <p className="mission">Here at I Spy our goal is to empower you with the knowledge you need to be more confident in one of the biggest moments in your life, buying a home. As well as to provide knowledge to those selling by letting you know the ins and outs of the home you already posses. We are here to answer any and all questions about your home with 30 years of knowledege to back it.</p>
        </div>
      );
    }
  
  
  export default Logo;