import React, {Component} from "react";
import ContactDiv from "../ContactDiv/ContactDiv";
import './ContactList.css';
import InfoLine from "../InfoLine/InfoLine";

const ContactList = (props) =>{
    return (
        <div className="contact-inner">
            <div className="wrapperTable">
                <ContactDiv
                    usersInfo={props.userInfoData}
                />
            </div>
        </div>
    );
}

export default ContactList;