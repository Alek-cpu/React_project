import React from 'react';
import ProgresCheck from "../progres-check/ProgresCheck";
import CalendarWeek from "../calendar-week/CalendarWeek";
import DragAndDrop from "../dnd/DragAndDrop";
import ShowMore from "../show-more/ShowMore";

const DDContainer= (props) => {
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