import React from 'react';
import Dashboard from "../../screens/Dashboard/Dashboard";
import Contact from "../../screens/Contact/Contact";
import Route from 'react-router-dom/es/Route';
import '../../styles/container.scss';

const ContainerDiv = (props) => {

    return (
            <div className="container">
                <div className="content">
                    <Route
                       path='/dashboard' render={ () => <Dashboard /> }
                    />
                    <Route
                        path='/contact' render={ () => <Contact />}
                    />
                </div>
            </div>
    );
}
export default ContainerDiv;
