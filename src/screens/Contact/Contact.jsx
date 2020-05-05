import React from "react";
import ContactCommand from "../../components/Contact/ContactCommand/ContactCommand";
import ContactSort from "../../components/forms/ContactSort/ContactSort";
import ContactAdd from "../../components/forms/ContactAdd/ContactAdd";
import ContactList from "../../components/Contact/ContactList/ContactList";
import ContactDiv from "../../components/Contact/ContactDiv/ContactDiv";
import HeaderInfoLine from "../../components/Contact/HeaderInfoLine/HeaderInfoLine";
import '../../styles/Contact.scss';



const Contact = (props) => {
    return (
        <div className="contact">
            <ContactCommand />
            <ContactList />
        </div>
    );
}

export default Contact;

