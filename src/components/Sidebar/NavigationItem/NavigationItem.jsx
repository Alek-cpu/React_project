import React from "react";
import DashboardItem from "../Item/DashboardItem";
import TaskItem from "../Item/TaskItem";
import EmailItem from "../Item/EmailItem";
import ContactItem from "../Item/ContactItem";
import ChatItem from "../Item/ChatItem";
import DealsItem from "../Item/DealsItem";
import {NavLink} from "react-router-dom";
import '../../../styles/NavigationItem.scss';

const Navigation = () => {
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

export default Navigation;