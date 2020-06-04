import React, {Component, Fragment} from 'react';
import {bindActionCreators} from 'redux';

const ContactAdd = (props) => {
    let {click} = props;
    return (
        <button className="addContact" onClick={click}>
            Add contact
        </button>
    );
}

export default ContactAdd;

