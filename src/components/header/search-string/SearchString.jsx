import React from 'react';
import NotificationBtn from "../../forms/notification/Notification";
import SearchStringForm from "../../forms/searchstring-form/SearchStringForm";

function SearchString() {
    return (
        <div className="searchContainer">
            <SearchStringForm />
            <NotificationBtn />
        </div>
    );
}

export default SearchString;