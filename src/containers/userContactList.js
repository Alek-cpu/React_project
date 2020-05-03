import React, {Component} from 'react';
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import CheckboxInfoLine from "../components/forms/CheckboxInfoLine/CheckboxInfoLine";
import userAvatar from "../assets/image 2 (1).png";
import toDo from "../action/toDo";
import "./../components/Contact/InfoLine/InfoLine.css";
import "./../components/forms/CheckboxInfoLine/CheckboxInfoLine.css";

class ContactList extends Component {

    showItem() {
        return this.props.infLine.map((inf) => {
            return (
                <tr className="info-line" id={inf.id}>
                    <td id={inf.id}>
                        <form className="row-space-cbx">
                            <input type="checkbox" className="form__cbx chield" id={inf.id}/><label
                            htmlFor={inf.id}></label>
                        </form>
                    </td>
                    <td className="profile__name" id={inf.id}>
                        <div className="list-header-photo">
                            <img className="mini__photo" src={userAvatar} alt=""/></div>
                        <div className="list-header__name">{inf.userName}</div>
                    </td>
                    <td>{inf.email}</td>
                    <td>{inf.companyName}</td>
                    <td>{inf.role}</td>
                    <td>{inf.forecast}</td>
                    <td className="last__td">{inf.date}</td>
                </tr>
            );
        });
    }

    render() {
        return (
            this.showItem()
        );
    }
}

function mapStateToProps(state) {
    return {
        infLine: state.infLine
    }
}

export default connect(mapStateToProps)(ContactList);