import React from "react";
import "./CbxHeaderInfoLine.css";


const CbxHeaderInfoLine = (props) => {
    return(
        <form className="row-space-cbx">
            <input type="checkbox" className="form__cbx countTask" id="checkbox" onChange={props.onChange} /><label
            htmlFor="checkbox"></label>
        </form>
    );
}

export default CbxHeaderInfoLine;