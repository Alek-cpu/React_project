import React from "react";
import '../../../styles/Item.scss';

const TaskItem = () => {
    return (
        <a href="#">
            <div className="mnu-item">
                <svg width="17" height="16" viewBox="0 0 17 16" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path className="mnu-item__svg"
                          d="M1.49996 1.2H15.6666C15.7384 1.2 15.8 1.2616 15.8 1.33333V6.33333C15.8 6.40507 15.7384 6.46667 15.6666 6.46667H1.49996C1.42823 6.46667 1.36663 6.40507 1.36663 6.33333V1.33333C1.36663 1.2616 1.42823 1.2 1.49996 1.2ZM1.49996 9.53333H15.6666C15.7384 9.53333 15.8 9.59493 15.8 9.66667V14.6667C15.8 14.7384 15.7384 14.8 15.6666 14.8H1.49996C1.42823 14.8 1.36663 14.7384 1.36663 14.6667V9.66667C1.36663 9.59493 1.42823 9.53333 1.49996 9.53333Z"
                          stroke="#C2CFE0" stroke-width="1.4"/>
                </svg>
                <div className="mnu-item__name">Tasks</div>
            </div>
        </a>
    );
}

export default TaskItem;