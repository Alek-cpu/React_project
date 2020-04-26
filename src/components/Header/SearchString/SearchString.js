import React from "react";
import NotificationBtn from "../Notification/Notification";
import SearchStringForm from "../InputSearchString/InputSearchString";
import './SearchString.css';

const SearchString = () => {
    return (
        <div className="search-container">
            <SearchStringForm />
            <NotificationBtn />
        </div>
    );
}

export default SearchString;