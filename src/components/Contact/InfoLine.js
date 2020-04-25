import React from "react";

const InfoLine = (props) => {
    return (
        <tr className="info-line">
            <td>
                <form className="row-space-cbx">
                    <input type="checkbox" className="form__cbx chield" id={props.id}/><label
                    htmlFor={props.id}></label>
                </form>
            </td>
            <td className="profile__name">
                <div className="list-padding: 0px 24px 0px 24px;header-photo"><img
                    className="mini__photo" src="../../assets/image%203.png" alt=""/></div>
                <div className="list-header__name">{props.userName}</div>
            </td>
            <td>{props.email}</td>
            <td>{props.companyName}</td>
            <td>{props.role}</td>
            <td>{props.forecast}</td>
            <td className="last__td">{props.date}</td>
        </tr>
    );
}

export default InfoLine;