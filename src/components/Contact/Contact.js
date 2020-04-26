import React from "react";
import ContactCommand from "./ContactCommand/ContactCommand";
import ContactSort from "./ContactSort/ContactSort";
import ContactAdd from "./ContactAdd/ContactAdd";
import ContactList from "./ContactList/ContactList";
import ContactDiv from "./ContactDiv/ContactDiv";
import HeaderInfoLine from "./HeaderInfoLine/HeaderInfoLine";
import InfoLine from "./InfoLine/InfoLine";
import './Contact.css';

const Contact = () => {
    return (
        <div className="contact">
            <ContactCommand />
            <ContactList />
        </div>
    );
}

export default Contact;

