import React from 'react';

import Dashboard from '../screens/dashboard/Dashboard';
import Contact from '../screens/contact/Contact';
import constants from './constants';

let {dashboard, contact} = constants;

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

export default routes;