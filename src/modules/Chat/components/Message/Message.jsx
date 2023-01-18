import React from 'react'

import './Message.css'

function Message({ type, text, time }) {
    return (
        <div className="chat-message">
            <span className={`chat-message-box chat-message-box__${type}`}>
                <div className="chat-message-text">{text}</div>
                <div className="chat-message-time">{time}</div>
            </span>
        </div>
    )
}

export default Message
