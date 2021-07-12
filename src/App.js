import React from 'react'

import LocalStorage from './components/LocalStorage'
import SessionStorage from './components/SessionStorage'

import './App.css'

export default function App() {
    return (
        <div className="App">
            <div className="container">
                <LocalStorage />
                <SessionStorage />
            </div>
        </div>
    )
}
