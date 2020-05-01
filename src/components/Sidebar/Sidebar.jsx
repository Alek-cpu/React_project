import React from "react";
import UserNav from "./UserSidebar/UserSidebar";
import MiniInfo from "./MiniInfo/MiniInfo";
import Navigation from "./NavigationItem/NavigationItem";
import SettingItem from "./SettingItem/SettingItem";
import ToggleSidebar from "./ToggleSidebar/ToggleSidebar";
import './Sidebar.css';
import userPhoto from './../../assets/image 2.png';



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
