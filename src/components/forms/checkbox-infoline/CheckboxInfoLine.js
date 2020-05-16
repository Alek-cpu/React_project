import React from 'react';

const CheckboxInfoLine = (props) => {
    return (
        <form className="row-space-cbx">
            <input type="checkbox" className="form__cbx chield" id={props.id} /><label
            htmlFor={props.id}></label>
        </form>
    );
}

export default CheckboxInfoLine;
