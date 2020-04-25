import React from "react";
import ContactCommand from "./ContactCommand";
import ContactSort from "./ContactSort";
import ContactAdd from "./ContactAdd";
import ContactList from "./ContactList";
import ContactDiv from "./ContactDiv";
import HeaderInfoLine from "./HeaderInfoLine";
import InfoLine from "./InfoLine";

const Contact = () => {
    return (
        <div className="contact">
            <ContactCommand />
            <ContactList />
        </div>
    );
}

export default Contact;

