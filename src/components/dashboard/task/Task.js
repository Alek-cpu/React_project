import React from 'react';
import ProgresCompl from "../progres-compl/ProgresCompl";
import DataFilter from "../../forms/datafilter/DataFilter";

function Task() {
    return (
        <div className="task">
            <ProgresCompl />
            <DataFilter />
        </div>
    );
}

export default Task;