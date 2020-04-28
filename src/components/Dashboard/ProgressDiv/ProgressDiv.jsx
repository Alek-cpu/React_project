import React from "react";
import Calendar from "../Calendar/Calendar";
import Stat from "../Stat/Stat";
import './ProgressDiv.css';

const ProgressDiv = () => {
    return (
        <div className="progres-wrap">
            <Calendar />
            <Stat />
        </div>
    );
}

export default ProgressDiv;