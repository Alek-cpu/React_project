import React from "react";
import Task from "../task/Task";
import ProgresLine from "../progres-line/ProgresLine";
import './ProgresCheck.css';

const ProgresCheck = () => {
    return (
        <div className="progress-check">
            <Task />
            <ProgresLine />
        </div>
    );
}

export default ProgresCheck;