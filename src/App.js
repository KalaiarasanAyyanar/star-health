import React, { Component } from 'react';
import './App.css';
import Sidebar from "./Components/SIdebar.jsx";

class App extends Component {
  render() {
    return (
      <div className="totaldiv">
        <div className="App">
          <div className="split">
            <div className="left">
              <div className="centered">
                <h2>Header</h2>
                <p>Constant data on the top of all pages or parts of the application</p>
              </div>
            </div>
            <div className="  left1">
              <div className="centered">

                <h2>Registering a plan for family</h2>
                <p>A step by step process with a meaningful UI for better understanding</p>
              </div>
            </div>
          </div>

          <Sidebar />
        </div>
        <div className="  left3">
          <div className="centered">

            <h2>Data about the insurance </h2>
            <p>Contains image and divisions of data</p>
          </div>
        </div>
        <div className="  left4">
          <div className="centered">

            <h2>Data about the insurance-2 </h2>
            <p>Contains image and divisions of data</p>
          </div>
        </div>
        <div className="  left5">
          <div className="centered">

            <h2>Footer</h2>
            <p>Constant data on the bottom of across all pages or parts of the application</p>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
