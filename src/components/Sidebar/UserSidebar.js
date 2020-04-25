import React from "react";
import MiniInfo from './MiniInfo';
import Navigation from "./NavigationItem";


const UserNav = () => {
    return (
        <div className="profile-container">
            <MiniInfo />
            <Navigation />
        </div>
    );
}

export default UserNav;