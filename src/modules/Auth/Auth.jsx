import React, { useContext, useState } from 'react'
import { DeviceTypeContext } from '~/app-context'

import './Auth.css'

import bg from '~/commons/assets/chat-bg.png'
import opiniaLogo from '~/commons/assets/opinia-logo.svg'
import textBg from '~/commons/assets/text-bg.png'
import playButton from '~/commons/assets/google-play-button.png'

import Form from './components/Form/Form'

function Auth() {
    const isMobile = useContext(DeviceTypeContext)

    return (
        <div
            className={isMobile ? 'auth-mobile' : 'auth'}
            style={{ backgroundImage: `url(${bg})` }}
        >
            <div className={isMobile ? 'auth-mobile-displayed-logo' : 'auth-displayed-logo'}>
                {isMobile ? <img src={opiniaLogo} /> : <img src={textBg} />}
            </div>
            <div className={isMobile ? 'auth-mobile-login-form' : 'auth-login-form'}>
                <Form />
                <div className="auth-message">
                    {isMobile ? (
                        <span className="auth-message-text-mobile">
                            Dengan masuk, kamu menyetujui <strong>Ketentuan Layanan</strong> dan{' '}
                            <strong>Panduan Komunitas</strong> Opinia
                        </span>
                    ) : (
                        <span className="auth-message-text">
                            <span>Dapatkan Aplikasi</span>
                            <img src={playButton} />
                        </span>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Auth
