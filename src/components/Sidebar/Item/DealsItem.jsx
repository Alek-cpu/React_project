import React from "react";
import '../../../styles/Item.scss';

const DealsItem = () => {
    return (
        <a href="#">
            <div className="mnu-item">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path className="mnu-item__svg"
                          d="M2.49996 4.03325H17.5C17.5717 4.03325 17.6333 4.09485 17.6333 4.16659V15.8333C17.6333 15.905 17.5717 15.9666 17.5 15.9666H2.49996C2.42823 15.9666 2.36663 15.905 2.36663 15.8333V4.16659C2.36663 4.09485 2.42823 4.03325 2.49996 4.03325Z"
                          stroke="#C2CFE0" stroke-width="1.4"/>
                    <rect className="mnu-item__svg" x="6.5" y="3.33325" width="1.16667" height="13.3333"
                          fill="#C2CFE0"/>
                    <rect className="mnu-item__svg" x="12.3334" y="3.33325" width="1.16667"
                          height="13.3333" fill="#C2CFE0"/>
                </svg>
                <div className="mnu-item__name">Deals</div>
            </div>
        </a>
    );
}

export default DealsItem;