import React from 'react';

const CheckboxInfoLine = ({id}) => {
    return (
        <form className="rowSpaceCbx">
            <input type="checkbox" className="formCbx child" id={id}/><label htmlFor={id} />
        </form>
    );
}

export default CheckboxInfoLine;
