import React from 'react';

import taskVector from '../../../img/task-vector.svg';

export default function TaskItem() {
    return (
        <a href="#">
            <div className="mnuItem">
                <img src={taskVector} alt="taskVector" />
                <div className="mnuItemName">Tasks</div>
            </div>
        </a>
    );
}