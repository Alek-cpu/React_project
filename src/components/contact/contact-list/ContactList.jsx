import React, {Component} from 'react';
import ContactDiv from "../contact-div/ContactDiv";

class ContactList extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="contact-inner">
                <div className="wrapperTable">
                    <ContactDiv />
                </div>
            </div>
        );
    }
}

export default ContactList;