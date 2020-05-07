import React from 'react';
import ProgresCheck from "../ProgresCheck/ProgresCheck";
import CalendarWeek from "../CalendarWeek/CalendarWeek";
import DragAndDrop from "../DragAndDrop/DragAndDrop";
import ShowMore from "../ShowMore/ShowMore";
import '../../../styles/DDContainer.scss';

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