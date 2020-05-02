import React from "react";
import WebSiteName from "./WebsiteName/WebSiteName";
import SearchString from "./SearchString/SearchString";
import NotificationBtn from "../forms/Notification/Notification";
import SearchStringForm from "../forms/InputSearchString/InputSearchString";
import './Header.css';

const Header = () => {
    return (
        <header className="App-header header">
            <WebSiteName />
            <SearchString />
        </header>
    );
}

export default Header;

