import React from "react";
import MiniInfo from '../mini-info/MiniInfo';
import Navigation from "../navigation-item/NavigationItem";
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