import React, {Component} from 'react';
import ContactCommand from "../../components/contact/contact-command/ContactCommand";
import ContactSort from "../../components/forms/contact-sort/ContactSort";
import CbxHeaderInfoLine from "../../components/forms/cbxheader-infoline/CbxHeaderInfoLine";
import {bindActionCreators} from "redux";
import {addContact} from "../../action";
import {connect} from "react-redux";
import userAvatar from "../../img/image 2 (1).png";

class Contact extends Component {
    showItem() {
        return this.props.infLine.map((inf) => {
            return (
                <tr className="info-line">
                    <td>
                        <form className="row-space-cbx">
                            <input type="checkbox"
                                   className="form__cbx chield" id={inf.id}/><label
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
            <div className="contact">
                <div className="contact-command">
                    <div className="contact-sort">
                        Company:
                        <form>
                            <select className="contact-sort__list" size="1">
                                <option>All</option>
                                <option>NeAll</option>
                                <option>NeAll</option>
                                <option>NeAll</option>
                                <option>NeAll</option>
                            </select>
                        </form>
                    </div>
                    <button onClick={() => this.props.addContact()} className="add__contact">
                        Add contact
                    </button>
                </div>
                <div className="contact-inner">
                    <div className="wrapperTable">
                        <table className="contact-list">
                            <tr className="header-line">
                                <th className="row-space">
                                    <CbxHeaderInfoLine />
                                </th>
                                <th className="row-1 header-text hideElement">
                                    <div className="list-header__name">Name</div>
                                </th>
                                <th className="row-1 header-text hideElement">
                                    <div className="list-header__email">Email</div>
                                </th>
                                <th className="row-1 header-text hideElement">
                                    <div className="list-header__compname">Company name</div>
                                </th>
                                <th className="row-1 header-text hideElement">
                                    <div className="list-header__role">Role</div>
                                </th>
                                <th className="row-1 header-text hideElement">
                                    <div className="list-header__forecast">Forecast</div>
                                </th>
                                <th className="header-text last__td hideElement">Recent activity</th>
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

