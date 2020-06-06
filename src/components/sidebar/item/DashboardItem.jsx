import React from 'react';

import dashbordVector from '../../../img/dashboard-vector.svg';

export default function DashboardItem() {
    return (
        <div className="mnuItem">
            <img src={dashbordVector} alt="dashbordVector" />
            <div className="mnuItemName">Dashboard</div>
        </div>
    );
}