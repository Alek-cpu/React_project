import React from 'react';

const Day = (
    {nameDay, numberDay}
) => {
    return (
        <div className="day">
            <div className="nameDay">{nameDay}</div>
            <div className="numberDay ">{numberDay}</div>
        </div>
    );
}

export default Day;