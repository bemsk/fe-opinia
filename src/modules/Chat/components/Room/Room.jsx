import React, { useContext, useState } from 'react'
import { DeviceTypeContext } from '~/app-context'

import backIcon from '~/commons/assets/back.svg'
import cameraIcon from '~/commons/assets/camera-outlined.svg'
import attachmentIcon from '~/commons/assets/attachment.svg'
import handIcon from '~/commons/assets/hand.svg'
import sendPostIcon from '~/commons/assets/send-post.svg'

import Button from '~/commons/ui/Button/Button'
import TextInput from '~/commons/ui/TextInput/TextInput'
import Conversation from '../Conversation/Conversation'

import './Room.css'

function Room({ avatar, fullname, subtitle, onRoomClosed }) {
    const [text, setText] = useState('')
    const isMobile = useContext(DeviceTypeContext)

    const handleTextInputChange = (e) => {
        setText(e.target.value)
    }

    return (
        <div className="chat-room">
            <div className="chat-room-header">
                {isMobile && (
                    <Button
                        type="icon"
                        onClick={onRoomClosed}
                    >
                        <img
                            src={backIcon}
                            alt="Back"
                        />
                    </Button>
                )}
                <img
                    className="chat-room-header-contact-avatar"
                    src={avatar}
                    alt={fullname}
                />
                <div className="chat-room-header-contact-profile">
                    <span className="chat-room-header-contact-fullname">{fullname}</span>
                    <span className="chat-room-header-contact-subtitle">{subtitle}</span>
                </div>
                <div className="chat-room-header-options">
                    <Button type="dots" />
                </div>
            </div>
            <div className="chat-room-conversation">
                <Conversation />
            </div>
            <div className="chat-room-text-entry">
                <Button type="icon">
                    <img
                        src={cameraIcon}
                        alt="picture"
                    />
                </Button>
                <Button type="icon">
                    <img
                        src={attachmentIcon}
                        alt="attachment"
                    />
                </Button>
                <TextInput
                    placeholder="Pesan"
                    onChange={handleTextInputChange}
                    value={text}
                />
                {text.length > 0 ? (
                    <Button
                        type="circle"
                        icon={handIcon}
                    />
                ) : (
                    <Button
                        type="circle-warning"
                        icon={handIcon}
                    />
                )}
            </div>
        </div>
    )
}

export default Room
