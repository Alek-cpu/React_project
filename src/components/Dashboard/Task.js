import React from "react";
import ProgresCompl from "./ProgresCompl";
import DataFilter from "./DataFilter";

const Task = () => {
    return (
        <div className="task">
            <ProgresCompl />
            <DataFilter />
        </div>
    );
}

export default Task;