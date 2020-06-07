import React from 'react';
import index from "../../../store";

const CheckboxInfoLine = ({id}) => {
    return (
        <form className="rowSpaceCbx">
                <input type="checkbox"  className="child formCbx" id={id} /><label htmlFor={id} />
        </form>
    );
}

export default CheckboxInfoLine;
