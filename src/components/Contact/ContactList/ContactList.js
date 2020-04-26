import React from "react";
import ContactDiv from "../ContactDiv/ContactDiv";
import './ContactList.css';

const ContactList = () => {
    return (
        <div className="contact-inner">
            <div className="wrapperTable">
                <ContactDiv />
            </div>
        </div>
    );
}

export default ContactList;