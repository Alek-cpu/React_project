import React from "react";
import DashboardItem from "./DashboardItem";
import TaskItem from "./TaskItem";
import EmailItem from "./EmailItem";
import ContactItem from "./ContactItem";
import ChatItem from "./ChatItem";
import DealsItem from "./DealsItem";
import {NavLink} from "react-router-dom";

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