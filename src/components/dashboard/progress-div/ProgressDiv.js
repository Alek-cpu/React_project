import React from 'react';
import ProgresCompl from "../stat/ProgresCompl";
import ReactCalendar from "../calendar/Calendar";

function ProgressDiv() {
    return (
        <div className="progres-wrap">
            <ReactCalendar />
            <ProgresCompl />
        </div>
    );
}

export default ProgressDiv;