import React from 'react';

import settingVector from '../../../img/setting-vector.svg';

export default function SettingItem() {
    return (
        <div className="settingWrap setItem">
            <div className="setting mnuItem">
                <img src={settingVector} alt="settingVector" />
                <div className="mnuItemName">Settings</div>
            </div>
        </div>
    );
}