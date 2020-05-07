import React from 'react';
import '../../../styles/ContactSortList.scss';

const ContactSortList = () => {
    return (
        <form>
            <select className="contact-sort__list" size="1">
                <option>This month</option>
                <option>This week</option>
                <option>NeAll</option>
                <option>NeAll</option>
                <option>NeAll</option>
            </select>
        </form>
    );
}

export default ContactSortList;