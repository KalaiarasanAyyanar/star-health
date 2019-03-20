import React, { Component } from 'react';
import './App.css';
import Sidebar from "./Components/SIdebar.jsx";
import Register from "./Components/Register.jsx";
class App extends Component {
  render() {
    return (
      <div className="totaldiv">
        <div className="App">
          <div className="split">
            <div className="left">
            <h2>Header</h2>
            <p>Constant data on the top of all pages or parts of the application</p>
            </div>
              <Register />
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
