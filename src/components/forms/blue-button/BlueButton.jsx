import React, {Component, Fragment} from 'react';
import {bindActionCreators} from 'redux';

const BlueButton = (props) => {
    let {click} = props;
    return (
        <button className="addContact" onClick={click}>
            Add contact
        </button>
    );
}

export default BlueButton;

