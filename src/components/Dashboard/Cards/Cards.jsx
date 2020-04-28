import React from "react";
import Card from "../Card/Card";
import './Cards.css';

const Cards = () => {
    return (
        <div className="drag-drop-wrapper">
            <Card
                eventName={"Send benefit review by Sunday"}
                dueDate={"December 23, 2020"}
                userName={"George Fields"}
                identicalStatus={"Reminder"}
                statusName={"Completed"}
            />
            <Card
                eventName={"Invite to office meet-up"}
                dueDate={"December 22, 2019"}
                userName={"Rebecca Moore"}
                identicalStatus={"Call"}
                statusName={"Ended"}
            />
            <Card
                eventName={"Office meet-up"}
                dueDate={"December 21, 2018"}
                userName={"Lindsey Stroud"}
                identicalStatus={"Event"}
                statusName={"Completed"}
            />
        </div>
    );
}

export default Cards;