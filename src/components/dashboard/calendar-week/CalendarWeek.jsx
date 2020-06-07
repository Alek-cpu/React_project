import React from 'react';
import moment from 'moment';

import Day from '../day/Day';

export default function CalendarWeek() {

    const items = [
        {
            nameDay: moment().format('ddd'),
            numberDay: moment().format('D')
        },
        {
            nameDay: moment().add(1, 'day').format('ddd'),
            numberDay: moment().add(1, 'day').format('D')
        },
        {
            nameDay: moment().add(2, 'day').format('ddd'),
            numberDay: moment().add(2, 'day').format('D')
        },
        {
            nameDay: moment().add(3, 'day').format('ddd'),
            numberDay: moment().add(3, 'day').format('D')
        },
        {
            nameDay: moment().add(4, 'day').format('ddd'),
            numberDay: moment().add(4, 'day').format('D')
        },
        {
            nameDay: moment().add(5, 'day').format('ddd'),
            numberDay: moment().add(5, 'day').format('D')
        },
        {
            nameDay: moment().add(6, 'day').format('ddd'),
            numberDay: moment().add(6, 'day').format('D')
        },
    ]


    return (
        <div className="calendarWeek">
            <div className="date">{moment().add(1, 'day').format('D MMMM, dddd')}</div>
            <div className="daysWeek">
                <Day
                    items={items}
                />
            </div>
        </div>
    );
}