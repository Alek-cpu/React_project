import React from 'react';
import {NavLink} from 'react-router-dom';

import DashboardItem from '../item/DashboardItem';
import TaskItem from '../item/TaskItem';
import EmailItem from '../item/EmailItem';
import ContactItem from '../item/ContactItem';
import ChatItem from '../item/ChatItem';
import DealsItem from '../item/DealsItem';

export default function Navigation() {
    return (
        <nav className="mnu">
            <NavLink to="/dashboard">
                <DashboardItem />
            </NavLink>
            <TaskItem />
            <EmailItem />
            <NavLink to="/contact">
                <ContactItem />
            </NavLink>
            <ChatItem />
            <DealsItem />
        </nav>
    );
}