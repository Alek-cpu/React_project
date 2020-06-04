import React, {useState} from 'react';
import {render} from 'react-dom';
import Calendar from 'react-calendar';

export default function ReactCalendar() {
    const [date, setDate] = useState(new Date());

    const onChange = date => {
        setDate(date);
    };

    return (
        <div>
            <Calendar
                onChange={onChange}
                value={date}
                showNeighboringMonth={false}
                DecadeView={false}
                CenturyView={false}
            />
        </div>
    );
}