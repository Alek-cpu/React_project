import React from "react";
import Task from "./Task";
import ProgresLine from "./ProgresLine";

const ProgresCheck = () => {
    return (
        <div className="progress-check">
            <Task />
            <ProgresLine />
        </div>
    );
}

export default ProgresCheck;