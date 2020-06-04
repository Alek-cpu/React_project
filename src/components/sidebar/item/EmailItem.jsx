import React from 'react';

export default function EmailItem() {
    return (
        <a href="#">
            <div className="mnuItem">
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path className="mnuItemSvg"
                          d="M2.37496 5.0005V4.99992C2.37496 4.46528 2.80778 4.03325 3.33329 4.03325H16.6666C17.1967 4.03325 17.6333 4.46985 17.6333 4.99992V14.9999C17.6333 15.53 17.1967 15.9666 16.6666 15.9666H3.33329C2.80331 15.9666 2.36677 15.5301 2.36663 15.0002C2.36663 15.0001 2.36663 15 2.36663 14.9999L2.37496 5.0005Z"
                          stroke="#C2CFE0" stroke-width="1.4"/>
                    <path className="mnuItemSvg" d="M2.5 5L10 10L17.5 5" stroke="#C2CFE0"
                          stroke-width="1.4"/>
                </svg>
                <div className="mnuItemName">Email</div>
            </div>
        </a>
    );
}