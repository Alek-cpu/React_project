import React from 'react';
import Dashboard from "../../screens/dashboard/Dashboard";
import Contact from "../../screens/contact/Contact";
import Route from 'react-router-dom/es/Route';
import {dashboard, contact} from "../../constants/constants";

const ContainerDiv = (props) => {

    return (
        <div className="container">
            <div className="content">
                <Route
                    path={dashboard} render={() => <Dashboard />}
                />
                <Route
                    path={contact} render={() => <Contact />}
                />
            </div>
        </div>
    );
}
export default ContainerDiv;
