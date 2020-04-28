import React from "react";
import Days from "../../../js/CalendarDays";
import NameMonth from "../../../js/nameMonth";

import './Calendar.css';

const Calendar = () => {
    let date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getFullYear();

    return (
        <div className="progres-calendar-wrapper">
            <div className="calendar">
                <div className="nameMonthWrapper">
                    <div className="leftArrow arrow">
                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M7.41 10.59L2.83 6L7.41 1.41L6 0L0 6L6 12L7.41 10.59Z" fill="black"
                                  fill-opacity="0.54"/>
                        </svg>
                    </div>
                    <NameMonth monthName={month} year={year}/>
                    <div className="rightArrow arrow">
                        <svg width="8" height="12" viewBox="0 0 8 12" fill="none"
                             xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.589996 10.59L5.17 6L0.589996 1.41L2 0L8 6L2 12L0.589996 10.59Z" fill="black"
                                  fill-opacity="0.54"/>
                        </svg>
                    </div>
                </div>

                <div className="monthDayWrapper tableBody">
                    <div className="nameDayWrapper">
                        <div className="nameDay">Mon</div>
                        <div className="nameDay">Tue</div>
                        <div className="nameDay">Wed</div>
                        <div className="nameDay">Thu</div>
                        <div className="nameDay">Fri</div>
                        <div className="nameDay">Sat</div>
                        <div className="nameDay">Sun</div>
                    </div>

                    <Days monthName={month} year={year} />

                </div>

            </div>
        </div>
    );
}



export default Calendar;