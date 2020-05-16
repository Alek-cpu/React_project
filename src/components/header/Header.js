import React from 'react';
import WebSiteName from "./website-name/WebSiteName";
import SearchString from "./search-string/SearchString";
import NotificationBtn from "../forms/notification/Notification";
import SearchStringForm from "../forms/input-search-string/InputSearchString";

function Header() {
    return (
        <header className="App-header header">
            <WebSiteName />
            <SearchString />
        </header>
    );
}

export default Header;

