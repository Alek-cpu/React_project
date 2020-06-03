import React from 'react';
import SearchString from "./search-string/SearchString";
import NotificationBtn from "../forms/notification/Notification";
import SearchStringForm from "../forms/searchstring-form/SearchStringForm";

function Header() {
    return (
        <header className="App-header header">
            <div className="sidebarNameInner">
                <div className="blockName">
                    <div className="name">SaaS <span className="kit">Kit</span></div>
                </div>
            </div>
            <div className="searchContainer">
                <SearchStringForm />
                <NotificationBtn />
            </div>
        </header>
    );
}

export default Header;

