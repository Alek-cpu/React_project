import React from "react";
import Cards from "./Cards/Cards";

const cards = [
    {
        eventName: "Send benefit review by Sunday",
        dueDate: "December 23, 2020",
        userName: "George Fields",
        identicalStatus: "Reminder",
        statusName: "Completed"
    },
    {
        eventName: "Invite to office meet-up",
        dueDate: "December 22, 2019",
        userName: "Rebecca Moore",
        identicalStatus: "Call",
        statusName: "Ended"
    },
    {
        eventName: "Office meet-up",
        dueDate: "December 21, 2018",
        userName: "Lindsey Stroud",
        identicalStatus: "Event",
        statusName: "Completed"
    }
]


const DragAndDrop = () => {
    return (
        <div className="drag-drop">
            <Cards cardInfo={cards} />
        </div>
    );
}

export default DragAndDrop;