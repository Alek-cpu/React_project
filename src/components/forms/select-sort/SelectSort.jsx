import React from 'react';
import {func} from 'prop-types';

export default function SelectSort(props) {

    return (
        <select className="contactSortList" size="1">
            {<option key={props.key}>{props.option}</option>}
        </select>
    );
}