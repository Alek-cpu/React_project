import React from "react";
import WebSiteName from "./website-name/WebSiteName";
import SearchString from "./search-string/SearchString";
import NotificationBtn from "./notification/Notification";
import SearchStringForm from "./input-search-string/InputSearchString";
import './header.css';

const Header = () => {
    return (
        <header className="App-header header">
            <WebSiteName />
            <SearchString />
        </header>
    );
}

export default Header;

