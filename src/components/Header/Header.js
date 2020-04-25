import React from "react";
import WebSiteName from "./WebSiteName";
import SearchString from "./SearchString";
import NotificationBtn from "./Notification";
import SearchStringForm from "./InputSearchString";
import '../../header.css';

const Header = () => {
    return (
        <header className="App-header header">
            <WebSiteName />
            <SearchString />
        </header>
    );
}

export default Header;

