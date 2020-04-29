import React from "react";
import Stat from "../Stat/Stat";
import './ProgressDiv.css';
import ReactCalendar from "../Calendar/Calendar";

const ProgressDiv = () => {
    return (
        <div className="progres-wrap">
            <ReactCalendar />
            <Stat />
        </div>
    );
}

export default ProgressDiv;