import React, {useState} from 'react';
import UserNav from './user-sidebar/UserSidebar';
import Navigation from './navigation-item/NavigationItem';
import SettingItem from './setting-item/SettingItem';
import ToggleSidebar from './toggle-sidebar/ToggleSidebar';
import userPhoto from '../../img/image 2.png';

export default function Sidebar(click) {
    return (
        <aside className="sidebar">
            <div className="sidebar-container">
                <UserNav />
                <SettingItem />
                <ToggleSidebar click={click} />
            </div>
        </aside>
    );
}