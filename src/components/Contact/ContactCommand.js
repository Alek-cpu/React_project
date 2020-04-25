import React from "react";
import ContactSort from "./ContactSort";
import ContactAdd from "./ContactAdd";

const ContactCommand = () => {
    return (
        <div className="contact-command">
            <ContactSort />
            <ContactAdd />
        </div>
    );
}

export default ContactCommand;