import React from "react";
import ContactSort from "../ContactSort/ContactSort";
import ContactAdd from "../ContactAdd/ContactAdd";
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