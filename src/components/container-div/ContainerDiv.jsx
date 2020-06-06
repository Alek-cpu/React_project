import React from 'react';
import Route from 'react-router-dom/es/Route';

import Dashboard from '../../screens/dashboard/Dashboard';
import Contact from '../../screens/contact/Contact';
import constants from '../../constants/constants';
import index from '../../store';

const {dashboard, contact} = constants

const routes = [
    {
        path: dashboard,
        component: <Dashboard />
    },
    {
        path: contact,
        component: <Contact />
    }
]

const ContainerDiv = () => {

    return (
        <div className="container">
            <div className="content">
                {routes.map((value, index) => (
                    <Route
                        key={index} path={value.path} render={() => value.component}
                    />
                ))}
            </div>
        </div>
    );
}
export default ContainerDiv;
