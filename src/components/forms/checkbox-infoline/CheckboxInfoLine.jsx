import React from 'react';

const CheckboxInfoLine = ({id}) => {
    return (
        <form className="rowSpaceCbx">
            <input type="checkbox" className="formCbx chield" id={id} /><label
            htmlFor={id}></label>
        </form>
    );
}

export default CheckboxInfoLine;
