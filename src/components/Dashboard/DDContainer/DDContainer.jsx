import React from "react";
import ProgresCheck from "../ProgresCheck/ProgresCheck";
import CalendarWeek from "../CalendarWeek/CalendarWeek";
import DragAndDrop from "../DragAndDrop";
import ShowMore from "../ShowMore/ShowMore";
import './DDContainer.css';

const DDContainer= () => {
    return (
        <div className="dd-wrap">
            <ProgresCheck />
            <CalendarWeek />
            <DragAndDrop />
            <ShowMore />
        </div>
    );
}

export default DDContainer;