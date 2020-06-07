import React, {Fragment} from 'react';

const Day = (
    {items}
) => {
    return (
        <Fragment>
            {!!items && items.map((value, index) => (
                <div className="day">
                    <div className="nameDay" key={index}>{value.nameDay}</div>
                    <div className="numberDay" key={index}>{value.numberDay}</div>
                </div>
            ))}
        </Fragment>
    );
}

export default Day;