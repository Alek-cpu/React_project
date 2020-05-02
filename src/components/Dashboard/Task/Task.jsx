import React from "react";
import ProgresCompl from "../ProgresCompl/ProgresCompl";
import DataFilter from "../../forms/DataFilter/DataFilter";
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