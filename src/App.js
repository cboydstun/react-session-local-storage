import React from 'react'

import LocalStorage from './components/LocalStorage'
import SessionStorage from './components/SessionStorage'

export default function App() {
    return (
        <div>
            <LocalStorage />
            <SessionStorage />
        </div>
    )
}
