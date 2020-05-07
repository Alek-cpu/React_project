import React from 'react';
import Stat from "../Stat/Stat";
import ReactCalendar from "../Calendar/Calendar";
import '../../../styles/ProgressDiv.scss';

const ProgressDiv = () => {
    return (
        <div className="progres-wrap">
            <ReactCalendar />
            <Stat />
        </div>
    );
}

export default ProgressDiv;