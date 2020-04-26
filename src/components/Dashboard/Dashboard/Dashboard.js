import React from "react";
import ProgressDiv from "../ProgressDiv/ProgressDiv";
import DDContainer from "../DDContainer/DDContainer";
import ProgresCheck from "../ProgresCheck/ProgresCheck";
import Task from "../Task/Task";
import ProgresCompl from "../ProgresCompl";
import DataFilter from "../DataFilter/DataFilter";
import ProgresLine from "../ProgresLine/ProgresLine";
import CalendarWeek from "../CalendarWeek/CalendarWeek";
import Day from "../Day/Day";
import DragAndDrop from "../DragAndDrop";
import Cards from "../Cards/Cards";
import Card from "../Card/Card";
import ShowMore from "../ShowMore/ShowMore";
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