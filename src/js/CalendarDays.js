import React from "react";

const Days = (props) => {

    let {year, monthName} = props;
    let currentMonth = new Date(year, monthName);
    let nextMonth = new Date(year, monthName+1);
    let countMonthDay = (nextMonth - currentMonth)/(1000*3600*24);
    let index = (currentMonth.getDay() + 6) % 7;

    const row = 6;
    const colls = 7;

    let table = [];
    let cols,
        k = 1 - index;
    for (let i = 0; i < row; i++ ) {
        cols = [];
        for (let j = 0; j < colls; j++) {
            cols.push(<div className="row">{k > 0 && k <= countMonthDay ? k : ''}</div>)
            k++;
        }

        table.push(<div className="days">{cols}</div>)
    }
    return (
        <div className="tableBody">{table}</div>
    );
}

export default Days;