import React, {Component} from 'react';
import ContactSort from '../../forms/contact-sort/ContactSort';
import ContactAdd from '../../forms/contact-add/ContactAdd';
import {render} from 'react-dom';

export default class ContactCommand extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        let {onClick} = this.props;
        return (
            <div className="contactCommand">
                <ContactSort/>
                <ContactAdd onClick={onClick}/>
            </div>
        );
    }
}