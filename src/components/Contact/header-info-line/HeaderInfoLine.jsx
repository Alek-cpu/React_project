import React from "react";
import './HeaderInfoLine.css';

const HeaderInfoLine = (props) => {
    return (
        <tr className="header-line">
            <th className="row-space">
                <form className="row-space-cbx">
                    <input type="checkbox" className="form__cbx countTask" id="checkbox" onChange={props.onChange} /><label
                    htmlFor="checkbox"></label>
                </form>
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
    );
}

export default HeaderInfoLine;