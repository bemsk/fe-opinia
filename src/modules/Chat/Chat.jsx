import React, { useContext, useEffect, useState } from 'react'
import { DeviceTypeContext } from '~/app-context'

import './Chat.css'

import MessageList from './components/Conversation/Conversation'
import Contact from './components/Contact/Contact'
import AddressBook from './components/AddressBook/AddressBook'
import Room from './components/Room/Room'

const person = {
    avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    fullname: 'Username',
    subtitle: 'Hello',
    updatedAt: '28 Sep 22',
    unreadMessageCount: '3',
}

function ChatMobile({ onContactClicked, onRoomClosed, conversation }) {
    return (
        <div className="chat-mobile">
            {conversation ? (
                <Room
                    conversation={conversation}
                    avatar={person.avatar}
                    fullname={person.fullname}
                    subtitle={person.subtitle}
                    onRoomClosed={onRoomClosed}
                />
            ) : (
                <AddressBook onContactClicked={onContactClicked} />
            )}
        </div>
    )
}

function ChatWeb({ onContactClicked, onRoomClosed, conversation }) {
    return (
        <div className="chat">
            <div className="chat-aside">
                <AddressBook onContactClicked={onContactClicked} />
            </div>
            <div className="chat-main">
                <Room
                    avatar={person.avatar}
                    fullname={person.fullname}
                    subtitle={person.subtitle}
                    conversation={conversation}
                    onRoomClosed={onRoomClosed}
                />
            </div>
        </div>
    )
}

function Chat({ closeNav, openNav }) {
    const isMobile = useContext(DeviceTypeContext)

    const [activeConversation, setActiveConversation] = useState(null)

    const handleContactClicked = () => {
        setActiveConversation({})
    }

    const handleRoomClosed = () => {
        setActiveConversation(null)
    }

    useEffect(() => {
        if (activeConversation) {
            closeNav()
        } else {
            openNav()
        }
    }, [activeConversation, closeNav, openNav])

    return isMobile ? (
        <ChatMobile
            conversation={activeConversation}
            onContactClicked={handleContactClicked}
            onRoomClosed={handleRoomClosed}
        />
    ) : (
        <ChatWeb
            onContactClicked={handleContactClicked}
            conversation={activeConversation}
            onRoomClosed={handleRoomClosed}
        />
    )
}

export default Chat
