import React from "react";
import ProgressDiv from "./ProgressDiv";
import DDContainer from "./DDContainer";
import ProgresCheck from "./ProgresCheck";
import Task from "./Task";
import ProgresCompl from "./ProgresCompl";
import DataFilter from "./DataFilter";
import ProgresLine from "./ProgresLine";
import CalendarWeek from "./CalendarWeek";
import Day from "./Day";
import DragAndDrop from "./DragAndDrop";
import Cards from "./Cards";
import Card from "./Card";
import ShowMore from "./ShowMore";
import './../../Dashboard.css';

const Dashboard = () => {
    return (
        <div className="base-wrapper">
            <DDContainer/>
            <ProgressDiv/>
        </div>
    );
}

export default Dashboard;