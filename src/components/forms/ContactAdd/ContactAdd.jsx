import React, {Component, Fragment} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import '../../../styles/ContactAdd.scss';

class ContactAdd extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <button onClick={this.props.onClick} className="add__contact">
                    Add contact
                </button>
            </Fragment>
        );
    }
}

export default ContactAdd;