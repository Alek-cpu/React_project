import React from 'react';

const Day = (props) => {
    return (
        <div className="day">
            <div className="nameDay">{props.nameDay}</div>
            <div className="numberDay ">{props.numberDay}</div>
        </div>
    );
}

export default Day;