import React from 'react';
import MiniInfo from "../MiniInfo/MiniInfo";
import Navigation from "../NavigationItem/NavigationItem";
import '../../../styles/UserSidebar.scss';


const UserNav = () => {
    return (
        <div className="profile-container">
            <MiniInfo />
            <Navigation />
        </div>
    );
}

export default UserNav;