import React from "react";
import ProgresCheck from "../progres-check/ProgresCheck";
import CalendarWeek from "../calendar-week/CalendarWeek";
import DragAndDrop from "../DragAndDrop";
import testDrop from "../../../action/testDrop";
import ShowMore from "../show-more/ShowMore";
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