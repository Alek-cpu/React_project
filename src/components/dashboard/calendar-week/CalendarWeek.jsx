import React from 'react';
import moment from 'moment';

import Day from '../day/Day';

export default function CalendarWeek() {

    const items = [
        {
            nameDay: "Sun",
            numberDay: "23"
        },
        {
            nameDay: "Mon",
            numberDay: "24"
        },
        {
            nameDay: "Tue",
            numberDay: "25"
        },
        {
            nameDay: "Wed",
            numberDay: "26"
        },
        {
            nameDay: "Thu",
            numberDay: "27"
        },
        {
            nameDay: "Fri",
            numberDay: "28"
        },
        {
            nameDay: "Sat",
            numberDay: "29"
        },
    ]


    return (
        <div className="calendarWeek">
            <div className="date">{moment().format('D MMMM, dddd')}</div>
            <div className="daysWeek">
                <Day
                    items={items}
                />
            </div>
        </div>
    );
}