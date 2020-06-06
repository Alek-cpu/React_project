import React from 'react';

import chat from '../../../img/chat-vector.svg';

export default function ChatItem() {
    return (
        <a href="#">
            <div className="mnuItem">
                <img src={chat} alt="chat" />
                <div className="mnuItemName">Chat</div>
            </div>
        </a>
    );
}