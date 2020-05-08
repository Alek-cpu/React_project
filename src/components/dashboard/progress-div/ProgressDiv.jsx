import React from 'react';
import Stat from "../stat/Stat";
import ReactCalendar from "../calendar/Calendar";

const ProgressDiv = () => {
    return (
        <div className="progres-wrap">
            <ReactCalendar />
            <Stat />
        </div>
    );
}

export default ProgressDiv;