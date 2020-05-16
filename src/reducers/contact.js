import {ADD_NEW_CONTACT} from "../constants/constants";
import userAvatar from "../img/image 2 (1).png";

const contacts = [
    {
        id: `infoline1`,
        userAvatar: {userAvatar},
        userName: "Judith Williams",
        email: "judith.williams@gmail.com",
        companyName: "Google",
        role: "Designer",
        forecast: "45 %",
        date: "Nov 26, 2018",
    },
    {
        id: `infoline2`,
        userName: "Lindsey Stroud",
        email: "lindsey.stroud@gmail.com",
        companyName: "Hatchbuck",
        role: "Manager",
        forecast: "50 %",
        date: "5 Minutes ago",
    },
    {
        id: `infoline3`,
        userName: "Nicci Troiani",
        email: "nicci.troiani@gmail.com",
        companyName: "Slack",
        role: "Manager",
        forecast: "75 %",
        date: "14 Minutes ago",
    },
    {
        id: `infoline4`,
        userName: "George Fields",
        email: "george.fields@gmail.com",
        companyName: "Clockify",
        role: "CEO",
        forecast: "10 %",
        date: "6 Hours ago",
    },
    {
        id: `infoline5`,
        userName: "Rebecca Moore",
        email: "rebecca.moore@gmail.com",
        companyName: "Upwork",
        role: "Manager",
        forecast: "25 %",
        date: "Dec 14, 2018",
    },
    {
        id: `infoline6`,
        userName: "Jane Doe",
        email: "jane.doe@gmail.com",
        companyName: "Trello",
        role: "Engineer",
        forecast: "30 %",
        date: "Dec 12, 2018",
    },
    {
        id: `infoline7`,
        userName: "Jones Dermot",
        email: "dermot.jones@gmail.com",
        companyName: "Slack",
        role: "Developer",
        forecast: "40 %",
        date: "Dec 11, 2018",
    },
    {
        id: `infoline8`,
        userName: "Martin Merces",
        email: "martin.merces@gmail.com",
        companyName: "Google",
        role: "Manager",
        forecast: "60 %",
        date: "Dec 9, 2018",
    },
    {
        id: `infoline9`,
        userName: "Franz Ferdinand",
        email: "franz.ferdiand@gmail.com",
        companyName: "Facebook",
        role: "Manager",
        forecast: "100 %",
        date: "Dec 6, 2018",
    },
    {
        id: `infoline10`,
        userName: "John Smith",
        email: "john.smith@gmail.com",
        companyName: "Skype",
        role: "CEO",
        forecast: "75 %",
        date: "Nov 30, 2018",
    }
]

export default function (state = contacts, action) {
    switch (action.type) {
        case ADD_NEW_CONTACT:
            return state.concat({
                id: Date.now(),
                userName: 'Vasya Vasserman',
                email: "vasya.vasserman@gmail.com",
                companyName: "SiGame",
                role: "Hight Player",
                forecast: "100%",
                date: "May 15, 2020"
            });
        default:
            return state;
    }
}