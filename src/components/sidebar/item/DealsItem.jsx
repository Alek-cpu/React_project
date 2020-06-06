import React from 'react';

import dealVector from '../../../img/deal-vector.svg';

export default function DealsItem() {
    return (
        <a href="#">
            <div className="mnuItem">
                <img src={dealVector} alt="dealVector" />
                <div className="mnuItemName">Deals</div>
            </div>
        </a>
    );
}