import React from 'react';
import '../../../styles/SettingItem.scss';

const SettingItem = () => {
    return (
        <div className="setting-wrap setItem">
            <div className="setting mnu-item">
                <svg width="14" height="4" viewBox="0 0 14 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path className="fil__svg"
                          d="M2.00004 0.333252C1.08337 0.333252 0.333374 1.08325 0.333374 1.99992C0.333374 2.91658 1.08337 3.66658 2.00004 3.66658C2.91671 3.66658 3.66671 2.91658 3.66671 1.99992C3.66671 1.08325 2.91671 0.333252 2.00004 0.333252ZM12 0.333252C11.0834 0.333252 10.3334 1.08325 10.3334 1.99992C10.3334 2.91658 11.0834 3.66658 12 3.66658C12.9167 3.66658 13.6667 2.91658 13.6667 1.99992C13.6667 1.08325 12.9167 0.333252 12 0.333252ZM7.00004 0.333252C6.08337 0.333252 5.33337 1.08325 5.33337 1.99992C5.33337 2.91658 6.08337 3.66658 7.00004 3.66658C7.91671 3.66658 8.66671 2.91658 8.66671 1.99992C8.66671 1.08325 7.91671 0.333252 7.00004 0.333252Z"
                          fill="#C2CFE0"/>
                </svg>
                <div className="mnu-item__name">Settings</div>
            </div>
        </div>
    );
}

export default SettingItem;