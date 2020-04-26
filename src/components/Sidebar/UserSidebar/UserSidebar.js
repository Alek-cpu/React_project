import React from "react";
import MiniInfo from '../MiniInfo/MiniInfo';
import Navigation from "../NavigationItem/NavigationItem";
import './UserSidebar.css';


const UserNav = () => {
    return (
        <div className="profile-container">
            <MiniInfo />
            <Navigation />
        </div>
    );
}

export default UserNav;