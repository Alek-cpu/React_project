import React from 'react';
import ProgresCheck from '../../components/dashboard/progres-check/ProgresCheck';
import CalendarWeek from '../../components/dashboard/calendar-week/CalendarWeek';
import Cards from '../../components/dashboard/cards/Cards';
import ReactCalendar from '../../components/dashboard/calendar/Calendar';
import ProgresCompl from '../../components/dashboard/stat/ProgresCompl';

const Dashboard = (props) => {
    return (
        <div className="baseWrapper">
            <div className="ddWrap">
                <ProgresCheck />
                <CalendarWeek />
                <div className="dragDrop">
                    <Cards />
                </div>
                <div className="showMore">
                    Show more
                </div>
            </div>
            <div className="progresWrap">
                <ReactCalendar />
                <ProgresCompl />
            </div>
        </div>
    );
}

export default Dashboard;