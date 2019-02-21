import React, { Component } from 'react'
import './about.css'


const AboutModal = props => {
      return (
        <div className="about" style={{backgroundColor: '#731313fc', color: 'white', height: '500px', overflowY: 'auto', padding: '50px'}}>
        <img className="img" src={require('../../photos/donald.jpg')} />
        <p className="aboutTxt">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Pharetra massa massa ultricies mi quis hendrerit dolor magna. Nullam non nisi est sit amet facilisis magna etiam. Ornare massa eget egestas purus. Tortor condimentum lacinia quis vel eros donec. Risus commodo viverra maecenas accumsan lacus.</p>
        </div>
      );
    }

export default AboutModal