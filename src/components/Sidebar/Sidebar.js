import React from "react";
import UserNav from "./UserSidebar";
import MiniInfo from "./MiniInfo";
import Navigation from "./NavigationItem";
import SettingItem from "./SettingItem";
import ToggleSidebar from "./ToggleSidebar";
import '../../sidebar.css';
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
