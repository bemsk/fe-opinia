import React, { useEffect, useState } from 'react'
import _ from 'lodash'

import { DeviceTypeContext, AuthContext } from './app-context'

import PageLayout from './commons/ui/PageLayout/PageLayout'
import Chat from './modules/Chat/Chat'
import Search from './modules/Search/Search'
import Menu from './modules/Menu/Menu'
import Title from './modules/Title/Title'
import Auth from './modules/Auth/Auth'

function App() {
    const [isAuthenticated, setIsAuthenticated] = useState(false)
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)
    const [isNavShown, setIsNavShown] = useState(true)

    const handleWindowResizeDebounced = _.debounce(() => {
        setIsMobile(window.innerWidth <= 768)
    }, 400)

    const handleNavClosed = () => {
        setIsNavShown(false)
    }

    const handleNavOpen = () => {
        setIsNavShown(true)
    }

    const authenticate = (identifier, password) => {
        if (identifier.length > 0 && password.length > 0) {
            setIsAuthenticated(true)
        }
    }

    useEffect(() => {
        window.addEventListener('resize', handleWindowResizeDebounced)

        return () => {
            window.removeEventListener('resize', handleWindowResizeDebounced)
        }
    }, [handleWindowResizeDebounced])

    return (
        <DeviceTypeContext.Provider value={isMobile}>
            <AuthContext.Provider value={{ isAuthenticated, authenticate }}>
                {isAuthenticated ? (
                    <PageLayout
                        showNav={isNavShown}
                        left={<Search />}
                        center={<Title />}
                        right={<Menu />}
                        content={
                            <Chat
                                closeNav={handleNavClosed}
                                openNav={handleNavOpen}
                            />
                        }
                    />
                ) : (
                    <Auth />
                )}
            </AuthContext.Provider>
        </DeviceTypeContext.Provider>
    )
}

export default App
