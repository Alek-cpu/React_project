import React, {Component} from 'react';
import ContactCommand from "../../components/contact/contact-command/ContactCommand";
import CbxHeaderInfoLine from "../../components/forms/cbxheader-infoline/CbxHeaderInfoLine";
import {bindActionCreators} from "redux";
import {addContact} from "../../action";
import {connect} from "react-redux";
import userAvatar from "../../img/image 2 (1).png";
import ContactSort from "../../components/forms/contact-sort/ContactSort";

class Contact extends Component {
    showItem() {
        return this.props.infLine.map((inf) => {
            return (
                <tr className="infoLine">
                    <td>
                        <form className="row-space-cbx">
                            <input type="checkbox"
                                   className="formCbx chield" id={inf.id}/><label
                            htmlFor={inf.id}></label>
                        </form>
                    </td>
                    <td className="profileName" id={inf.id}>
                        <div className="listHeaderPhoto">
                            <img className="miniPhoto" src={userAvatar} alt=""/></div>
                        <div className="listHeaderName">{inf.userName}</div>
                    </td>
                    <td>{inf.email}</td>
                    <td>{inf.companyName}</td>
                    <td>{inf.role}</td>
                    <td>{inf.forecast}</td>
                    <td className="lastTd">{inf.date}</td>
                </tr>
            );
        });
    }

    render() {
        return (
            <div className="contact">
                <div className="contactCommand">
                    <ContactSort />
                    <button onClick={() => this.props.addContact()} className="addContact">
                        Add contact
                    </button>
                </div>
                {/*Maps*/}
                <div className="contactInner">
                    <div className="wrapperTable">
                        <table className="contactList">
                            <tr className="headerLine">
                                <th className="rowSpace">
                                    <CbxHeaderInfoLine />
                                </th>
                                <th className="row1 headerText hideElement">
                                    <div className="listHeaderName">Name</div>
                                </th>
                                <th className="row1 headerText hideElement">
                                    <div className="listHeaderEmail">Email</div>
                                </th>
                                <th className="row1 headerText hideElement">
                                    <div className="listHeaderCompname">Company name</div>
                                </th>
                                <th className="row1 headerText hideElement">
                                    <div className="listHeaderRole">Role</div>
                                </th>
                                <th className="row1 headerText hideElement">
                                    <div className="listHeaderForecast">Forecast</div>
                                </th>
                                <th className="headerText lastTd hideElement">Recent activity</th>
                            </tr>
                            {this.showItem()}
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {
        infLine: state.infLine
    }
}

function matchDispatchToProps(dispatch) {
    return bindActionCreators({addContact: addContact}, dispatch)
}

export default connect(mapStateToProps, matchDispatchToProps)(Contact);

