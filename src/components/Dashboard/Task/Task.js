import React from "react";
import ProgresCompl from "../ProgresCompl";
import DataFilter from "../DataFilter/DataFilter";
import './Task.css';

const Task = () => {
    return (
        <div className="task">
            <ProgresCompl />
            <DataFilter />
        </div>
    );
}

export default Task;