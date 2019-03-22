import React, { Component } from 'react';
import './App.css';
import InsurancePolicy from "./Components/InsurancePolicy.jsx";
import InsuranceMembers from "./Components/InsuranceMembers.jsx";
import Footer from './Components/Footer';
import Home from './Components/Home';
import Sidebar from './Components/Sidebar';
class App extends Component {
  state ={
    windowWidth:window.innerWidth
  }
  updateDimensions = () => {
    console.log("component",this.state.windowWidth);
    this.setState({
      windowWidth:window.innerWidth
    })
  }
  componentDidMount(){
    window.addEventListener("resize",this.updateDimensions)
  }
  render() {
    return (
      <div className="totaldiv">
      {console.log("window ",window.innerWidth,window.innerHeight)}
        <Home />
        
        {(this.state.windowWidth <= 900)?<Sidebar />:""}
        <InsurancePolicy />
        <InsuranceMembers />
        <Footer />
      </div>
    );
  }
}

export default App;
