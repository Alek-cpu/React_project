import React, {Component} from "react";
import HeaderInfoLine from "../header-info-line/HeaderInfoLine";
import InfoLine from "../info-line/InfoLine";
import './ContactDiv.css';
import {ContactList} from "../contact-list/ContactList";
import toDo from "../../../action/toDo";



const ContactDiv = (props) => {
    let infoLines =
        props.usersInfo.map( inf => (<InfoLine onChange={toDo} id={inf.id}
                                         userName={inf.userName}
                                         email={inf.email}
                                         companyName={inf.companyName}
                                         role={inf.role}
                                         forecast={inf.forecast}
                                         date={inf.date}
        />));

    return (
        <table className="contact-list">
            <HeaderInfoLine onChange={toDo} />
            {infoLines}
        </table>
    );
}

export default ContactDiv;