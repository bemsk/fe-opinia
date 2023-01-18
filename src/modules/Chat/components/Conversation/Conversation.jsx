import React from 'react'

import bg from '~/commons/assets/chat-bg.png'

import './Conversation.css'

import Message from '../Message/Message'

function Conversation() {
    return (
        <div
            className="chat-conversation"
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className="chat-conversation-date">22 September 2022</div>
            <Message
                text="this is chat message"
                time="12.05"
                type="own-text"
            />
            <Message
                text="this is another chat message"
                time="12.05"
                type="reply-text"
            />
            <Message
                text="this is chat message"
                time="12.05"
                type="own-text"
            />
            <Message
                text="this is chat message"
                time="12.05"
                type="own-text"
            />
            <Message
                text="this is another chat message"
                time="12.05"
                type="reply-text"
            />
            <Message
                text="this is chat message"
                time="12.05"
                type="own-text"
            />
            <Message
                text="this is chat message"
                time="12.05"
                type="own-text"
            />
            <Message
                text="this is another chat message"
                time="12.05"
                type="reply-text"
            />
            <Message
                text="this is chat message"
                time="12.05"
                type="own-text"
            />
            <Message
                text="this is chat message"
                time="12.05"
                type="own-text"
            />
            <Message
                text="this is another chat message"
                time="12.05"
                type="reply-text"
            />
            <Message
                text="this is chat message"
                time="12.05"
                type="own-text"
            />
            <Message
                text="this is chat message"
                time="12.05"
                type="own-text"
            />
            <Message
                text="this is another chat message"
                time="12.05"
                type="reply-text"
            />
            <Message
                text="this is chat message"
                time="12.05"
                type="own-text"
            />
        </div>
    )
}

export default Conversation
