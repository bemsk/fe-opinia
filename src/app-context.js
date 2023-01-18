import React from 'react'

const DeviceTypeContext = React.createContext(window.innerWidth <= 768)
const AuthContext = React.createContext(false)

export { DeviceTypeContext, AuthContext }
