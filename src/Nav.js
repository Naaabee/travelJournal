import React from 'react'
import './Nav.css'

export default function Nav() {
  return (
    <nav>
        <img src={require("./images/earth.png")} className="App-logo" alt="logo" />
        <h1>my travel journal.</h1>
    </nav>
  )
}
