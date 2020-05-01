import React from "react";
import ContactSort from "../contact-sort/ContactSort";
import ContactAdd from "../contact-add/ContactAdd";
import './ContactCommand.css';

const ContactCommand = () => {
    return (
        <div className="contact-command">
            <ContactSort />
            <ContactAdd />
        </div>
    );
}

export default ContactCommand;