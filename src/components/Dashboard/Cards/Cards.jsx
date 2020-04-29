import React from "react";
import Card from "../Card/Card";
import './Cards.css';




const Cards = (props) => {
    let cardLines =
        props.cardInfo.map( c => (<Card eventName={"Send benefit review by Sunday"}
                                     dueDate={"December 23, 2020"}
                                     userName={"George Fields"}
                                     identicalStatus={"Reminder"}
                                     statusName={"Completed"}
        />));
    return (
        <div className="drag-drop-wrapper">
            {cardLines}
        </div>
    );
}

export default Cards;