import React from 'react';
import NotificationBtn from "../../forms/Notification/Notification";
import SearchStringForm from "../../forms/InputSearchString/InputSearchString";
import '../../../styles/SearchString.scss';

const SearchString = () => {
    return (
        <div className="search-container">
            <SearchStringForm />
            <NotificationBtn />
        </div>
    );
}

export default SearchString;