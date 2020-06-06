import React, {Component} from 'react';

import toggleVector from '../../../img/toggle-vector.svg';

const ToggleSidebar = (click) => {

    return (
        <div className="toggleWrap setItem" onClick={click}>
            <div className="toggle mnuItem">
                <img src={toggleVector} alt="toggleVector" />
                <div className="mnuItemName">Toggle sidebar</div>
            </div>
        </div>
    );
}

export default ToggleSidebar;
