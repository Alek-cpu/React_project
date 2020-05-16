import React from 'react';
import Day from "../day/Day";

function CalendarWeek() {
    return (
        <div className="calendar-week">
            <div className="calendar-wrapper">
                <div className="date">23 December, Sunday</div>
                <div className="days-week">
                    <Day
                        nameDay={"Sun"}
                        numberDay={"23"}
                    />
                    <Day
                        nameDay={"Mon"}
                        numberDay={"24"}
                    />
                    <Day
                        nameDay={"Tue"}
                        numberDay={"25"}
                    />
                    <Day
                        nameDay={"Wed"}
                        numberDay={"26"}
                    />
                    <Day
                        nameDay={"Thu"}
                        numberDay={"27"}
                    />
                    <Day
                        nameDay={"Fri"}
                        numberDay={"28"}
                    />
                    <Day
                        nameDay={"Sat"}
                        numberDay={"29"}
                    />
                </div>
            </div>
        </div>
    );
}

export default CalendarWeek;