import React from 'react';
import {func} from 'prop-types';

export default function SelectBox(
    {
        items,
    }
) {
    return (
        <select className="contactSortList" size="1">
            {!!items && items.map((value, index) => (
                <option key={index}>{value.name}</option>
            ))}
        </select>
    );
}