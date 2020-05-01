import React from "react";
import './Day.css';

const Day = (props) => {
    return (
        <div className="day">
            <div className="name__day">{props.nameDay}</div>
            <div className="number__day ">{props.numberDay}</div>{/*now__day*/}
        </div>
    );
}

export default Day;