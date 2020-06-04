import React from 'react';
import NotificationBtn from "../../forms/notification/Notification";
import SearchStringForm from "../../forms/searchstring-form/SearchStringForm";

export default function SearchString() {
    return (
        <div className="searchContainer">
            <SearchStringForm />
            <NotificationBtn />
        </div>
    );
}