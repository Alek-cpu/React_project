import React from "react";
import Dashboard from "../../screens/Dashboard/Dashboard";
import Contact from "../../screens/Contact/Contact";
import './container.css';
import Route from "react-router-dom/es/Route";


const ContainerDiv = () => {
    return (

            <div className="container">
                <div className="content">
                    <Route path='/dashboard' render={ () => <Dashboard /> }/>
                    <Route path='/contact' render={ () => <Contact />}/>
                </div>
            </div>
    );
}
export default ContainerDiv;
