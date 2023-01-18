import React, { useContext, useState } from 'react'

import { DeviceTypeContext, AuthContext } from '~/app-context'
import googleIcon from '~/commons/assets/google-icon.svg'

import './Form.css'

function Form({ onFormSubmit }) {
    const isMobile = useContext(DeviceTypeContext)
    const { authenticate } = useContext(AuthContext)
    const [identifier, setIdentifier] = useState('')
    const [password, setPassword] = useState('')

    const handleFormSubmitted = (e) => {
        e.preventDefault()
        authenticate(identifier, password)
    }

    const handleIdentifierChange = (e) => {
        setIdentifier(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    return (
        <div className="auth-form">
            <form>
                <div className="auth-form-inputs">
                    <input
                        className="auth-form-input"
                        type="text"
                        placeholder="Email atau Nomor Telepon"
                        value={identifier}
                        onChange={handleIdentifierChange}
                    />
                    <input
                        className="auth-form-input"
                        type="password"
                        placeholder="Password"
                        value={password}
                        onChange={handlePasswordChange}
                    />
                </div>
                <div className="auth-form-remembers">
                    <span className="auth-form-remember-me">
                        <input
                            type="checkbox"
                            name="remember-me"
                        />
                        <label htmlFor="remember-me">Ingatkan Saya</label>
                    </span>
                    <span className="auth-form-forgot-password">
                        <a href="#">Lupa kata sandi?</a>
                    </span>
                </div>
                <div className="auth-form-buttons">
                    <button
                        onClick={handleFormSubmitted}
                        className="auth-form-button-login"
                        disabled={identifier.length < 1}
                    >
                        Masuk
                    </button>
                    <button className="auth-form-button-login-google">
                        <img src={googleIcon} />
                        <span>Masuk Dengan Google</span>
                    </button>
                </div>
                <div className="auth-form-messages">
                    <span className="auth-form-message">
                        Belum punya akun? <a href="#">Daftar</a>
                    </span>
                    {!isMobile && (
                        <span className="auth-form-message">
                            Dengan masuk, kamu menyetujui <strong>Ketentuan Layanan</strong> dan{' '}
                            <strong>Panduan Komunitas</strong> Opinia
                        </span>
                    )}
                </div>
            </form>
        </div>
    )
}

export default Form
