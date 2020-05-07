import React, {Component} from 'react';
import ContactCommand from "../../components/Contact/ContactCommand/ContactCommand";
import ContactSort from "../../components/forms/ContactSort/ContactSort";
import ContactAdd from "../../components/forms/ContactAdd/ContactAdd";
import ContactList from "../../components/Contact/ContactList/ContactList";
import ContactDiv from "../../components/Contact/ContactDiv/ContactDiv";
import HeaderInfoLine from "../../components/Contact/HeaderInfoLine/HeaderInfoLine";
import '../../styles/Contact.scss';

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

