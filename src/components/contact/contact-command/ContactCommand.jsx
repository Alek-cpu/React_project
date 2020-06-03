import React, {Component} from 'react';
import {render} from 'react-dom';
import ContactSort from "../../forms/contact-sort/ContactSort";
import ContactAdd from "../../forms/contact-add/ContactAdd";

class ContactCommand extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="contactCommand">
                <ContactSort />
                <ContactAdd onClick={this.props.onClick} />
            </div>
        );
    }
}

export default ContactCommand;