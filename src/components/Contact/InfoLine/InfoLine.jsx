import React from "react";
import './InfoLine.css';
import userAvatar from './../../../assets/image 2 (1).png';
import CheckboxInfoLine from "../../forms/CheckboxInfoLine/CheckboxInfoLine";

const InfoLine = (props) => {
    const link = React.createRef();

    return (
        <tr className="info-line">
            <td>
                <CheckboxInfoLine
                    onChange={props.onChange}
                    id={props.id}
                />
            </td>
            <td className="profile__name">
                <div className="list-header-photo">
                    <img className="mini__photo" src={userAvatar} alt=""/></div>
                <div className="list-header__name">{props.userName}</div>
            </td>
            <td>{props.email}</td>
            <td>{props.companyName}</td>
            <td>{props.role}</td>
            <td>{props.forecast}</td>
            <td className="last__td" >{props.date}</td>
        </tr>
    );
}

export default InfoLine;