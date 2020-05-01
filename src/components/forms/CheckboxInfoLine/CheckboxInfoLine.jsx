import React from "react";
import "./CheckboxInfoLine.css";

const CheckboxInfoLine = (props) => {
    return(
        <form className="row-space-cbx">
            <input type="checkbox" className="form__cbx chield" id={props.id}/><label
            htmlFor={props.id} onChange={props.onChange}></label>
        </form>
    );
}

export default CheckboxInfoLine;
