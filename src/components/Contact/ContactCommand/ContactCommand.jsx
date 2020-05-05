import React from "react";
import ContactSort from "../../forms/ContactSort/ContactSort";
import ContactAdd from "../../forms/ContactAdd/ContactAdd";
import '../../../styles/ContactCommand.scss';

const ContactCommand = () => {
    return (
        <div className="contact-command">
            <ContactSort />
            <ContactAdd />
        </div>
    );
}

export default ContactCommand;