import React from "react";
import ProgresCompl from "../ProgresCompl/ProgresCompl";
import DataFilter from "../../forms/DataFilter/DataFilter";
import '../../../styles/Task.scss';

const Task = () => {
    return (
        <div className="task">
            <ProgresCompl />
            <DataFilter />
        </div>
    );
}

export default Task;