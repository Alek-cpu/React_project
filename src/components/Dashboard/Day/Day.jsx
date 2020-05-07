import React from 'react';
import '../../../styles/Day.scss';

const Day = (props) => {
    return (
        <div className="day">
            <div className="name__day">{props.nameDay}</div>
            <div className="number__day ">{props.numberDay}</div>
        </div>
    );
}

export default Day;