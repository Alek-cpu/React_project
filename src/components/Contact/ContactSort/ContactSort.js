import React from "react";
import './ContactSort.css';

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

export default ContactSort;