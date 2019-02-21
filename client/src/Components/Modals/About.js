import React, { Component } from 'react'
import './about.css'


const AboutModal = props => {
      return (
        <div className="about" style={{backgroundColor: '#731313fc', color: 'white', height: '500px', overflowY: 'auto', padding: '50px'}}>
        <img className="img" src={require('../../photos/donald.jpg')} />
        <p className="aboutTxt"><span style={{textDecoration: 'underline'}}>Donald Herbert</span> has been working in construction for 30 years and has always worked in the greater Seattle area. While still building houses and doing remodels in the area with his company SNAP Contracting, he has now decided to help out others in their search to sell or buy a home in a new way, doing home inspections! All the experience from his whole career as a contractor now gives him an experts eye when inspecting your home. He makes the situation as professional, quick, and thorough as any of our competitors, and it comes with expert knowledge of what exactly goes into building and maintaining a home for as long as possible.</p>
        </div>
      );
    }

export default AboutModal