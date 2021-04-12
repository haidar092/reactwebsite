import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.bundle";


import Home from './Home';
import About from './About';
import Service from './Service';
import Navbar from './Navbar';
import Contact from './Contact';
import Footer from './Footer';
import {  Route, Switch,Redirect} from "react-router-dom";
const App =()=>{
    return(
        <>
        <Navbar/>
        <switch>
        <Route exact path="/" component={Home}/>
        <Route exact path="/About" component={About}/>
        <Route exact path="/Service" component={Service}/>
        <Route exact path="/Contact" component={Contact}/>
        
        </switch>
        <Footer />
        </>
    );
};
export default App;