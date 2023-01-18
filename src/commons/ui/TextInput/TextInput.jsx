import React from 'react'

import './TextInput.css'

function TextInput({ placeholder, onChange, value }) {
    return (
        <input
            className="ui-text-input"
            type="text"
            placeholder={placeholder}
            onChange={onChange}
            value={value}
        />
    )
}

export default TextInput
