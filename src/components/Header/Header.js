import React from "react";
import WebSiteName from "./WebSiteName/WebSiteName";
import SearchString from "./SearchString/SearchString";
import NotificationBtn from "./Notification/Notification";
import SearchStringForm from "./InputSearchString/InputSearchString";
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

