import React from "react";

const NameMonth = (props) => {

    const months = ['January', 'February', 'March',
        'April', 'May', 'June',
        'July', 'August', 'September',
        'October', 'November', 'December'];

    let {year, monthName} = props;
    let enterMonth = months[monthName];

    return (
        <div className="nameMonth">{enterMonth+ ' ' + year}</div>
    );
}

export default NameMonth;