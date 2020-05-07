import React, {Component} from 'react';
import {connect} from 'react-redux';
import userAvatar from "../img/image 2 (1).png";

class Details extends Component {
    render() {
        return (
              <tr className="info-line">
                  <td>
                      <form className="row-space-cbx">
                          <input type="checkbox" className="form__cbx chield" id={this.props.inf.id} /><label
                          htmlFor={this.props.inf.id}></label>
                      </form>
                  </td>
                  <td className="profile__name" id={this.props.inf.id}>
                      <div className="list-header-photo">
                          <img className="mini__photo" src={userAvatar} alt=""/></div>
                          <div className="list-header__name">{this.props.inf.userName}</div>
                  </td>
                  <td>{this.props.inf.email}</td>
                  <td>{this.props.inf.companyName}</td>
                  <td>{this.props.inf.role}</td>
                  <td>{this.props.inf.forecast}</td>
                  <td className="last__td">{this.props.inf.date}</td>
              </tr>
        );
    }
}

function mapStateToProps (state) {
    return {
        inf: state.add
    };
}

export default connect (mapStateToProps)(Details);