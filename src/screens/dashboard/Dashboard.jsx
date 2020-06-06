import React from 'react';

import ProgressCheck from '../../components/dashboard/progress-check/ProgressCheck';
import CalendarWeek from '../../components/dashboard/calendar-week/CalendarWeek';
import Cards from '../../components/dashboard/cards/Cards';
import ReactCalendar from '../../components/dashboard/calendar/Calendar';
import ProgressCompl from '../../components/dashboard/progress-completed/ProgressCompleted';

const Dashboard = () => {
    return (
        <div className="baseWrapper">
            <div className="ddWrap">
                <ProgressCheck />
                <CalendarWeek />
                <div className="dragDrop">
                    <Cards />
                </div>
                <div className="showMore">
                    Show more
                </div>
            </div>
            <div className="progressWrap">
                <ReactCalendar />
                <ProgressCompl />
            </div>
        </div>
    );
}

export default Dashboard;