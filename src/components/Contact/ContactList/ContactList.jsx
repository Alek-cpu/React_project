import React, {Component} from "react";
import ContactDiv from "../ContactDiv/ContactDiv";
import '../../../styles/ContactList.scss';

const ContactList = (props) =>{
    return (
        <div className="contact-inner">
            <div className="wrapperTable">
                <ContactDiv />
            </div>
        </div>
    );
}

export default ContactList;