import React from "react";
import '../../../styles/Item.scss';

const ContactItem = () => {
    return (
        <div className="mnu-item">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none"
                 xmlns="http://www.w3.org/2000/svg">
                <path className="mnu-item__svg"
                      d="M4.81118 4.11106C4.81118 2.34905 6.23806 0.922168 8.00007 0.922168C9.76208 0.922168 11.189 2.34904 11.189 4.11106C11.189 5.87307 9.76208 7.29995 8.00007 7.29995C6.23806 7.29995 4.81118 5.87307 4.81118 4.11106ZM0.92229 12.8611C0.92229 12.4716 1.11181 12.0787 1.54729 11.6768C1.98752 11.2705 2.63079 10.904 3.39805 10.5966C4.9337 9.98144 6.78966 9.67217 8.00007 9.67217C9.21048 9.67217 11.0664 9.98144 12.6021 10.5966C13.3693 10.904 14.0126 11.2705 14.4528 11.6768C14.8883 12.0787 15.0778 12.4716 15.0778 12.8611V15.0777H0.92229V12.8611Z"
                      stroke="#C2CFE0" stroke-width="1.4"/>
            </svg>
            <div className="mnu-item__name">Contacts</div>
        </div>
    );
}

export default ContactItem;