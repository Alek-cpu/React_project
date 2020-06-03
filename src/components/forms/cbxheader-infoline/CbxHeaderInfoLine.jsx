import React from 'react';


const CbxHeaderInfoLine = (props) => {
    return (
        <form className="rowSpaceCbx">
            <input type="checkbox" className="formCbx countTask" id="checkbox" /><label
            htmlFor="checkbox"></label>
        </form>
    );
}

export default CbxHeaderInfoLine;