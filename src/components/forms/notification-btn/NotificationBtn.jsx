import React from 'react';

import notificationVector from '../../../img/notification.svg';

export default function NotificationBtn() {
    return (
        <div className="notification">
            <div className="notificationPoint">
                <img className="notificationPoint mnuItemSvg" src={notificationVector} alt="notification" />
            </div>
        </div>
    );
}