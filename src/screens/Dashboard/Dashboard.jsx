import React from "react";
import ProgressDiv from "../../components/Dashboard/ProgressDiv/ProgressDiv";
import DDContainer from "../../components/Dashboard/DDContainer/DDContainer";
import ProgresCheck from "../../components/Dashboard/ProgresCheck/ProgresCheck";
import Task from "../../components/Dashboard/Task/Task";
import ProgresCompl from "../../components/Dashboard/ProgresCompl";
import DataFilter from "../../components/Dashboard/data-filter/DataFilter";
import ProgresLine from "../../components/Dashboard/progres-line/ProgresLine";
import CalendarWeek from "../../components/Dashboard/CalendarWeek/CalendarWeek";
import Day from "../../components/Dashboard/day/Day";
import DragAndDrop from "../../components/Dashboard/DragAndDrop";
import Cards from "../../components/Dashboard/Cards/Cards";
import Card from "../../components/Dashboard/Card/Card";
import ShowMore from "../../components/Dashboard/ShowMore/ShowMore";
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