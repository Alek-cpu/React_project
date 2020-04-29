import React from "react";
import './ToggleSidebar.css';

const ToggleSidebar = () => {
    return (
        <div className="toggle-wrap setItem">
            <div className="toggle mnu-item">
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="fil__svg" fill-rule="evenodd" clip-rule="evenodd"
                          d="M2 0C0.895431 0 0 0.89543 0 2V12C0 13.1046 0.89543 14 2 14H12C13.1046 14 14 13.1046 14 12V2C14 0.895431 13.1046 0 12 0H2ZM5 2C4.44772 2 4 2.44772 4 3V11C4 11.5523 4.44772 12 5 12C5.55228 12 6 11.5523 6 11V3C6 2.44772 5.55228 2 5 2Z"
                          fill="#C2CFE0"/>
                </svg>
                <div className="mnu-item__name">Toggle sidebar</div>
            </div>
        </div>
    );
}

export default ToggleSidebar;
