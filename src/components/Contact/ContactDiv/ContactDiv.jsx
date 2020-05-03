import React, {Component} from "react";
import HeaderInfoLine from "../HeaderInfoLine/HeaderInfoLine";
import './ContactDiv.css';
import {ContactList} from "../ContactList/ContactList";
import UserContactList from "./../../../containers/userContactList";

const ContactDiv = (props) => {
    return (
        <table className="contact-list">
            <HeaderInfoLine />
            <UserContactList />
        </table>
    );
}

export default ContactDiv;