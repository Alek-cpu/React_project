import React from "react";
import ProgressDiv from "../../components/Dashboard/progress-div/ProgressDiv";
import DDContainer from "../../components/Dashboard/d-d-container/DDContainer";
import ProgresCheck from "../../components/Dashboard/progres-check/ProgresCheck";
import Task from "../../components/Dashboard/task/Task";
import ProgresCompl from "../../components/Dashboard/ProgresCompl";
import DataFilter from "../../components/Dashboard/data-filter/DataFilter";
import ProgresLine from "../../components/Dashboard/progres-line/ProgresLine";
import CalendarWeek from "../../components/Dashboard/calendar-week/CalendarWeek";
import Day from "../../components/Dashboard/day/Day";
import DragAndDrop from "../../components/Dashboard/DragAndDrop";
import Cards from "../../components/Dashboard/cards/Cards";
import Card from "../../components/Dashboard/card/Card";
import ShowMore from "../../components/Dashboard/show-more/ShowMore";
import './Dashboard.css';

const Dashboard = () => {
    return (
        <div className="base-wrapper">
            <DDContainer/>
            <ProgressDiv/>
        </div>
    );
}

export default Dashboard;