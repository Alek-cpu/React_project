import React from "react";
import ContactCommand from "../../components/Contact/contact-command/ContactCommand";
import ContactSort from "../../components/Contact/contact-sort/ContactSort";
import ContactAdd from "../../components/Contact/contact-add/ContactAdd";
import ContactList from "../../components/Contact/contact-list/ContactList";
import ContactDiv from "../../components/Contact/contact-div/ContactDiv";
import HeaderInfoLine from "../../components/Contact/header-info-line/HeaderInfoLine";
import InfoLine from "../../components/Contact/info-line/InfoLine";
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

