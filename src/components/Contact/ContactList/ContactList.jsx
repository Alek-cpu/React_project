import React, {Component} from "react";
import ContactDiv from "../ContactDiv/ContactDiv";
import './ContactList.css';
import InfoLine from "../InfoLine/InfoLine";


let usersInfo = [
    {
        id: 'infoline1',
        userName: "Judith Williams",
        email: "judith.williams@gmail.com",
        companyName: "Google",
        role: "Designer",
        forecast: "45 %",
        date: "Nov 26, 2018",
    },
    {
        id: 'infoline2',
        userName: "Lindsey Stroud",
        email: "lindsey.stroud@gmail.com",
        companyName: "Hatchbuck",
        role: "Manager",
        forecast: "50 %",
        date: "5 Minutes ago",
    },
    {
        id: 'infoline3',
        userName: "Nicci Troiani",
        email: "nicci.troiani@gmail.com",
        companyName: "Slack",
        role: "Manager",
        forecast: "75 %",
        date: "14 Minutes ago",
    },
    {
        id: 'infoline4',
        userName: "George Fields",
        email: "george.fields@gmail.com",
        companyName: "Clockify",
        role: "CEO",
        forecast: "10 %",
        date: "6 Hours ago",
    },
    {
        id: 'infoline5',
        userName: "Rebecca Moore",
        email: "rebecca.moore@gmail.com",
        companyName: "Upwork",
        role: "Manager",
        forecast: "25 %",
        date: "Dec 14, 2018",
    },
    {
        id: 'infoline6',
        userName: "Jane Doe",
        email: "jane.doe@gmail.com",
        companyName: "Trello",
        role: "Engineer",
        forecast: "30 %",
        date: "Dec 12, 2018",
    },
    {
        id: 'infoline7',
        userName: "Jones Dermot",
        email: "dermot.jones@gmail.com",
        companyName: "Slack",
        role: "Developer",
        forecast: "40 %",
        date: "Dec 11, 2018",
    },
    {
        id: 'infoline8',
        userName: "Martin Merces",
        email: "martin.merces@gmail.com",
        companyName: "Google",
        role: "Manager",
        forecast: "60 %",
        date: "Dec 9, 2018",
    },
    {
        id: 'infoline9',
        userName: "Franz Ferdinand",
        email: "franz.ferdiand@gmail.com",
        companyName: "Facebook",
        role: "Manager",
        forecast: "100 %",
        date: "Dec 6, 2018",
    },
    {
        id: 'infoline10',
        userName: "John Smith",
        email: "john.smith@gmail.com",
        companyName: "Skype",
        role: "CEO",
        forecast: "75 %",
        date: "Nov 30, 2018",
    }
];



const ContactList = () =>{
    return (
        <div className="contact-inner">
            <div className="wrapperTable">
                <ContactDiv
                    usersInfo={usersInfo}
                />
            </div>
        </div>
    );
}

export default ContactList;