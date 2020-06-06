import React, {Component} from 'react';
import {render} from 'react-dom';

import ContactSort from '../../forms/contact-sort/ContactSort';
import BlueButton from '../../forms/blue-button/BlueButton';

export default class ContactCommand extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {onClick} = this.props;
        return (
            <div className="contactCommand">
                <ContactSort/>
                <BlueButton onClick={onClick}/>
            </div>
        );
    }
}