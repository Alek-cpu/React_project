import React, {Component} from "react";
import HeaderInfoLine from "../HeaderInfoLine/HeaderInfoLine";
import '../../../styles/ContactDiv.scss';
import {ContactList} from "../ContactList/ContactList";
import UserContactList from "./../../../containers/userContactList";
import Details from "../../../containers/details";

const ContactDiv = (props) => {
    return (
        <table className="contact-list">
            <HeaderInfoLine />
            <UserContactList />
            <Details />
        </table>
    );
}

export default ContactDiv;