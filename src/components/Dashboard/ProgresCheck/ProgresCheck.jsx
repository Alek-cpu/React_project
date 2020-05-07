import React from 'react';
import Task from "../Task/Task";
import ProgresLine from "../ProgresLine/ProgresLine";
import '../../../styles/ProgresCheck.scss';

const ProgresCheck = () => {
    return (
        <div className="progress-check">
            <Task />
            <ProgresLine />
        </div>
    );
}

export default ProgresCheck;