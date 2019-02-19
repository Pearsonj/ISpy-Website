import React from 'react';
import About from './About'
import Credentials from './Credentials'
import Email from './Email'

import './masterModal.css'


const MasterModal = (props) => {
    let currentModal;
    switch(props.currentModal) {
        case 'About':
            currentModal = <About />
            break;
        case 'Credentials':
            currentModal = <Credentials />
            break;
        case 'Email':
            currentModal = <Email/>
            break;
        default:
            currentModal = 'hey';
    }
    
    return (
        <div className='opacityTransition' 
            style={{
                height: '100%', 
                position: 'fixed', 
                top:props.currentModal?'0px':'-100000px', 
                width: props.currentModal?'100%':'0px', 
                opacity: props.currentModal?'1':'0',
                zIndex: '800'
            }} 
            
        >
            <div 
                style={{
                    width: '100%', 
                    maxWidth: '600px', 
                    color:'white', 
                    height: '500px', 
                    margin: '0 auto', 
                    borderRadius: '15px', 
                    padding: '10px', 
                    marginTop: '100px',
                    position: 'relative'
                }}
                // onClick={() => props.changeModal('')}
            >
                {currentModal}
                <span onClick={() => props.changeModal('')} style={{color: 'red', position: 'absolute', top: '5px', right: '10px' }}>X</span>
            </div>
            
        </div>
    )
};

export default MasterModal;