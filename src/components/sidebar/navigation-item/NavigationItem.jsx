import React from 'react';
import DashboardItem from '../item/DashboardItem';
import TaskItem from '../item/TaskItem';
import EmailItem from '../item/EmailItem';
import ContactItem from '../item/ContactItem';
import ChatItem from '../item/ChatItem';
import DealsItem from '../item/DealsItem';
import {NavLink} from 'react-router-dom';

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