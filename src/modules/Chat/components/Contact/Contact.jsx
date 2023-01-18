import React from 'react'

import './Contact.css'

function Contact({ avatar, fullname, subtitle, updatedAt, unreadMessageCount, onClick }) {
    return (
        <div
            className="chat-contact"
            onClick={onClick}
        >
            <img
                className="chat-contact-avatar"
                src={avatar}
                alt={fullname}
            />
            <div className="chat-contact-profile">
                <span className="chat-contact-fullname">{fullname}</span>
                <span className="chat-contact-subtitle">{subtitle}</span>
            </div>
            <div className="chat-contact-info">
                <span className="chat-contact-updated-at">{updatedAt}</span>
                <span className="chat-contact-unread-count">{unreadMessageCount}</span>
            </div>
        </div>
    )
}

export default Contact
