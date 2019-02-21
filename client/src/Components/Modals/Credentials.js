import React, { Component } from 'react'
import './credentials.css'

const CredentialModal = props => {
      return (
        <div className="credentials" style={{backgroundColor: '#731313fc', color: 'white', height: '500px', overflowY: 'auto'}}>
        <h2>Business License:</h2>
        <span>2342355lkjlkjasdf</span>
        <h2>Inspector ID:</h2>
        <span>1851</span>
        <h4>Have Questions You Want Answered now? Give us a call.</h4>
        <span>(425)-770-9872</span>
        </div>
      );
    }

export default CredentialModal