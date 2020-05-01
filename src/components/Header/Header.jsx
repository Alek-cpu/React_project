import React from "react";
import WebSiteName from "./WebsiteName/WebSiteName";
import SearchString from "./SearchString/SearchString";
import NotificationBtn from "../forms/notification/Notification";
import SearchStringForm from "../forms/input-search-string/InputSearchString";
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

