import React from 'react';
import NotificationBtn from "../../forms/notification/Notification";
import SearchStringForm from "../../forms/input-search-string/InputSearchString";

const SearchString = () => {
    return (
        <div className="search-container">
            <SearchStringForm />
            <NotificationBtn />
        </div>
    );
}

export default SearchString;