import React, { useContext } from 'react'
import { DeviceTypeContext } from '~/app-context'

import homeIcon from '~/commons/assets/home.svg'
import searchIcon from '~/commons/assets/search.svg'
import chatIcon from '~/commons/assets/chat.svg'
import groupIcon from '~/commons/assets/group.svg'
import notificationIcon from '~/commons/assets/notification.svg'
import popRewardIcon from '~/commons/assets/pop-reward.svg'
import penIcon from '~/commons/assets/_1884692142960.svg'

import Button from '~/commons/ui/Button/Button'

import './Menu.css'

function MobileMenu() {
    return (
        <div className="menu-mobile">
            <span className="menu-mobile-item">
                <img src={homeIcon} />
            </span>
            <span className="menu-mobile-item">
                <img src={searchIcon} />
            </span>
            <span className="menu-mobile-item">
                <img src={chatIcon} />
            </span>
            <span className="menu-mobile-item">
                <img src={groupIcon} />
            </span>
        </div>
    )
}

function DesktopMenu() {
    return (
        <div className="menu">
            <span className="menu-item">
                <img src={homeIcon} />
            </span>
            <span className="menu-item">
                <img src={chatIcon} />
            </span>
            <span className="menu-item">
                <img src={groupIcon} />
            </span>
            <span className="menu-item">
                <img src={notificationIcon} />
            </span>
            <span className="menu-item">
                <img src={popRewardIcon} />
            </span>
            <span className="menu-item">
                <img src={penIcon} />
            </span>
        </div>
    )
}

function Menu() {
    const isMobile = useContext(DeviceTypeContext)

    return isMobile ? <MobileMenu /> : <DesktopMenu />
}

export default Menu
