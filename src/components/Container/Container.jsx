import React from "react";
import Dashboard from "../Dashboard/Dashboard/Dashboard";
import Contact from "../Contact/Contact";
import './container.css';
import Route from "react-router-dom/es/Route";


const ContainerDiv = () => {
    return (

            <div className="container">
                <div className="content">
                    <Route path='/dashboard' component={Dashboard}/>
                    <Route path='/contact' component={Contact}/>
                </div>
            </div>
    );
}
export default ContainerDiv;
