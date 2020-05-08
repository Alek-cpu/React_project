import React from 'react';
import UserNav from "./user-sidebar/UserSidebar";
import MiniInfo from "./mini-info/MiniInfo";
import Navigation from "./navigation-item/NavigationItem";
import SettingItem from "./setting-item/SettingItem";
import ToggleSidebar from "./toggle-sidebar/ToggleSidebar";
import userPhoto from '../../img/image 2.png';

const Sidebar = () => {
    return (
        <aside className="sidebar">
            <div className="sidebar-container">
                <UserNav />
                <SettingItem />
                <ToggleSidebar />
            </div>
        </aside>
    );
}

export default Sidebar;
