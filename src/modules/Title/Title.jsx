import React from 'react'

import logo from '~/commons/assets/logo.png'

import './Title.css'

function Title() {
    return (
        <div className="title">
            <img
                className="title-logo"
                src={logo}
                alt="Opinia"
            />
        </div>
    )
}

export default Title
