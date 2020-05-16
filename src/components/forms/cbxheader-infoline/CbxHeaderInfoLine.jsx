import React from 'react';


const CbxHeaderInfoLine = (props) => {
    return(
        <form className="row-space-cbx">
            <input type="checkbox" className="form__cbx countTask" id="checkbox" /><label
            htmlFor="checkbox"></label>
        </form>
    );
}

export default CbxHeaderInfoLine;