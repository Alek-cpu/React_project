import React, {Component} from 'react';
import ContactCommand from "../../components/contact/contact-command/ContactCommand";
import ContactSort from "../../components/forms/contact-sort/ContactSort";
import '../../styles/_contact.scss';
import CbxHeaderInfoLine from "../../components/forms/cbxheader-infoline/CbxHeaderInfoLine";
import {bindActionCreators} from "redux";
import {addContact} from "../../action";
import {connect} from "react-redux";
import userAvatar from "../../img/image 2 (1).png";

class Contact extends Component{
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
        return(
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
                    <button onClick={ () => this.props.addContact() } className="add__contact">
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
                                <th className="nohide hide">
                                    <div className="wrapperSpan">
                                        <span className="selectedInfo">Selected</span>
                                        <span className="deleteted-box">
                                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                                                     xmlns="http://www.w3.org/2000/svg">
                                                    <path className="deletCbx"
                                                          d="M3.99998 12.6667C3.99998 13.4 4.59998 14 5.33331 14H10.6666C11.4 14 12 13.4 12 12.6667V4.66667H3.99998V12.6667ZM12.6666 2.66667H10.3333L9.66665 2H6.33331L5.66665 2.66667H3.33331V4H12.6666V2.66667Z"
                                                          fill="#C2CFE0"/>
                                                </svg>
                                            </span>
                                    </div>
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

