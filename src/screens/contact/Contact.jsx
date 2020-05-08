import React, {Component} from 'react';
import ContactCommand from "../../components/contact/contact-command/ContactCommand";
import ContactSort from "../../components/forms/contact-sort/ContactSort";
import ContactAdd from "../../components/forms/contact-add/ContactAdd";
import ContactList from "../../components/contact/contact-list/ContactList";
import ContactDiv from "../../components/contact/contact-div/ContactDiv";
import HeaderInfoLine from "../../components/contact/header-info-line/HeaderInfoLine";
import '../../styles/_contact.scss';

class Contact extends Component{
    state = {
        id: '',
        username: '',
        email: '',
        companyName: '',
        role: '',
        forecast: '',
        date: ''
    }

    handleClick = () => {
        this.setState(({id, userName, email, companyName, role, forecast, date}) => ({
            id: `${userName}-${1}`,
            username: +prompt(`enter your userName`),
            email: +prompt(`enter your email`),
            companyName: +prompt(`enter your companyName`),
            role: +prompt(`enter your role`),
            forecast: +prompt(`enter your forecast`),
            date: +prompt(`enter your date`),
        }))
    }
    render() {
        const { userName, email, companyName, role, forecast, date} = this.state;
        return(
            <div className="contact">
                <ContactCommand onClick={this.handleClick} />
                <ContactList />
            </div>
        );
    }
}

export default Contact;

