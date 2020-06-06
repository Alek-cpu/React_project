import React from 'react';

import emailVector from '../../../img/email-vector.svg';

export default function EmailItem() {
    return (
        <a href="#">
            <div className="mnuItem">
                <img src={emailVector} alt="emailVector" />
                <div className="mnuItemName">Email</div>
            </div>
        </a>
    );
}