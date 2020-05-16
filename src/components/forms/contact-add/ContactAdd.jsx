import React, {Component, Fragment} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

class ContactAdd extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <button className="add__contact">
                    Add contact
                </button>
            </Fragment>
        );
    }
}

export default ContactAdd;

