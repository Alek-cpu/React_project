import React from "react";

const Contact = () => {
    return (
        <div className="contact">
            <ContactCommand />
            <ContactList />
        </div>
    );
}

const ContactCommand = () => {
    return (
            <div className="contact-command">
                <ContactSort />
                <ContactAdd />
            </div>
    );
}

const ContactSort = () => {
    return (
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
    );
}

const ContactAdd = () => {
    return (
        <button className="add__contact">
            Add contact
        </button>
    );
}

const ContactList = () => {
    return (
        <div className="contact-inner">
            <div className="wrapperTable">
                <ContactDiv />
            </div>
        </div>
    );
}

const ContactDiv = () => {
    return (
        <table className="contact-list">
            <tr className="header-line">
                <th className="row-space">
                    <form className="row-space-cbx">
                        <input type="checkbox" className="form__cbx countTask" id="checkbox" /><label
                        htmlFor="checkbox"></label>
                    </form>
                </th>
                <!--                                    SUDA-->
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
            <!--                                1-->
            <tr className="info-line">
                <td>
                    <form className="row-space-cbx">
                        <input type="checkbox" className="form__cbx chield" id="checkbox1" /><label
                        htmlFor="checkbox1"></label>
                    </form>
                </td>
                <td className="profile__name">
                    <div className="list-padding: 0px 24px 0px 24px;header-photo"><img
                        className="mini__photo" src="./assets/image%203.png" alt="" /></div>
                    <div className="list-header__name">Lindsey Stroud</div>
                </td>
                <td>lindsey.stroud@gmail.com</td>
                <td>Hatchbuck</td>
                <td>Manager</td>
                <td>50 %</td>
                <td className="last__td">5 Minutes ago</td>
            </tr>
            <!--                                2-->
            <tr className="info-line">
                <td>
                    <form className="row-space-cbx">
                        <input type="checkbox" className="form__cbx chield" id="checkbox2" /><label
                        htmlFor="checkbox2"></label>
                    </form>
                </td>
                <td className="profile__name">
                    <div className="list-padding: 0px 24px 0px 24px;header-photo"><img
                        className="mini__photo" src="./assets/image%203.png" alt="" /></div>
                    <div className="list-header__name">Nicci Troiani</div>
                </td>
                <td>nicci.troiani@gmail.com</td>
                <td>Slack</td>
                <td>Manager</td>
                <td>75 %</td>
                <td className="last__td">14 Minutes ago</td>
            </tr>
            <!--                                3-->
            <tr className="info-line">
                <td>
                    <form className="row-space-cbx">
                        <input type="checkbox" className="form__cbx chield" id="checkbox3"/><label
                        htmlFor="checkbox3"></label>
                    </form>
                </td>
                <td className="profile__name">
                    <div className="list-padding: 0px 24px 0px 24px;header-photo"><img
                        className="mini__photo" src="./assets/image%203.png" alt=""/></div>
                    <div className="list-header__name">George Fields</div>
                </td>
                <td>george.fields@gmail.com</td>
                <td>Clockify</td>
                <td>CEO</td>
                <td>10 %</td>
                <td className="last__td">6 Hours ago</td>
            </tr>
            <!--                                4-->
            <tr className="info-line">
                <td>
                    <form className="row-space-cbx">
                        <input type="checkbox" className="form__cbx chield" id="checkbox4"/><label
                        htmlFor="checkbox4"></label>
                    </form>
                </td>
                <td className="profile__name">
                    <div className="list-padding: 0px 24px 0px 24px;header-photo"><img
                        className="mini__photo" src="./assets/image%203.png" alt=""/></div>
                    <div className="list-header__name">Rebecca Moore</div>
                </td>
                <td>rebecca.moore@gmail.com</td>
                <td>Upwork</td>
                <td>Manager</td>
                <td>25 %</td>
                <td className="last__td">Dec 14, 2018</td>
            </tr>
            <!--                                5-->
            <tr className="info-line">
                <td>
                    <form className="row-space-cbx">
                        <input type="checkbox" className="form__cbx chield" id="checkbox5"/><label
                        htmlFor="checkbox5"></label>
                    </form>
                </td>
                <td className="profile__name">
                    <div className="list-padding: 0px 24px 0px 24px;header-photo"><img
                        className="mini__photo" src="./assets/image%203.png" alt=""/></div>
                    <div className="list-header__name">Jane Doe</div>
                </td>
                <td>jane.doe@gmail.com</td>
                <td>Trello</td>
                <td>Engineer</td>
                <td>30 %</td>
                <td className="last__td">Dec 12, 2018</td>
            </tr>
            <!--                                6-->
            <tr className="info-line">
                <td>
                    <form className="row-space-cbx">
                        <input type="checkbox" className="form__cbx chield" id="checkbox6"/><label
                        htmlFor="checkbox6"></label>
                    </form>
                </td>
                <td className="profile__name">
                    <div className="list-padding: 0px 24px 0px 24px;header-photo"><img
                        className="mini__photo" src="./assets/image%203.png" alt=""/></div>
                    <div className="list-header__name">Jones Dermot</div>
                </td>
                <td>dermot.jones@gmail.com</td>
                <td>Slack</td>
                <td>Developer</td>
                <td>40 %</td>
                <td className="last__td">Dec 11, 2018</td>
            </tr>
            <!--                                7-->
            <tr className="info-line">
                <td>
                    <form className="row-space-cbx">
                        <input type="checkbox" className="form__cbx chield" id="checkbox7"/><label
                        htmlFor="checkbox7"></label>
                    </form>
                </td>
                <td className="profile__name">
                    <div className="list-padding: 0px 24px 0px 24px;header-photo"><img
                        className="mini__photo" src="./assets/image%203.png" alt=""/></div>
                    <div className="list-header__name">Martin Merces</div>
                </td>
                <td>martin.merces@gmail.com</td>
                <td>Google</td>
                <td>Manager</td>
                <td>60 %</td>
                <td className="last__td">Dec 9, 2018</td>
            </tr>
            <!--                                8-->
            <tr className="info-line">
                <td>
                    <form className="row-space-cbx">
                        <input type="checkbox" className="form__cbx chield" id="checkbox8"/><label
                        htmlFor="checkbox8"></label>
                    </form>
                </td>
                <td className="profile__name">
                    <div className="list-padding: 0px 24px 0px 24px;header-photo"><img
                        className="mini__photo" src="./assets/image%203.png" alt=""/></div>
                    <div className="list-header__name">Franz Ferdinand</div>
                </td>
                <td>franz.ferdiand@gmail.com</td>
                <td>Facebook</td>
                <td>Manager</td>
                <td>100 %</td>
                <td className="last__td">Dec 6, 2018</td>
            </tr>
            <!--                                9-->
            <tr className="info-line">
                <td>
                    <form className="row-space-cbx">
                        <input type="checkbox" className="form__cbx chield" id="checkbox9"/><label
                        htmlFor="checkbox9"></label>
                    </form>
                </td>
                <td className="profile__name">
                    <div className="list-header-photo"><img className="mini__photo"
                                                            src="./assets/image%203.png" alt=""/></div>
                    <div className="list-header__name">John Smith</div>
                </td>
                <td>john.smith@gmail.com</td>
                <td>Skype</td>
                <td>CEO</td>
                <td>75 %</td>
                <td className="last__td">Nov 30, 2018</td>
            </tr>
            <!--                                10-->
            <tr className="info-line">
                <td>
                    <form className="row-space-cbx">
                        <input type="checkbox" className="form__cbx chield" id="checkbox10"/><label
                        htmlFor="checkbox10"></label>
                    </form>
                </td>
                <td className="profile__name">
                    <div className="list-padding: 0px 24px 0px 24px;header-photo"><img
                        className="mini__photo" src="./assets/image%203.png" alt=""/></div>
                    <div className="list-header__name">Judith Williams</div>
                </td>
                <td>judith.williams@gmail.com</td>
                <td>Google</td>
                <td>Designer</td>
                <td>45 %</td>
                <td className="last__td">Nov 26, 2018</td>
            </tr>
        </table>
    );
}

