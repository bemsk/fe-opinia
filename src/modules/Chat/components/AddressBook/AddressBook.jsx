import React, { useContext } from 'react'
import { DeviceTypeContext } from '~/app-context'

import Button from '~/commons/ui/Button/Button'
import TextInput from '~/commons/ui/TextInput/TextInput'
import Contact from '../Contact/Contact'

import './AddressBook.css'

const person = {
    avatar: 'https://cdn-icons-png.flaticon.com/512/147/147144.png',
    fullname: 'Username',
    subtitle: 'Hello',
    updatedAt: '28 Sep 22',
    unreadMessageCount: '3',
}

function AddressBook({ onContactClicked }) {
    const isMobile = useContext(DeviceTypeContext)

    return (
        <div className="chat-address-book">
            <div className={`chat-address-book-header ${isMobile && `chat-address-book-header-mobile`}`}>
                {!isMobile && <span className="chat-address-book-header-title">Pesan</span>}
                {isMobile && <TextInput placeholder="Cari teman atau pengikut" />}
                <Button type="dots" />
            </div>
            {!isMobile && (
                <div className="chat-address-book-contact-search">
                    <TextInput placeholder="Cari teman atau pengikut" />
                </div>
            )}

            <div className="chat-address-book-contact-list">
                <Contact
                    {...person}
                    onClick={onContactClicked}
                />
                <Contact {...person} />
                <Contact {...person} />
                <Contact {...person} />
                <Contact {...person} />
                <Contact {...person} />
                <Contact {...person} />
                <Contact {...person} />
                <Contact {...person} />
                <Contact {...person} />
                <Contact {...person} />
                <Contact {...person} />
                <Contact {...person} />
                <Contact {...person} />
                <Contact {...person} />
                <Contact {...person} />
                <Contact {...person} />
                <Contact {...person} />
                <Contact {...person} />
                <Contact {...person} />
                <Contact {...person} />
                <Contact {...person} />
                <Contact {...person} />
                <Contact {...person} />
                <Contact {...person} />
            </div>
        </div>
    )
}

export default AddressBook
