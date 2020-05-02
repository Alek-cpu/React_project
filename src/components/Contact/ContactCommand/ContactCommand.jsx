import React from "react";
import ContactSort from "../../forms/contact-sort/ContactSort";
import ContactAdd from "../../forms/ContactAdd/ContactAdd";
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