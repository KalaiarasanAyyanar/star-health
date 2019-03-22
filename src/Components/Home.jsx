import React from "react";
import Header from "./Header.jsx";
import Register from "./Register.jsx";
import Sidebar from "./Sidebar.jsx";

const Home = () => {
    return (
        <div className="App">
            <div className="split">
                <Header />
                <Register />
            </div>
            
            <Sidebar />
           
        </div>
    );
}

export default Home;