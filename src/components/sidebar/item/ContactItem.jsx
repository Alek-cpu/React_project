import React from 'react';

import contactVector from '../../../img/contact-vector.svg';

export default function ContactItem() {
    return (
        <div className="mnuItem">
            <img src={contactVector} alt="contactVector" />
            <div className="mnuItemName">Contacts</div>
        </div>
    );
}