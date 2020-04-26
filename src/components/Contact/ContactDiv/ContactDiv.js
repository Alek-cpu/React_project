import React from "react";
import HeaderInfoLine from "../HeaderInfoLine/HeaderInfoLine";
import InfoLine from "../InfoLine/InfoLine";
import './ContactDiv.css';

const ContactDiv = () => {
    return (
        <table className="contact-list">
            <HeaderInfoLine />
            <InfoLine
                id={'infoline1'}
                userName={"Judith Williams"}
                email={"judith.williams@gmail.com"}
                companyName={"Google"}
                role={"Designer"}
                forecast={"45 %"}
                date={"Nov 26, 2018"}
            />
            <InfoLine
                id={'infoline2'}
                userName={"Lindsey Stroud"}
                email={"lindsey.stroud@gmail.com"}
                companyName={"Hatchbuck"}
                role={"Manager"}
                forecast={"50 %"}
                date={"5 Minutes ago"}
            />
            <InfoLine
                id={'infoline3'}
                userName={"Nicci Troiani"}
                email={"nicci.troiani@gmail.com"}
                companyName={"Slack"}
                role={"Manager"}
                forecast={"75 %"}
                date={"14 Minutes ago"}
            />
            <InfoLine
                id={'infoline4'}
                userName={"George Fields"}
                email={"george.fields@gmail.com"}
                companyName={"Clockify"}
                role={"CEO"}
                forecast={"10 %"}
                date={"6 Hours ago"}
            />
            <InfoLine
                id={'infoline5'}
                userName={"Rebecca Moore"}
                email={"rebecca.moore@gmail.com"}
                companyName={"Upwork"}
                role={"Manager"}
                forecast={"25 %"}
                date={"Dec 14, 2018"}
            />
            <InfoLine
                id={'infoline6'}
                userName={"Jane Doe"}
                email={"jane.doe@gmail.com"}
                companyName={"Trello"}
                role={"Engineer"}
                forecast={"30 %"}
                date={"Dec 12, 2018"}
            />
            <InfoLine
                id={'infoline7'}
                userName={"Jones Dermot"}
                email={"dermot.jones@gmail.com"}
                companyName={"Slack"}
                role={"Developer"}
                forecast={"40 %"}
                date={"Dec 11, 2018"}
            />
            <InfoLine
                id={'infoline8'}
                userName={"Martin Merces"}
                email={"martin.merces@gmail.com"}
                companyName={"Google"}
                role={"Manager"}
                forecast={"60 %"}
                date={"Dec 9, 2018"}
            />
            <InfoLine
                id={'infoline9'}
                userName={"Franz Ferdinand"}
                email={"franz.ferdiand@gmail.com"}
                companyName={"Facebook"}
                role={"Manager"}
                forecast={"100 %"}
                date={"Dec 6, 2018"}
            />
            <InfoLine
                id={'infoline10'}
                userName={"John Smith"}
                email={"john.smith@gmail.com"}
                companyName={"Skype"}
                role={"CEO"}
                forecast={"75 %"}
                date={"Nov 30, 2018"}
            />
        </table>
    );
}

export default ContactDiv;