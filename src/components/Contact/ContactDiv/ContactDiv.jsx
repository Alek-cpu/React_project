import React, {Component} from "react";
import HeaderInfoLine from "../HeaderInfoLine/HeaderInfoLine";
import InfoLine from "../InfoLine/InfoLine";
import './ContactDiv.css';
import toDo from "../../../js/toDo";
import {ContactList} from "../ContactList/ContactList";

const ContactDiv = (props) => {
    let infoLines =
        props.usersInfo.map( inf => (<InfoLine id={inf.id}
                                         userName={inf.userName}
                                         email={inf.email}
                                         companyName={inf.companyName}
                                         role={inf.role}
                                         forecast={inf.forecast}
                                         date={inf.date}
        />));

    return (
        <table className="contact-list">
            <HeaderInfoLine />
            {infoLines}
        </table>
    );
}

export default ContactDiv;