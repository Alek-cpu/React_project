import React from 'react';
import {func} from 'prop-types';

export default function ContactSort() {
    return (
        <div className="contactSort">
            Company:
            <form>
                <select className="contactSortList" size="1">
                    <option>All</option>
                    <option>NeAll</option>
                    <option>NeAll</option>
                    <option>NeAll</option>
                    <option>NeAll</option>
                </select>
            </form>
        </div>
    );
}