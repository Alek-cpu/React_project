import React from "react";

const Day = (props) => {
    return (
        <div className="day">
            <div className="name__day">{props.nameDay}</div>
            <div className="number__day ">{props.numberDay}</div>{/*now__day*/}
        </div>
    );
}

export default Day;