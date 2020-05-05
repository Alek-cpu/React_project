import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import '../../../styles/ContactAdd.scss';


const ContactAdd = () => {
    return (
        <button onClick={() => {let a = prompt(`add`)}} className="add__contact">
            Add contact
        </button>
    );
}

export default ContactAdd;