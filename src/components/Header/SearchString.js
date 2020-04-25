import React from "react";
import NotificationBtn from "./Notification";
import SearchStringForm from "./InputSearchString";

const SearchString = () => {
    return (
        <div className="search-container">
            <SearchStringForm />
            <NotificationBtn />
        </div>
    );
}

export default SearchString;