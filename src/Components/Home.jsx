import React from "react";
import Header from "./Header.jsx";
import Register from "./Register.jsx";
import Sidebar from "./Sidebar.jsx";

class Home extends React.Component{
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
      render (){
    return (
        <div className="App">
            <div className="split">
                <Header />
                <Register />
            </div>
            {(this.state.windowWidth >= 900)?<Sidebar />:""}  
        </div>
    );
}
}
export default Home;