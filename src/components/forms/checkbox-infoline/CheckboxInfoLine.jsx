import React from 'react';

const CheckboxInfoLine = (props) => {
    return (
        <form className="rowSpaceCbx">
            <input type="checkbox" className="formCbx chield" id={props.id} /><label
            htmlFor={props.id}></label>
        </form>
    );
}

export default CheckboxInfoLine;
