import React from 'react'

import './Button.css'

function Button({ type, onClick, children, icon }) {
    if (type === 'dots')
        return (
            <button
                className="ui-button-dots"
                onClick={onClick}
            >
                <span className="ui-button-dot" />
                <span className="ui-button-dot" />
                <span className="ui-button-dot" />
            </button>
        )

    if (type === 'icon')
        return (
            <button
                className="ui-button-icon"
                onClick={onClick}
            >
                {children}
            </button>
        )

    if (type === 'circle')
        return (
            <button
                className="ui-button-circle"
                onClick={onClick}
            >
                <img src={icon} />
            </button>
        )
    if (type === 'circle-warning')
        return (
            <button
                className="ui-button-circle-warning"
                onClick={onClick}
            >
                <img src={icon} />
            </button>
        )
}

export default Button
