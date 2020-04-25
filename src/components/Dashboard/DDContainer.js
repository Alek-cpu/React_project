import React from "react";
import ProgresCheck from "./ProgresCheck";
import CalendarWeek from "./CalendarWeek";
import DragAndDrop from "./DragAndDrop";
import ShowMore from "./ShowMore";

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