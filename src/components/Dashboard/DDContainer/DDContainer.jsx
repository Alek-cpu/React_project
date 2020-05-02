import React from "react";
import ProgresCheck from "../ProgresCheck/ProgresCheck";
import CalendarWeek from "../CalendarWeek/CalendarWeek";
import DragAndDrop from "../DragAndDrop/DragAndDrop";
import testDrop from "../../../action/testDrop";
import ShowMore from "../ShowMore/ShowMore";
import './DDContainer.css';

const DDContainer= (props) => {
    return (
        <div className="dd-wrap">
            <ProgresCheck />
            <CalendarWeek />
            <DragAndDrop cardData={props.cardData} />
            <ShowMore />
        </div>
    );
}

export default DDContainer;