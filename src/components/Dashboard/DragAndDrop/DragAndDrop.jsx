import React from "react";
import Cards from "../Cards/Cards";

const DragAndDrop = (props) => {
    return (
        <div className="drag-drop">
            <Cards cardsData={props.cardData} />
        </div>
    );
}

export default DragAndDrop;