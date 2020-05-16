import React from 'react';
import ProgressDiv from "../../components/dashboard/progress-div/ProgressDiv";
import DDContainer from "../../components/dashboard/dnd-container/DDContainer";
import ProgresCheck from "../../components/dashboard/progres-check/ProgresCheck";
import Task from "../../components/dashboard/task/Task";
import ProgresCompl from "../../components/dashboard/progres-compl/ProgresCompl";
import DataFilter from "../../components/forms/datafilter/DataFilter";
import ProgresLine from "../../components/dashboard/progres-line/ProgresLine";
import CalendarWeek from "../../components/dashboard/calendar-week/CalendarWeek";
import Day from "../../components/dashboard/day/Day";
import DragAndDrop from "../../components/dashboard/dnd/DragAndDrop";
import Cards from "../../components/dashboard/cards/Cards";
import Card from "../../components/dashboard/card/Card";
import ShowMore from "../../components/dashboard/show-more/ShowMore";

const Dashboard = (props) => {
    return (
        <div className="base-wrapper">
            <DDContainer />
            <ProgressDiv />
        </div>
    );
}

export default Dashboard;