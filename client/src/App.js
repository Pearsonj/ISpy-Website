import React, { Component } from "react";
import NavLinks from './Components/NavLinks/NavLinks'
import Logo from './Components/Logo/Logo'
import MasterModal from './Components/Modals/MasterModal'
import { BrowserRouter as Router, Route, Link, NavLink } from "react-router-dom";

class App extends Component {
  constructor(){
    super()
    this.state = {
      currentModal: ""
    }
  }

  changeModal = (type) => {
		if(type === ''){
      document.getElementsByClassName('opacityTransition')[0].style.opacity = '0';
			let that = this;
			function x (){
        that.setState({currentModal: type});
			}
			setTimeout(function(){
        x()
			}, 300)
      console.log(this.state.currentModal)
      
		}else{
      this.setState({currentModal: type});
      console.log(this.state.currentModal)
       
		}
	}


  render() {
    return (
      <div>
      <MasterModal
      currentModal={this.state.currentModal}
      />
      <NavLinks 
      changeModal={this.changeModal}
      />
      <Logo/>
      </div>
    );
  }
}

export default App;
