import React, { Component } from 'react';
import './App.css';
import InsurancePolicy from "./Components/InsurancePolicy.jsx";
import InsuranceMembers from "./Components/InsuranceMembers.jsx";
import Footer from './Components/Footer';
import Home from './Components/Home';
class App extends Component {
  render() {
    return (
      <div className="totaldiv">
        <Home />
        <InsurancePolicy />
        <InsuranceMembers />
        <Footer />
      </div>
    );
  }
}

export default App;
