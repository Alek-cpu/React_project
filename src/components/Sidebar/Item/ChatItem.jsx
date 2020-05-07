import React from 'react';
import '../../../styles/Item.scss';

const ChatItem = () => {
    return (
        <a href="#">
            <div className="mnu-item">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none"
                     xmlns="http://www.w3.org/2000/svg">
                    <path className="mnu-item__svg"
                          d="M3.99996 13.3001H3.71001L3.50499 13.5051L1.36663 15.6435V2.33342C1.36663 1.80335 1.80323 1.36675 2.33329 1.36675H15.6666C16.1967 1.36675 16.6333 1.80335 16.6333 2.33342V12.3334C16.6333 12.8635 16.1967 13.3001 15.6666 13.3001H3.99996Z"
                          stroke="#C2CFE0" stroke-width="1.4"/>
                </svg>
                <div className="mnu-item__name">Chat</div>
            </div>
        </a>
    );
}

export default ChatItem;