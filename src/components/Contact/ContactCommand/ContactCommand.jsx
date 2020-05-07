import React, {Component} from 'react';
import '../../../styles/ContactCommand.scss';
import {render} from 'react-dom';
import ContactSort from "../../forms/ContactSort/ContactSort";
import ContactAdd from "../../forms/ContactAdd/ContactAdd";

class ContactCommand extends Component{
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="contact-command">
                <ContactSort />
                <ContactAdd onClick={this.props.onClick} />
            </div>
        );
    }
}

export default ContactCommand;